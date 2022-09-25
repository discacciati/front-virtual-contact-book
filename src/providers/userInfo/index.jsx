import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import requestApi from "../../services/API";

export const userInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const saveUserInfo = (data) => {
    const { user, accessToken } = data;

    const newUserInfo = { ...user, accessToken };

    setUserInfo(newUserInfo);
    setIsAuthenticated(true);

    localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
  };

  const eraseUserInfo = () => {
    setUserInfo("");
    localStorage.removeItem("userInfo");
    setIsAuthenticated(false);
  };

  const getUserInfo = async () => {
    const localUser = localStorage.getItem("userInfo");

    if (!localUser) {
      return;
    }

    try {
      const userData = JSON.parse(localUser);
      await requestApi.verifyToken(userData.accessToken);
      setUserInfo(userData);
      setIsAuthenticated(true);
    } catch {
      toast.error("Sua sessão expirou, faça login novamente");
      eraseUserInfo();
    }
  };

  return (
    <userInfoContext.Provider
      value={{
        isAuthenticated,
        userInfo,
        saveUserInfo,
        eraseUserInfo,
        getUserInfo,
      }}
    >
      {children}
    </userInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(userInfoContext);
