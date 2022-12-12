import { BtnRegister, ButtonLogin, ContainerForm, InputForm, LabelForm, LoginDiv, SpanCreate, TitleForm } from './styled'


const FormLogin = () => {
  return (
    <>
     <LoginDiv>
        <ContainerForm>
            <TitleForm>Login</TitleForm>
            <LabelForm>Email</LabelForm>
            <InputForm placeholder='Digite seu email...'/>
            <LabelForm>Senha</LabelForm>
            <InputForm type='password' placeholder='••••••••••••'/>
            <ButtonLogin>Logar</ButtonLogin>
            <SpanCreate>Crie sua conta para saborear muitas delícias e matar sua fome!</SpanCreate>
            <BtnRegister to='/'>Cadastrar</BtnRegister>
        </ContainerForm>
        
     </LoginDiv>
    </>
  )
}

export default FormLogin
