import { useContext } from "react";
import { PaymentsContext } from "../../context/PaymentsContext";
import CustomizedBadges from "../CartUI";
import Input from "../Input";
import InputMax from "../InputMax";
import {
  DivContainer,
  DivHeader,
  DivIcons,
  ImgCar,
  ImgExit,
  ImgHeader,
  ImgSearch,
  DivImgCar,
  SpanCountCar
} from "./styled";

const Header = () => {
  const { exitAccount, mobile, setMobile } = useContext<any>(PaymentsContext);

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
              <SpanCountCar>0</SpanCountCar>
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
