import styled from "styled-components";

export const LiCart = styled.li`
 
`;

export const DivHeaderCartLi = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivImgLiCart = styled.div`
  background: #e0e0e0;
  border-radius: 5px;
  width: 65px;
  height: 55px;
`;

export const ImgLiCart = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainerCart = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export const DivHeaderPrimarySecond = styled.div`
  display: flex;
  gap: 12px;
`;

export const DivPrimaryCart = styled.div``;

export const DivSecondaryCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonSub = styled.button`
  border: none;
  width: 30.44px;
  height: 24px;
  background: #f2f2f2;
`;

export const ImgSub = styled.img``;

export const ImgSum = styled.img``;

export const SpanQtd = styled.span`
  display: block;
  background: #fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #000000;
`;

export const ButtonSum = styled.button`
  border: none;
  width: 30.44px;
  height: 24px;
  background: #f2f2f2;
`;

export const DivThreeCart = styled.div``;

export const TitleLiCart = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  margin-top: 4px;
`;

export const DivCounterCart = styled.div`
  border: 2px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  background: #fff;
  align-items: center;
  width: 90px;

  @media (min-width: 1000px) {
    width: 100px;
  }
`;

export const TrashCart = styled.img`
  margin-top: 4px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const DivBottomCart = styled.div`
  border-top: 2px solid #e0e0e0;
  margin-top: 20px;
`;

export const TopDivBottomCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MsgTotalCartBottom = styled.h5`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.theme.colors.text};
`;

export const SpanTotal = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.theme.colors.text};
`;

export const ButtonRemoveAll = styled.button`
  width: 100%;
  height: 45px;
  background: #e0e0e0;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: #828282;
`;

export const CategorieCart = styled.span`
  display: block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  color: #828282;
`;
