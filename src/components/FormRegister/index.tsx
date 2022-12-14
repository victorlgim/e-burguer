import React from "react";
import { RegisterDiv } from "../../pages/Register/styled";
import { formSchema } from "../../utils/schema";
import { ContainerForm, InputForm, LabelForm } from "../FormLogin/styled";
import { ButtonBack, ButtonRegister, DivTopRegister, Loading, MessageError, TitleFormRegister } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { iRegisterFormData } from "../../@types/@UserTypes/types";
import { api } from "../../services/api";
import { notify, verify } from "../../utils/toast";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";


const FormRegister = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<iRegisterFormData>({ resolver: yupResolver(formSchema) });
  const { loading, setLoading } = useContext(GlobalContext)

  const onSubmitFunction: SubmitHandler<iRegisterFormData> = async data => {
    try {
      setLoading(true)
      const response = await api.post("users", data);
      verify()
      console.log(response)
    } catch (err) {    
      notify()
    } finally {
      setLoading(false)
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
        {errors.name && <MessageError>{errors.name.message}</MessageError>}

        <LabelForm>Email</LabelForm>
        <InputForm placeholder="Digite o seu email..." {...register("email")}/>
        {errors.email && ( <MessageError>{errors.email.message}</MessageError> )}

        <LabelForm>Senha</LabelForm>
        <InputForm type='password' placeholder="••••••••••••" {...register("password")}/>
        {errors.password && ( <MessageError>{errors.password.message}</MessageError> )}

        <LabelForm>Confirmar senha</LabelForm>
        <InputForm type="password" placeholder="••••••••••••" {...register("passwordConfirmed")} />
        {errors.passwordConfirmed && (<MessageError>{errors.passwordConfirmed.message}</MessageError>)}

        <ButtonRegister type='submit'>{loading ? <Loading src="/spinner.png" /> : "Cadastrar"}</ButtonRegister>
        
      </ContainerForm>
    </RegisterDiv>
  );
};

export default FormRegister;
