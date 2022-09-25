import { createContext, useContext, useState } from "react";

const RegisterModalContext = createContext();

export const RegisterModalProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <RegisterModalContext.Provider
      value={{ openModal, closeModal, modalIsOpen }}
    >
      {children}
    </RegisterModalContext.Provider>
  );
};

export const useRegisterModal = () => useContext(RegisterModalContext);
