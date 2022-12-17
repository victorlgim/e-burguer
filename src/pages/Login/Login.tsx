import FormLogin from "../../components/FormLogin";
import Logo from "../../components/Logo";
import { Container, DivMainLogin } from "./styled";


const Login = () => {
  return (
    <>
      <Container> 
        <DivMainLogin>
          <Logo />
          <FormLogin />
        </DivMainLogin>
      </Container>
    </>
  );
};

export default Login;
