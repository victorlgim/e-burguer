import { formSchemaLogin } from '../../utils/schema';
import { BtnRegister, ButtonLogin, ContainerForm, InputForm, LabelForm, LoginDiv, MsgError, SpanCreate, TitleForm } from './styled'
import { iLoginFormData } from '../../@types/@UserTypes/types';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";
import { GlobalContext } from '../../context/GlobalContext';
import { useContext, useState } from 'react';
import { Loading } from '../FormRegister/styled';

const FormLogin = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<iLoginFormData>({ resolver: yupResolver(formSchemaLogin) });
  const { loading, setLoading } = useContext<any>(GlobalContext)
  const [ login, setLogin ] = useState<boolean>(true);
  const navigate = useNavigate();

  const onSubmitLogin: SubmitHandler<iLoginFormData> = async data => {
    try {
      setLoading(true);
      const response = await api.post("login", data);

       console.log(response)
        setLogin(true)
        window.localStorage.setItem("token", JSON.stringify(response.data.accessToken));
        window.localStorage.setItem("user", JSON.stringify(response.data.user));
        
        navigate("/dashboard") 

    } catch (err) { 
       setLogin(false)
       reset() 
  } finally {
    setLoading(false)
  }
  };

  return (
    <>
     <LoginDiv onSubmit={handleSubmit(onSubmitLogin)}>
        <ContainerForm>
            <TitleForm>Login</TitleForm>

            <LabelForm>Email</LabelForm>
            <InputForm placeholder='Digite seu email...' {...register("email")} onKeyUp={() => setLogin(true)}/>

            <LabelForm>Senha</LabelForm>
            <InputForm type='password' placeholder='••••••••••••' {...register("password")} onKeyUp={() => setLogin(true)}/>
            {errors.email && <MsgError>{errors.email.message}</MsgError>}
            {!login ? ( <MsgError>Usuário e/ou senha inválidos.</MsgError> ) : <></> }

            <ButtonLogin type='submit'>{loading ? <Loading src="/spinner.png" /> : "Logar"} </ButtonLogin>
            

            <SpanCreate>Crie sua conta para saborear muitas delícias e matar sua fome!</SpanCreate>
            <BtnRegister to='/cadastro'>Cadastrar</BtnRegister>
        </ContainerForm>
        
     </LoginDiv>
    </>
  )
}

export default FormLogin
