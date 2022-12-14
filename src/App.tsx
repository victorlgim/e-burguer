import { GlobalProvider } from "./context/GlobalContext";
import { UserProvider } from "./context/UserContext";
import { PaymentsProvider } from "./context/PaymentsContext";
import GlobalStyle from "./styles/global";
import RoutesMain from "./routes/routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <GlobalProvider>
      <UserProvider>
        <PaymentsProvider>
          <GlobalStyle />
          <RoutesMain />
          <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
        </PaymentsProvider>
      </UserProvider>
    </GlobalProvider>
  );
}

export default App;
