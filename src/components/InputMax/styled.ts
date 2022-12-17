import styled from "styled-components";

export const DivInputHeaderMax = styled.div`
  display: none;
  position: relative;
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
    height: 42px;
    width: 100%;
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
    height: 33px;
    background: ${props => props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 8px;
    position: absolute;
    z-index: 1;
    right: 0;
    left: -10;
    margin-top: 4px;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    margin-right: 5px;
  }

  @media (min-width: 1000px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const ImgInputMax = styled.img`
  @media (min-width: 725px) {
    width: 16px;
    height: 16px;
  }
`;
