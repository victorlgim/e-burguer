import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { iDefaultPaymentsContext, iDefaultListContext } from "../@types/PaymentsTypes/types";
import { GlobalContext } from "./GlobalContext";
import { useContext, useState } from "react";
import { GlobalContextType } from "../@types/GlobalTypes/types";
import { MyObjectType } from "../@types/GlobalTypes/types";
import { sucessLogout } from "../utils/toast";
import light from "../styles/themes/light";

export const CartContext = createContext({});


export const CartProvider = ({ children, setTheme }: iDefaultPaymentsContext) => {

   const navigate = useNavigate()
   const { setLoading } = useContext(GlobalContext) as GlobalContextType
   const [ list, setList ] = useState<Array<MyObjectType>>([]) 
   const [ cart, setCart ] = useState<Array<iDefaultListContext>>([])
   const [ mobile, setMobile ] = useState<boolean>(false)
   const [ resMobile, setResMobile ] = useState<string>('')
   const [ empty, setEmpty ] = useState<boolean>(true)
   const [ modal, setModal ] = useState<boolean>(false)
   const [ counter, setCounter ] = useState<number>(1)
   
   const changeResMobile = (event: React.ChangeEvent<HTMLInputElement>) => {
      setResMobile(event.target.value);
      resMobile.length === 0 ? setEmpty(false) : setEmpty(true);
    }
     
   const exitAccount = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setTheme(light)
      navigate("/"); 
      setLoading(false);
      sucessLogout()
  };
      
   return (
     <CartContext.Provider value={{ exitAccount, modal, setCounter, counter, setModal, list, setList, mobile, setMobile, resMobile, setResMobile, empty, changeResMobile, cart, setCart }}>
        { children }
     </CartContext.Provider>
   )
}