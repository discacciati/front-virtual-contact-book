import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import requestApi from "../../services/API";
import { useUserInfo } from "../userInfo";

export const ContactListContext = createContext();

export const ContactListProvider = ({ children }) => {
  const { userInfo, saveUserInfo } = useUserInfo();
  const { type, accessToken, id } = userInfo || {};

  const [contactList, setContactList] = useState([]);

  function contactsFilter(data) {
    return data.filter((contact) => contact.userId === id);
  }

  async function contactFilter(data) {
    const { data: user } = await requestApi.get(`/contact/${id}`);

    return data.filter((contact) => {
      const canSee = contact.find((userId) => userId === id);

      return canSee;
    });
  }

  const addContact = async (contactData, onSuccess, onFailed) => {
    const data = { ...contactData, userId: id };

    try {
      const response = await requestApi.postAuth(`/contact`, data, accessToken);
      toast.success("Contato cadastrado com sucesso!");
      setContactList([...contactList, response.data]);

      if (onSuccess) onSuccess();
    } catch {
      toast.error("Ops! Houve um problema ao tentar cadastrar um contato.");

      if (onFailed) onFailed();
    }
  };

  const deleteContact = async (contactId) => {
    try {
      await requestApi.requestAuth(`/contact/${id}`, accessToken, "delete");
      setContactList(contactList.filter((contact) => contact.id !== contactId));
    } catch {
      toast.error("Ops! Houve um problema ao tentar deletar o contato.");
    }
  };

  const getContactList = async () => {
    const response = await requestApi.getAuth(`/contact`, accessToken);

    const initialList =
      type === "cliente"
        ? contactsFilter(response.data)
        : await contactFilter(response.data);

    setContactList(initialList);
  };

  return (
    <ContactListContext.Provider
      value={{
        contactsList: contactList,
        addContact,
        deleteContact,
        getContactList,
      }}
    >
      {children}
    </ContactListContext.Provider>
  );
};

export const useContactList = () => useContext(ContactListContext);
