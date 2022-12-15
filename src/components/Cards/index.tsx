import React from 'react'
import { BtnAddBurguer, CardBurguers, CategoryBurguer, ImgBurguer, PriceBurguer, TitleBurguer } from './styled'

interface MyObjectType {
  id: number;
 name: string;
 category: string;
 price: number;
 img: string;
};

const Cards = ({ id, name, category, price, img }: MyObjectType) => {
  return (
    
    <CardBurguers id={id + ''}>
        <ImgBurguer src={img}/>
        <TitleBurguer>{ name }</TitleBurguer>
        <CategoryBurguer>{ category }</CategoryBurguer>
        <PriceBurguer>{price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</PriceBurguer>
        <BtnAddBurguer id={id + ''}>Adicionar</BtnAddBurguer>
    </CardBurguers>
  )
}

export default Cards
