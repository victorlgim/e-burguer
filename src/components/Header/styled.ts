import styled from "styled-components";

export const DivContainer = styled.div`
  min-width: 290px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const DivHeader = styled.header`
  height: 80px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
`;

export const DivIcons = styled.div`
  display: flex;
  gap: 13px;

  @media (min-width: 375px) {
    gap: 17px;
  }

  @media (min-width: 768px) {
    gap: 28px;
  }
`

export const ImgHeader = styled.img`
  width: 145px;
`

export const ImgSearch = styled.img`
  width: 25px;
  height: 22px;
`

export const ImgCar = styled.img`
  width: 25px;
  height: 22px;
`

export const ImgExit = styled.img`
   width: 25px;
   height: 22px;
`
