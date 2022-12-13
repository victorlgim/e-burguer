import React from "react";
import FormRegister from "../../components/FormRegister";
import Logo from "../../components/Logo";
import { Container } from "../Login/styled";
import { FlexDivRegister } from "./styled";

const Register = () => {
  return (
    <Container>
      <FlexDivRegister>
        <Logo />
        <FormRegister />
      </FlexDivRegister>
    </Container>
  );
};

export default Register;
