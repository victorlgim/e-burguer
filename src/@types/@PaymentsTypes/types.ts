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