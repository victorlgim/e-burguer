import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iDefaultPaymentsContext } from "../@types/@PaymentsTypes/types";
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";
import { iDefaultListContext } from "../@types/@PaymentsTypes/types";

export const PaymentsContext = createContext({})

export const PaymentsProvider = ({ children }: iDefaultPaymentsContext) => {

   const navigate = useNavigate()
   const { setLoading } = useContext<any>(GlobalContext)
   const [list, setList] = useState<[]>([])
     
   const exitAccount: () => void = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/"); 
      setLoading(false);
  };
     
   return (
     <PaymentsContext.Provider value={{ exitAccount }}>
        { children }
     </PaymentsContext.Provider>
   )
}