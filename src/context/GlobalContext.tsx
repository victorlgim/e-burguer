import { createContext, useState } from "react";
import { iDefaultGlobalContext } from "../@types/GlobalTypes/types";

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }: iDefaultGlobalContext) => {
     
    
     
   return (
     <GlobalContext.Provider value={{  }}>
        { children }
     </GlobalContext.Provider>
   )
}