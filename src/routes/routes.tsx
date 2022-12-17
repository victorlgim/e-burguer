import { Routes, Route } from "react-router-dom";
import AuthLogin from "../components/AuthLogin";
import AuthRoutes from "../components/AuthRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const RoutesMain = ({ changeTheme, theme, setTheme }: any) => {
    return (
      <Routes>
        <Route element={<AuthLogin />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="*" element={<Login/>} />
        </Route>
        <Route element={<AuthRoutes />}>
          <Route path="/dashboard" element={<Dashboard changeTheme={ changeTheme } theme={ theme } setTheme={ setTheme }/>} />
        </Route>
      </Routes>
    );
  };
  
  export default RoutesMain;