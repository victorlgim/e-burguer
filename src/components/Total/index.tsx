import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { DivBottomCart, TopDivBottomCart, MsgTotalCartBottom, SpanTotal, ButtonRemoveAll } from '../Modal/styled'
import { DefaultContextCard } from '../../@types/PaymentsTypes/types'
import { Item } from '../../@types/PaymentsTypes/types'

const Total = () => {

    const { cart, setCart } = useContext(CartContext) as DefaultContextCard

  return (
    
      <DivBottomCart>
        <TopDivBottomCart>
          <MsgTotalCartBottom>Total</MsgTotalCartBottom>
          <SpanTotal>
          {
          
          cart.reduce((total: number, item: Item) => {
              return item.price * 1 + total;
            }, 0)
            .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
            
            }
            </SpanTotal>
          </TopDivBottomCart>
          <ButtonRemoveAll onClick={() => setCart([])}>Remover todos</ButtonRemoveAll>
      </DivBottomCart>
    
  )
}

export default Total