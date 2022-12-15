import { useContext } from "react";
import { PaymentsContext } from "../../context/PaymentsContext";
import Input from "../Input";
import InputMax from "../InputMax";
import { DivContainer, DivHeader, DivIcons, ImgCar, ImgExit, ImgHeader, ImgSearch } from "./styled";


const Header = () => {

   const { exitAccount } = useContext<any>(PaymentsContext)

  return (
    <DivHeader>
      <DivContainer>
        {/* <Input /> */}
        <ImgHeader src="./logo.png" />
        <DivIcons>
          <ImgSearch src='./search.png' />
          <InputMax />
          <ImgCar src="./car.png" />
          <ImgExit onClick={exitAccount} src="./exit.png" />
        </DivIcons>
      </DivContainer>
    </DivHeader>
  );
};

export default Header;
