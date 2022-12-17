import { createContext } from "react";
import { iDefaultUserContext } from "../@types/UserTypes/types";
import { api } from "../services/api";
import { notify, verify } from "../utils/toast";
import { iRegisterUser } from "../@types/UserTypes/types";

export const UserContext = createContext({});

export const UserProvider = ({ children }: iDefaultUserContext): JSX.Element => {

  const registerUser = async (params: iRegisterUser) => {

    const { setLoading, reset, navigate, data } = params;

    try {

      setLoading(true);
      await api.post("users", data);
      verify();
      navigate("/");     
   
    } 
    
    catch (err) {
      notify();
    } 
    
    finally {
      reset({ email: "", password: "", passwordConfirmed: "" });
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ registerUser }}>
      {children}
    </UserContext.Provider>
  );
};