import React from 'react'

export interface iDefaultPaymentsContext {
    children: React.ReactNode;
}  

export interface iDefaultListContext {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

export type PaymentsContextState = {
    mobile: boolean;
    resMobile: string;
  };
  
 export type PaymentsContextActions = {
    setMobile: (mobile: boolean) => void;
    setResMobile: (resMobile: string) => void;
    changeResMobile: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setLoading: (loading: boolean) => void;
    exitAccount: () => void;
  };
  
 export type PaymentsContextType = {
    state: PaymentsContextState;
    actions: PaymentsContextActions;
  };