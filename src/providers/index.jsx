import { UserInfoProvider } from "./userInfo";
import { RegisterModalProvider } from "./RegisterModal";
import { ContactListProvider } from "./ContactList";
import { UserListProvider } from "./UserList";

const Providers = ({ children }) => {
  return (
    <UserInfoProvider>
      <ContactListProvider>
        <UserListProvider>
          <RegisterModalProvider>{children}</RegisterModalProvider>
        </UserListProvider>
      </ContactListProvider>
    </UserInfoProvider>
  );
};

export default Providers;
