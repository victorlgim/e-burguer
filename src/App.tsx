import { GlobalProvider } from "./context/GlobalContext";
import { UserProvider } from "./context/UserContext";
import { PaymentsProvider } from "./context/PaymentsContext";
import GlobalStyle from "./styles/global";
import RoutesMain from "./routes/routes";
import { ToastContainer } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <GlobalProvider>
      <UserProvider>
        <PaymentsProvider>
          <GlobalStyle />
          <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
          <RoutesMain />
          
        </PaymentsProvider>
      </UserProvider>
    </GlobalProvider>
  );
}

export default App;
