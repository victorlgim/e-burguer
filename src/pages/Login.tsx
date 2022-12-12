import FormLogin from "../components/FormLogin";
import Logo from "../components/Logo";
import { ContainerLogin, DivMainLogin } from "./styled";

const Login = () => {
  return (
    <>
      <ContainerLogin>
        <DivMainLogin>
          <Logo />
          <FormLogin />
        </DivMainLogin>
      </ContainerLogin>
    </>
  );
};

export default Login;
