import styled from "styled-components";

export const DivInputHeader = styled.div`
  height: 50px;
  width: 100%;
`;

export const InputHeader = styled.input`
  background: #ffffff;
  border: 2px solid #E0E0E0;
  border-radius: 8px;
  height: 50px;
  width: 95%;
  outline: none;
  padding-left: 10px;
  ::placeholder {
    color: #E0E0E0;
  }

  @media (min-width: 375px) {
    width: 96%;
  }

  @media (min-width: 425px) {
    width: 98%;
  }

  
`;

export const ButtonInput = styled.button`
  width: 49px;
  height: 40px;
  background: #E0E0E0;
  border: 2px solid #E5E1E1;
  border-radius: 8px;
  position: absolute;
  right: 20px;
  top: 24px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;

  @media (min-width: 375px) {
    right: 26px;
  }

  @media (min-width: 425px) {
    right: 26px;
  }

  
`;

export const ImgInput = styled.img`
  width: 16px;
  height: 16px;
`;
