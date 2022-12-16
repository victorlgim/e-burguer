import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { iDefaultPaymentsContext, iDefaultListContext } from "../@types/@PaymentsTypes/types";
import { GlobalContext } from "./GlobalContext";
import { useContext, useState } from "react";
import { GlobalContextType } from "../@types/@GlobalTypes/types";

export const PaymentsContext = createContext({});


export const PaymentsProvider = ({ children }: iDefaultPaymentsContext) => {

   const navigate = useNavigate()
   const { setLoading } = useContext(GlobalContext) as GlobalContextType
   const [ cart, setCart ] = useState<Array<iDefaultListContext>>([])
   const [ mobile, setMobile ] = useState<boolean>(false)
   const [ resMobile, setResMobile ] = useState<string>('')
   const [ empty, setEmpty ] = useState<boolean>(true)
   

   const changeResMobile = (event: React.ChangeEvent<HTMLInputElement>) => {
      setResMobile(event.target.value);
      resMobile.length === 0 ? setEmpty(false) : setEmpty(true);
      
    }
     
   const exitAccount = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/"); 
      setLoading(false);
  };
      
   return (
     <PaymentsContext.Provider value={{ exitAccount, mobile, setMobile, resMobile, setResMobile, empty, changeResMobile, cart, setCart }}>
        { children }
     </PaymentsContext.Provider>
   )
}