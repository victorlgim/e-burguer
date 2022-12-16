import React from 'react'

export interface iDefaultGlobalContext {
    children: React.ReactNode,
}  

export type GlobalContextType = {
    loading: boolean;
    setLoading: (loading: boolean) => void;

};
