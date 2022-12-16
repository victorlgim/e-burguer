import React from 'react'
import { ButtonInputMax, DivInputHeaderMax, ImgInputMax, InputHeaderMax } from './styled'
import { useContext } from 'react'
import { PaymentsContext } from '../../context/PaymentsContext'

const InputMax = () => {
 
  const { changeResMobile  } = useContext<any>(PaymentsContext)

  return (
    <DivInputHeaderMax>
        <InputHeaderMax onChange={changeResMobile} placeholder='Digitar pesquisa...'/>
        <ButtonInputMax><ImgInputMax src='./srch.png'/></ButtonInputMax>
    </DivInputHeaderMax>


  )
}

export default InputMax
