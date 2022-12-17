import { createContext, useState } from "react";
import { iDefaultGlobalContext } from "../@types/GlobalTypes/types";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

export const GlobalContext = createContext({})


export const GlobalProvider = ({ children }: iDefaultGlobalContext) => {
     
    const [loading, setLoading] = useState(false)
   

 
  
     
   return (
     <GlobalContext.Provider value={{ loading, setLoading }}>
        { children }
     </GlobalContext.Provider>
   )
}