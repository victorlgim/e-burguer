import { createContext, useState } from "react";

import { iDefaultPaymentsContext } from "../@types/PaymentsTypes/types";

export const PaymentsContext = createContext({})

export const PaymentsProvider = ({ children }: iDefaultPaymentsContext) => {
     
    
     
   return (
     <PaymentsContext.Provider value={{  }}>
        { children }
     </PaymentsContext.Provider>
   )
}