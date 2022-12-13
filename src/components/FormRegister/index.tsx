import React from "react";
import { RegisterDiv } from "../../pages/Register/styled";
import { ContainerForm, InputForm, LabelForm } from "../FormLogin/styled";
import { ButtonBack, ButtonRegister, DivTopRegister, TitleFormRegister } from "./styled";

const FormRegister = () => {
  return (
    <RegisterDiv>
      <ContainerForm>
        <DivTopRegister>
        <TitleFormRegister>Cadastro</TitleFormRegister>
        <ButtonBack to='/'>Retornar para o login</ButtonBack>
        </DivTopRegister>
        <LabelForm>Nome</LabelForm>
        <InputForm placeholder="Digite o seu nome..." />
        <LabelForm>Email</LabelForm>
        <InputForm placeholder="Digite o seu email..." />
        <LabelForm>Senha</LabelForm>
        <InputForm type='password' placeholder="••••••••••••" />
        <LabelForm>Confirmar senha</LabelForm>
        <InputForm type="password" placeholder="••••••••••••" />
        <ButtonRegister>Cadastrar</ButtonRegister>
      </ContainerForm>
    </RegisterDiv>
  );
};

export default FormRegister;
