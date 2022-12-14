// import Login from "./pages/Login/Login";
// import Homepage from "./pages/Dashboard/Dashboard";
import { GlobalProvider } from "./context/GlobalContext";
import { UserProvider } from "./context/UserContext";
import { PaymentsProvider } from "./context/PaymentsContext";
import Register from "./pages/Register/Register";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <GlobalProvider>
      <UserProvider>
        <PaymentsProvider>
          <GlobalStyle />
          {/* <Homepage /> */}
          <Register />
        </PaymentsProvider>
      </UserProvider>
    </GlobalProvider>
  );
}

export default App;
