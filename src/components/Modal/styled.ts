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
  height: 212px;
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

export const MainCart = styled.div`
  
`

export const UlCart = styled.ul``;

export const LiCart = styled.li``;

export const DivImgLiCart = styled.div``;

export const ImgLiCart = styled.img``;

export const ContainerCart = styled.div``;

export const DivPrimaryCart = styled.div``;

export const DivSecondaryCart = styled.div``;

export const DivThreeCart = styled.div``;

export const TitleLiCart = styled.div``;

export const DivCounterCart = styled.div``;

export const TrashCart = styled.img``;

export const DivBottomCart = styled.div``;

export const TopDivBottomCart = styled.div``;

export const MsgTotalCartBottom = styled.h5``;

export const SpanTotal = styled.span``;

export const ButtonRemoveAll = styled.button``;
