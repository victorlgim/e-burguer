import { ButtonInput, DivInputHeader, InputHeader } from './styled'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Input = () => {
    
  const { setMobile, changeResMobile, setResMobile } = useContext<any>(CartContext)

   

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
