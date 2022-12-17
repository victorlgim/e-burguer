import React from 'react'
import { MyObjectType } from '../GlobalTypes/types';
import { iDefaultTheme } from '../GlobalTypes/types';

export interface iDefaultPaymentsContext {
  children: React.ReactNode;
  changeTheme: () => void;
  setTheme: any;
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

 export type DefaultContextAdded = {
    exitAccount: () => void;
    mobile: boolean;
    setMobile: (value: boolean) => void;
    cart: MyObjectType[];
    setModal: (value: boolean) => void;
  };

  export type DefaultContextCard = {
    cart: MyObjectType[] | any;
    setCart: (value: MyObjectType[]) => void;
    list: MyObjectType[];
    modal: boolean;
    setModal: (value: boolean) => void;
  }

  export type DefaultValueList = {
    list: MyObjectType[];
    setList: (value: MyObjectType[]) => void;
  }

 export interface Item {
    price: number;
  }