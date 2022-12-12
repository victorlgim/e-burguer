import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 300px;
  margin: 0 auto;

  @media (min-width: 375px) {
    width: 340px;
  }

  @media (min-width: 425px) {
    width: 370px;
  }

   @media (min-width: 768px) {
    width: 700px;
    height: 100vh;
    display: flex;  
  }
  
  @media (min-width: 1024px) {
   width: 800px;  
}
`

export const DivMainLogin = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 30px;
  }

  @media (min-width: 1024px) {
   width: 800px;  
}
`

export const DivLogo = styled.div`
  
`

export const DivFormLogin = styled.div`

`