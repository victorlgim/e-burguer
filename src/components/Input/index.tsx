import { ButtonInput, DivInputHeader, ImgInput, InputHeader } from './styled'
import { useContext } from 'react'
import { PaymentsContext } from '../../context/PaymentsContext'

const Input = () => {
    
  const { setMobile } = useContext<any>(PaymentsContext)
  

  return (
    
      <DivInputHeader>
         <InputHeader placeholder='Digitar pesquisa...'/>
         <ButtonInput onClick={() => setMobile(false)}>X</ButtonInput>
      </DivInputHeader>
    
  )
}

export default Input
