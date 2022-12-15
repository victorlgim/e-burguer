import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalMenu = styled.div`
  position: relative;
  width: 290px;
  min-height: 212px;
  height: 320px;

  border-radius: 8px;
  box-shadow: 2px 5px 15px 5px rgba(0, 0, 0, 0.31);
  animation: transition 1.4s ease;
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  top: 80px;
  transition: 0.2s ease;
  background: #ffffff;
  border-radius: 0px 0px 5px 5px;
  border-radius: 5px 5px 5px 5px;

  z-index: 2;

  @media (min-width: 375px) {
    width: 330px;
  }

  @media (min-width: 425px) {
    width: 380px;
  }

  @media (min-width: 768px) {
    width: 440px;
  }

  @media (min-width: 1000px) {
    top: 100px;
  }

  @keyframes transition {
    from {
      opacity: 0;
      transform: translateY(-70%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export const DivTopHeaderModal = styled.div`
  width: 100%;
  height: 54px;
  background: #27ae60;
  border-radius: 5px 5px 0px 0px;
`;

export const DivTopModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTopHeaderModal = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export const TitleHeaderModal = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
`;

export const BtnCloseModal = styled.img``;

export const CartEmpty = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  text-align: center;
  color: #333333;
  margin-top: 40px;
`;

export const MsgEmpty = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  color: #828282;
  display: block;
  margin-top: -10px;
`;

export const UlCart = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const LiCart = styled.li`
  margin-left: -40px;
`;

export const DivHeaderCartLi = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivImgLiCart = styled.div`
  background: #e0e0e0;
  border-radius: 5px;
`;

export const ImgLiCart = styled.img`

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
  color: #333333;
`;

export const DivCounterCart = styled.div`
  border: 2px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  background: #fff;
  align-items: center;
`;

export const TrashCart = styled.img`
  margin-top: 4px;
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
  color: #333333;
`;

export const SpanTotal = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #828282;
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
