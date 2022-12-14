import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iDefaultGlobalContext } from "../@types/@GlobalTypes/types";
export const GlobalContext = createContext({})


export const GlobalProvider = ({ children }: iDefaultGlobalContext) => {
     
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
  
     
   return (
     <GlobalContext.Provider value={{ loading, setLoading }}>
        { children }
     </GlobalContext.Provider>
   )
}