import { createContext, useContext, useState } from "react";
import requestApi from "../../services/API";

const UserListContext = createContext();

export const UserListProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);

  const getUsers = async () => {
    const { data } = await requestApi.get("/users");

    setUserList(data);

    return data;
  };

  return (
    <UserListContext.Provider
      value={{
        userList,
        getUsers,
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};

export const useUserList = () => useContext(UserListContext);
