import React from "react";
import {
  ImgLiCart,
  DivPrimaryCart,
  DivSecondaryCart,
  DivThreeCart,
  TitleLiCart,
  DivCounterCart,
  TrashCart,

  LiCart,
  DivHeaderCartLi,
  DivImgLiCart,
  ButtonSub,
  ButtonSum,
  ImgSub,
  ImgSum,
  SpanQtd,
  DivHeaderPrimarySecond,
} from "./styled";

const CardsCart = () => {
  return (
    <LiCart>
      <DivHeaderCartLi>
        <DivHeaderPrimarySecond>
          <DivPrimaryCart>
            <DivImgLiCart>
              <ImgLiCart src="./imgcart.png" />
            </DivImgLiCart>
          </DivPrimaryCart>
          <DivSecondaryCart>
            <TitleLiCart>Hamburguer</TitleLiCart>
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
          <TrashCart src="/trash.png" />
        </DivThreeCart>
      </DivHeaderCartLi>
    </LiCart>
  );
};

export default CardsCart;
