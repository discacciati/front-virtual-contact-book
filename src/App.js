import "./App.css";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";
import Modal from "react-modal";
//import EventsModal from "./components/EventsModal";
import { useRegisterModal } from "./providers/RegisterModal";
import { customStyles } from "./styles/global";
import RoutesPath from "./routes";
import "react-toastify/dist/ReactToastify.css";
//Setando o pai do Modal, no nosso caso #root
Modal.setAppElement("#root");

function App() {
  const { modalIsOpen, closeModal } = useRegisterModal();

  return (
    <div className="App">
      <GlobalStyle />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <EventsModal /> */}
      </Modal>
      <RoutesPath />
      <ToastContainer
        autoClose={3000}
        theme="dark"
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
