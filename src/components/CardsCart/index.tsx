import React, { useContext } from "react";
import { ImgLiCart, DivPrimaryCart, DivSecondaryCart, DivThreeCart, TitleLiCart, DivCounterCart, TrashCart, LiCart, DivHeaderCartLi,  DivImgLiCart,  ButtonSub,  ButtonSum,  ImgSub, ImgSum,  SpanQtd,  DivHeaderPrimarySecond } from "./styled";
import { PaymentsContext } from "../../context/PaymentsContext";
import { DefaultContextCard } from "../../@types/@PaymentsTypes/types";
import { MyObjectType } from '../../@types/@GlobalTypes/types';

const CardsCart = ({ id, name, img }: MyObjectType) => {
  
  const { cart, setCart } = useContext(PaymentsContext) as DefaultContextCard

  const removeList  = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    const button = event.target as HTMLButtonElement;
   
      setCart(cart.filter((lunch: MyObjectType) => Number(button.id) !== lunch.id * 1));
   
    }

  return (
    <LiCart>
      <DivHeaderCartLi>
        <DivHeaderPrimarySecond>
          <DivPrimaryCart>
            <DivImgLiCart>
              <ImgLiCart src={ img } />
            </DivImgLiCart>
          </DivPrimaryCart>
          <DivSecondaryCart>
            <TitleLiCart>{ name }</TitleLiCart>
            <DivCounterCart>
              <ButtonSub>
                <ImgSub src="./sub.png" />
              </ButtonSub>
              <SpanQtd>1</SpanQtd>
              <ButtonSum>
                <ImgSum src="./sum.png" />
              </ButtonSum>
            </DivCounterCart>
          </DivSecondaryCart>
        </DivHeaderPrimarySecond>
        <DivThreeCart>
          <TrashCart onClick={() => removeList } id={id + ""} src="/trash.png" />
        </DivThreeCart>
      </DivHeaderCartLi>
    </LiCart>
  );
};

export default CardsCart;
