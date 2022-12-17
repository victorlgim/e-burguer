import React from "react";
import { RegisterDiv } from "../../pages/Register/styled";
import { formSchema } from "../../utils/schema";
import { ContainerForm, InputForm, LabelForm } from "../FormLogin/styled";
import { ButtonBack, ButtonRegister, DivTopRegister, Loading, MessageError, TitleFormRegister } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { iRegisterFormData } from "../../@types/UserTypes/types";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { GlobalContextType } from "../../@types/GlobalTypes/types";
import { notify, verify } from "../../utils/toast";
import { api } from "../../services/api";


const FormRegister = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<iRegisterFormData>({ resolver: yupResolver(formSchema) });
  const { loading, setLoading } = useContext(GlobalContext) as GlobalContextType
  const navigate = useNavigate()

  const onSubmitFunction: SubmitHandler<iRegisterFormData> = async data => {
    try {

      setLoading(true);
      await api.post("users", data);
      verify();
      navigate("/");     
    } 
    
    catch (err) {
      notify();
    } 
    
    finally {
      reset({ email: "", password: "", passwordConfirmed: "" });
      setLoading(false);
    }
  };

  return (

    <RegisterDiv onSubmit={handleSubmit(onSubmitFunction)}>
      <ContainerForm>

        <DivTopRegister>
          <TitleFormRegister>Cadastro</TitleFormRegister>
          <ButtonBack to='/'>Retornar para o login</ButtonBack>
        </DivTopRegister>

        <LabelForm>Nome</LabelForm>
        <InputForm style={{border: `${errors.name ? '2px solid #E60000' : '2px solid #ccc'}`}} placeholder="Digite o seu nome..." {...register("name")}/>
        {errors.name && <MessageError>{errors.name.message}</MessageError>}

        <LabelForm>Email</LabelForm>
        <InputForm style={{border: `${errors.email ? '2px solid #E60000' : '2px solid #ccc'}`}} placeholder="Digite o seu email..." {...register("email")}/>
        {errors.email && ( <MessageError>{errors.email.message}</MessageError> )}

        <LabelForm>Senha</LabelForm>
        <InputForm style={{border: `${errors.password ? '2px solid #E60000' : '2px solid #ccc'}`}} type='password' placeholder="••••••••••••" {...register("password")}/>
        {errors.password && ( <MessageError>{errors.password.message}</MessageError> )}

        <LabelForm>Confirmar senha</LabelForm>
        <InputForm style={{border: `${errors.passwordConfirmed ? '2px solid #E60000' : '2px solid #ccc'}`}} type="password" placeholder="••••••••••••" {...register("passwordConfirmed")} />
        {errors.passwordConfirmed && (<MessageError>{errors.passwordConfirmed.message}</MessageError>)}

        <ButtonRegister type='submit'>{loading ? <Loading src="/spinner.png" /> : "Cadastrar"}</ButtonRegister>
        
      </ContainerForm>
    </RegisterDiv>

  );
};

export default FormRegister;
