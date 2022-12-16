import { createContext } from "react";

import { iDefaultUserContext } from "../@types/@UserTypes/types";

export const UserContext = createContext({})

export const UserProvider = ({ children }: iDefaultUserContext) => {
     
    
     
   return (
     <UserContext.Provider value={{  }}>
        { children }
     </UserContext.Provider>
   )
}