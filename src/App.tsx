import { GlobalProvider } from "./context/GlobalContext";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import GlobalStyle from "./styles/global";
import RoutesMain from "./routes/routes";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from 'styled-components'
 import 'react-toastify/dist/ReactToastify.css';
import light from "./styles/themes/light";
import { useState } from "react";
import dark from "./styles/themes/dark";


function App() {
  const [theme, setTheme] = useState(light) 
  const toggleTheme: () => void = () => setTheme(theme.title === 'light' ? dark : light)
 
  return (

    <ThemeProvider theme={ theme }>
      
    <GlobalProvider>
       
      <UserProvider>
        <CartProvider changeTheme={ toggleTheme } setTheme={ setTheme }>
          <GlobalStyle />
          <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
          <RoutesMain changeTheme={ toggleTheme } theme={ theme } setTheme={ setTheme }/>
          
        </CartProvider>
      </UserProvider>
      
    </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
