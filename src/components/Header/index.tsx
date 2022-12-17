import { useContext } from "react";
import { PaymentsContext } from "../../context/PaymentsContext";
import { DefaultContextAdded } from "../../@types/@PaymentsTypes/types";
import Input from "../Input";
import InputMax from "../InputMax";
import { DivContainer, DivHeader, DivIcons, ImgCar, ImgExit, ImgHeader, ImgSearch, DivImgCar, SpanCountCar, MdLight } from "./styled";
import {  MdDarkMode } from 'react-icons/md'


const Header = ({ changeTheme, theme }: any) => {
  
  const { exitAccount, mobile, setMobile, cart, setModal } = useContext(PaymentsContext) as DefaultContextAdded
 
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
                <MdDarkMode onClick={changeTheme}/> 
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
