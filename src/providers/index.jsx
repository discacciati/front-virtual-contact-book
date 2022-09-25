import { UserInfoProvider } from "./userInfo";
import { RegisterModalProvider } from "./RegisterModal";
import { ContactListProvider } from "./ContactList";
import { UserListProvider } from "./UserList";
import { LoadingProvider } from "./LoadingProvider";

const Providers = ({ children }) => {
  return (
    <UserInfoProvider>
      <ContactListProvider>
        <UserListProvider>
          <LoadingProvider>
            <RegisterModalProvider>{children}</RegisterModalProvider>
          </LoadingProvider>
        </UserListProvider>
      </ContactListProvider>
    </UserInfoProvider>
  );
};

export default Providers;
