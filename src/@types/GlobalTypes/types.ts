import React from 'react'

export interface iDefaultGlobalContext {
    children: React.ReactNode,
}  

export type GlobalContextType = {
    loading: boolean;
    setLoading: (loading: boolean) => void;

};

export interface MyObjectType {
    id: number;
   name: string;
   category: string;
   price: number;
   img: string;
  };

  export interface iDefaultTheme {

    title: string,

    colors: {
        primary: string,
        secundary: string,

        background: string,
        text: string
    },
    }