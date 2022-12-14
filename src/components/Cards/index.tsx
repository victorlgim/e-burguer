import React from 'react'
import { BtnAddBurguer, CardBurguers, CategoryBurguer, ImgBurguer, PriceBurguer, TitleBurguer } from './styled'

const Cards = () => {
  return (
    
    <CardBurguers>
        <ImgBurguer src='lunch.png'/>
        <TitleBurguer>Hamburguer</TitleBurguer>
        <CategoryBurguer>Sanduíche</CategoryBurguer>
        <PriceBurguer>R$ 14,00</PriceBurguer>
        <BtnAddBurguer>Adicionar</BtnAddBurguer>
    </CardBurguers>
  )
}

export default Cards
