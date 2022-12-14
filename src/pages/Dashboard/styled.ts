import styled from "styled-components";

export const ContainerMain = styled.div`
  margin: 0 auto;

  @media (min-width: 1000px) {
    width: 950px;
  }

  @media (min-width: 1200px) {
    width: 1150px;
  }
`;

export const UlCards = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 37px;
  min-width: 270px;
  margin: 0 auto;
  margin-top: 20px;

  @media (min-width: 1000px) {
    width: 950px;
    flex-wrap: wrap;
    margin-bottom: 50px;
    gap: 55px;
    margin-top: 40px;
  }

  @media (min-width: 1200px) {
    width: 1150px;
  }
`;
