import React from "react";
import { ImgLiCart, ContainerCart, DivPrimaryCart, DivSecondaryCart, DivThreeCart, TitleLiCart, DivCounterCart, TrashCart, DivBottomCart, TopDivBottomCart, BtnCloseModal, ContainerTopHeaderModal, MsgEmpty, CartEmpty, DivTopHeaderModal, DivTopModal, ModalContainer, ModalMenu, TitleHeaderModal, UlCart, LiCart, DivHeaderCartLi, DivImgLiCart, ButtonSub, ButtonSum, ImgSub, ImgSum, SpanQtd, DivHeaderPrimarySecond, MsgTotalCartBottom, SpanTotal, ButtonRemoveAll } from "./styled";

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
           <LiCart>
            <DivHeaderCartLi>
              <DivHeaderPrimarySecond>
                
               <DivPrimaryCart>
                 <DivImgLiCart>
                    <ImgLiCart src="./imgcart.png"/>
                 </DivImgLiCart>
               </DivPrimaryCart>
               <DivSecondaryCart>
                 <TitleLiCart>Hamburguer</TitleLiCart>
                 <DivCounterCart>
                   <ButtonSub><ImgSub src="./sub.png"/></ButtonSub>
                   <SpanQtd>1</SpanQtd>
                   <ButtonSum><ImgSum src="./sum.png"/></ButtonSum>
                 </DivCounterCart>
               </DivSecondaryCart>
               </DivHeaderPrimarySecond>
               <DivThreeCart>
                  <TrashCart src='/trash.png'/>
               </DivThreeCart>
            </DivHeaderCartLi>
              <DivBottomCart>
                <TopDivBottomCart>
                   <MsgTotalCartBottom>Total</MsgTotalCartBottom>
                   <SpanTotal>R$ 17,00</SpanTotal>
                  </TopDivBottomCart>
                  <ButtonRemoveAll>Remover todos</ButtonRemoveAll>
              </DivBottomCart>
            </LiCart>
           </UlCart>
         </ContainerCart>
      </ModalMenu>
    </ModalContainer>
  );
};

export default Modal;
