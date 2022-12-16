import { useContext } from "react";
import { PaymentsContext } from "../../context/PaymentsContext";
import { DefaultContextAdded } from "../../@types/@PaymentsTypes/types";
import Input from "../Input";
import InputMax from "../InputMax";
import { DivContainer, DivHeader, DivIcons, ImgCar, ImgExit, ImgHeader, ImgSearch, DivImgCar, SpanCountCar } from "./styled";

const Header = () => {
  
  const { exitAccount, mobile, setMobile, cart } = useContext(PaymentsContext) as DefaultContextAdded

  return (
    <DivHeader>
      <DivContainer>
        {
        
        mobile ?  <Input />
         : 
         (
          <>
            <ImgHeader src="./logo.png" />
            <DivIcons>
              <ImgSearch onClick={() => setMobile(true)} src="./search.png" />
              <InputMax />
              <DivImgCar>
              <ImgCar src="./car.png" />
              <SpanCountCar>{cart.length}</SpanCountCar>
              </DivImgCar>
              <ImgExit onClick={exitAccount} src="./exit.png" />
            </DivIcons>
          </>
        )}
      </DivContainer>
    </DivHeader>
  );
};

export default Header;
