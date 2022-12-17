import styled from "styled-components";

export const Logotype = styled.img`
  width: 180px;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-top: -40px;
    margin-bottom: 10px;
    width: 160px;
    height: 25px;
  }
`;

export const DivLogoHeader = styled.div`
  height: 95px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  gap: 10px;
  align-items: center;

  @media (min-width: 768px) {
    width: 340px;
  }
`;

export const BackgroundImage = styled.div`
  width: 110px;
  height: 50px;
  background: rgba(39, 174, 96, 0.1);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 7px;
  @media (min-width: 375px) {
    margin-left: 13px;
  }
`;

export const ImageShop = styled.img``;

export const ParagraphLogo = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #828282;
`;

export const DivLogoTop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StrongLogo = styled.strong`
  color: #333333;
`;
