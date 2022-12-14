import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonRegister = styled.button`
  width: 100%;
  height: 43px;
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

export const DivTopRegister = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  justify-content: space-between;
`;

export const ButtonBack = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-decoration-line: underline;
  color: #828282;
`;

export const TitleFormRegister = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #333333;
`;
