import React from "react";
import { RegisterDiv } from "../../pages/Register/styled";
import { formSchema } from "../../utils/schema";
import { ContainerForm, InputForm, LabelForm } from "../FormLogin/styled";
import { ButtonBack, ButtonRegister, DivTopRegister, TitleFormRegister } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { iRegisterFormData } from "../../@types/UserTypes/types";
import { api } from "../../services/api";

const FormRegister = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<iRegisterFormData>({ resolver: yupResolver(formSchema) });
  
  const onSubmitFunction: SubmitHandler<iRegisterFormData> = async data => {
    try {
      const response = await api.post("users", data);
      console.log(response)
    } catch (err) {    
  
    } finally {
      
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
        <InputForm placeholder="Digite o seu nome..." {...register("name")}/>

        <LabelForm>Email</LabelForm>
        <InputForm placeholder="Digite o seu email..." {...register("email")}/>

        <LabelForm>Senha</LabelForm>
        <InputForm type='password' placeholder="••••••••••••" {...register("password")}/>

        <LabelForm>Confirmar senha</LabelForm>
        <InputForm type="password" placeholder="••••••••••••" {...register("passwordConfirmed")} />
        
        <ButtonRegister type='submit'>Cadastrar</ButtonRegister>
        
      </ContainerForm>
    </RegisterDiv>
  );
};

export default FormRegister;
