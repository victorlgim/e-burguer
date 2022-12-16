import React, { useContext } from "react";
import { ImgLiCart, DivPrimaryCart, DivSecondaryCart, CategorieCart, DivThreeCart, TitleLiCart, TrashCart, LiCart, DivHeaderCartLi,  DivImgLiCart, DivHeaderPrimarySecond } from "./styled";
import { PaymentsContext } from "../../context/PaymentsContext";
import { DefaultContextCard } from "../../@types/@PaymentsTypes/types";
import { MyObjectType } from '../../@types/@GlobalTypes/types';


const CardsCart = ({ id, name, img, category }: MyObjectType) => {
  
  const { cart, setCart } = useContext(PaymentsContext) as DefaultContextCard

  const removeList = (event: React.MouseEvent<HTMLImageElement>) => {

    const button = event.currentTarget as HTMLImageElement;

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
            <CategorieCart> { category } </CategorieCart>
          </DivSecondaryCart>
        </DivHeaderPrimarySecond>
        <DivThreeCart>
          <TrashCart onClick={removeList} id={id + ""} src="/trash.png" />
        </DivThreeCart>
      </DivHeaderCartLi>
    </LiCart>
  );
};

export default CardsCart;
