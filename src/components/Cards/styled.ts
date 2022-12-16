import styled from "styled-components";

export const MoldImgBurguer = styled.div`
  width: 100%;
  height: 160px;
  background: #f5f5f5;
`;

export const CardBurguers = styled.li`
  min-width: 250px;
  height: 356px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  margin-left: -20px;
  animation: smoothShow 900ms;
  animation: translateShow 1.4s ease;

  @media (min-width: 1000px) {
    margin-left: 20px;
    height: 356px;
    width: 255px;
  }

  @keyframes smoothShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes translateShow {
    0% {
      opacity: 0;
      transform: translateX(-70%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  :hover {
    border: 2px solid #27ae60;
    transition: 0.8s ease;
  }
`;

export const ImgBurguer = styled.img`
  width: 100%;
  height: 180px;
  background: #f5f5f5;
`;

export const TitleBurguer = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #333333;
  margin-left: 12px;
`;

export const CategoryBurguer = styled.small`
  display: block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #828282;
  margin-left: 12px;
  margin-bottom: 10px;
`;

export const PriceBurguer = styled.span`
  display: block;
  margin-left: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #27ae60;
  margin-bottom: 17px;
`;

export const BtnAddBurguer = styled.button`
  margin-left: 12px;
  width: 126px;
  height: 35px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: #ffffff;
  background: #27ae60;
  border: 2px solid #27ae60;
  border-radius: 8px;
`;
