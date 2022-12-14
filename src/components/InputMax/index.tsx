import React from 'react'
import { ButtonInputMax, DivInputHeaderMax, ImgInputMax, InputHeaderMax } from './styled'

const InputMax = () => {
  return (
    <DivInputHeaderMax>
        <InputHeaderMax placeholder='Digitar pesquisa...'/>
        <ButtonInputMax><ImgInputMax src='./srch.png'/></ButtonInputMax>
    </DivInputHeaderMax>


  )
}

export default InputMax
