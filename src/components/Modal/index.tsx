import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CardsCart from "../CardsCart";
import { ContainerCart, BtnCloseModal, ContainerTopHeaderModal, MsgEmpty, CartEmpty, DivTopHeaderModal, DivTopModal, ModalContainer, ModalMenu, TitleHeaderModal, UlCart } from "./styled";
import { DefaultContextCard } from "../../@types/PaymentsTypes/types";
import { MyObjectType } from '../../@types/GlobalTypes/types';
import Total from "../Total";


const Modal = () => {

  const { cart, setModal } = useContext(CartContext) as DefaultContextCard

  

  return (
    <ModalContainer>
      <div>
      <ModalMenu>
        <DivTopHeaderModal>
          <ContainerTopHeaderModal>
            <DivTopModal>
              <TitleHeaderModal>Carrinho de compras</TitleHeaderModal>
              <BtnCloseModal onClick={() => setModal(false)} src="./X.png" />
            </DivTopModal>
          </ContainerTopHeaderModal>
        </DivTopHeaderModal>
        
         
        <ContainerCart>
          
            
            {
                 
              cart.length ?
              (
                <>
                <UlCart>
                  
                  {
                  cart.map((lunch: MyObjectType) => (
                <CardsCart key={lunch.id} id={lunch.id} name={lunch.name} category={lunch.category} price={lunch.price} img={lunch.img} />
              )
              )
              }
              </UlCart>
              <Total />
              </>
              )
              :
              (
              <>
               <CartEmpty>Sua sacola está vazia</CartEmpty>
               <MsgEmpty>Adicione itens</MsgEmpty> 
              </>
              )

            }
           
           
           
         </ContainerCart>
        
      </ModalMenu>
      </div>
    </ModalContainer>
  );
};

export default Modal;
