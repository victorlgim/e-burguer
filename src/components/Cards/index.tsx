import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { BtnAddBurguer, CardBurguers, CategoryBurguer, ImgBurguer, PriceBurguer, TitleBurguer } from './styled'
import { MyObjectType } from '../../@types/GlobalTypes/types';
import { DefaultContextCard } from '../../@types/PaymentsTypes/types';
import { AddItemToast, ErrorItemToast } from '../../utils/toast';



const Cards = ({ id, name, category, price, img }: MyObjectType) => {
   
  const { cart, setCart, list } = useContext(CartContext) as DefaultContextCard
   
  const selectItems = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    const button = event.target as HTMLButtonElement;

    const data = list.find((element: MyObjectType) => element.id * 1 === Number(button.id) * 1);

    if (data) {
      
      const verify = cart.filter((lunch: MyObjectType) => data.id * 1 === lunch.id * 1);

      if (verify.length < 1) {
        setCart([...cart, data]);
        AddItemToast()
      } else {
        ErrorItemToast();
      }
    }
  
  }

  return (
    
    <CardBurguers id={ id + '' }>

        <ImgBurguer src={ img }/>
        <TitleBurguer>{ name }</TitleBurguer>
        <CategoryBurguer>{ category }</CategoryBurguer>
        <PriceBurguer>{ price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }</PriceBurguer>
        <BtnAddBurguer onClick={ selectItems } id={ id + '' }>Adicionar</BtnAddBurguer>

    </CardBurguers>
  )
}

export default Cards
