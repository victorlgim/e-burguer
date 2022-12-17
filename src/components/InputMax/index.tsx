import React from 'react'
import { ButtonInputMax, DivInputHeaderMax, ImgInputMax, InputHeaderMax } from './styled'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const InputMax = () => {
 
  const { changeResMobile  } = useContext<any>(CartContext)

  return (
    <DivInputHeaderMax>
        <InputHeaderMax onChange={changeResMobile} placeholder='Digitar pesquisa...'/>
        <ButtonInputMax><ImgInputMax src='./srch.png'/></ButtonInputMax>
    </DivInputHeaderMax>


  )
}

export default InputMax
