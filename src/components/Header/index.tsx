import React from 'react'
import { DivContainer, DivHeader, DivIcons, ImgCar, ImgExit, ImgHeader, ImgSearch } from './styled'


const Header = () => {
  return (
    
    <DivHeader>
     <DivContainer>
      <ImgHeader src='./logo.png'/>
      <DivIcons>
       <ImgSearch src='./search.png' />
       <ImgCar src='./car.png'/>
       <ImgExit src='./exit.png' />
      </DivIcons>
      </DivContainer>
    </DivHeader>
    
  )
}

export default Header
