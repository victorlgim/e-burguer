import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginDiv = styled.form`
  min-height: 380px;
  background: #ffffff;
  border: 2px solid #f5f5f5;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  @media (min-width: 425px) {
    min-height: 368px;
  }

  @media (min-width: 768px) {
    min-height: 388px;
  }

  @media (min-width: 1024px) {
     width: 400px;
     min-height: 396px;
}
`;

export const ContainerForm = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 80%;
}
`;

export const TitleForm = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #333333;
  margin-top: 25px;

  @media (min-width: 1024px) {
    margin-top: 30px;
}
`;

export const LabelForm = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #999999;
  margin-bottom: 4px;
`;

export const InputForm = styled.input`
  background: #ffffff;
  border: 2px solid #d6d6d6;
  border-radius: 8px;
  outline: none;
  height: 35px;
  width: 94%;
  margin-bottom: 10px;
  padding-left: 10px;

    @media (min-width: 1024px) {
    height: 40px;
}

  :focus {
    border: 2px solid #555555;
  }
`;

export const ButtonLogin = styled.button`
  width: 100%;
  height: 46px;
  background: #219653;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  border: none;
  margin-top: 14px;

  :hover {
    filter: brightness(0.9);
  }
`;

export const SpanCreate = styled.span`
  display: block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 18px;
  text-align: center;
  color: #999999;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const BtnRegister = styled(Link)`
  width: 100%;
  height: 30px;
  background: #f5f5f5;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #999999;
  text-decoration: none;
  padding-top: 13px;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }
`;
