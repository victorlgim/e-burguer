import React from "react";
import { BtnCloseModal, ContainerTopHeaderModal, MsgEmpty, CartEmpty, DivTopHeaderModal, DivTopModal, MainCart, ModalContainer, ModalMenu, TitleHeaderModal } from "./styled";

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
        <CartEmpty>Sua sacola está vazia</CartEmpty>
        <MsgEmpty>Adicione itens</MsgEmpty>
      </ModalMenu>
    </ModalContainer>
  );
};

export default Modal;
