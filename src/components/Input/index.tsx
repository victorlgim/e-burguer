import { ButtonInput, DivInputHeader, InputHeader } from './styled'
import { useContext } from 'react'
import { PaymentsContext } from '../../context/PaymentsContext'

const Input = () => {
    
  const { setMobile, changeResMobile, setResMobile } = useContext<any>(PaymentsContext)

   

  const setResponsive: () => void = () => {
    setMobile(false)
    setResMobile('')
  }

  return (
    
      <DivInputHeader>
         <InputHeader onChange={changeResMobile} placeholder='Digitar pesquisa...'/>
         <ButtonInput onClick={setResponsive}>X</ButtonInput>
      </DivInputHeader>
    
  )
}

export default Input
