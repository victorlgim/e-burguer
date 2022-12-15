import React from "react";
import CardsCart from "../CardsCart";
import { ContainerCart, DivBottomCart, TopDivBottomCart, BtnCloseModal, ContainerTopHeaderModal, MsgEmpty, CartEmpty, DivTopHeaderModal, DivTopModal, ModalContainer, ModalMenu, TitleHeaderModal, UlCart, MsgTotalCartBottom, SpanTotal, ButtonRemoveAll } from "./styled";

const Modal = () => {
  return (
    <ModalContainer>
      <ModalMenu>
        <DivTopHeaderModal>
          <ContainerTopHeaderModal>
            <DivTopModal>
              <TitleHeaderModal>Carrinho de compras</TitleHeaderModal>
              <BtnCloseModal src="./X.png" />
            </DivTopModal>
          </ContainerTopHeaderModal>
        </DivTopHeaderModal>
        {/* <CartEmpty>Sua sacola está vazia</CartEmpty>
        <MsgEmpty>Adicione itens</MsgEmpty> */}
         
        <ContainerCart>
          <UlCart>
           <CardsCart />
           {/* <CardsCart />
           <CardsCart />
           <CardsCart />  */}
           </UlCart>
            <DivBottomCart>
                <TopDivBottomCart>
                   <MsgTotalCartBottom>Total</MsgTotalCartBottom>
                   <SpanTotal>R$ 17,00</SpanTotal>
                  </TopDivBottomCart>
                  <ButtonRemoveAll>Remover todos</ButtonRemoveAll>
              </DivBottomCart>
         </ContainerCart>
        
      </ModalMenu>
    </ModalContainer>
  );
};

export default Modal;
