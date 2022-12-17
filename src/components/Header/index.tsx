import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { DefaultContextAdded } from "../../@types/PaymentsTypes/types";
import Input from "../Input";
import InputMax from "../InputMax";
import { DivContainer, MdNight, DivHeader, DivIcons, ImgCar, ImgExit, ImgHeader, ImgSearch, DivImgCar, SpanCountCar, MdLight } from "./styled";

const Header = ({ changeTheme, theme }: any) => {
  
  const { exitAccount, mobile, setMobile, cart, setModal } = useContext(CartContext) as DefaultContextAdded
 
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
              {
                theme.title === 'light' ? 
                <MdNight onClick={changeTheme}/> 
                : 
                <MdLight src='./light.png' onClick={changeTheme}/>
              }       
              <ImgSearch onClick={ () => setMobile(true) } src="./search.png" />
              <InputMax />
              <DivImgCar>
              <ImgCar onClick={ () => setModal(true) } src="./car.png" />
              <SpanCountCar onClick={ () => setModal(true) }>{cart.length}</SpanCountCar>
              </DivImgCar>
              <ImgExit onClick={exitAccount}  src="./exit.png" />
            </DivIcons>
          </>
        )}
      </DivContainer>
    </DivHeader>

  );
};

export default Header;
