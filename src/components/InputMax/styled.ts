import styled from "styled-components";

export const DivInputHeaderMax = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    height: 40px;
    width: 250px;
  }

  @media (min-width: 1000px) {
    width: 310px;
  }
`;

export const InputHeaderMax = styled.input`
  @media (min-width: 768px) {
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    height: 40px;
    width: 95%;
    outline: none;
    padding-left: 10px;
    ::placeholder {
      color: #e0e0e0;
    }
  }

  @media (min-width: 1000px) {
    padding-left: 15px;
  }
`;

export const ButtonInputMax = styled.button`
  @media (min-width: 725px) {
    width: 45px;
    height: 35px;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    position: absolute;
    z-index: 1;
    right: 138px;
    top: 26px;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    margin-right: 15px;
  }

  @media (min-width: 1000px) {
    right: 151px;
    margin-right: 15px;
  }

  @media (min-width: 1200px) {
    margin-right: 30px;
  }
`;

export const ImgInputMax = styled.img`
  @media (min-width: 725px) {
    width: 16px;
    height: 16px;
  }
`;
