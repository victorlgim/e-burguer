import styled from "styled-components";

export const RegisterDiv = styled.form`
  min-height: 425px;
  background: #ffffff;
  border: 2px solid #f5f5f5;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding-bottom: 15px;

  @media (min-width: 425px) {
    min-height: 418px;
  }

  @media (min-width: 768px) {
    min-height: 431px;
    width: 350px;
  }

  @media (min-width: 1024px) {
    width: 420px;
    min-height: 439px;
  }
`;

export const FlexDivRegister = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    align-items: center;
    gap: 15px;
    flex-direction: row;
  }

  @media (min-width: 768px) {
    gap: 30px;
  }
`;
