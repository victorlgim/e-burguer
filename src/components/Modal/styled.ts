import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalMenu = styled.div`
  position: relative;
  width: 290px;
  padding-bottom: 20px;
  border-radius: 8px;
  box-shadow: 2px 5px 15px 5px rgba(0, 0, 0, 0.31);
  animation: transition 1.4s ease;
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px ${props => props.theme.colors.three};
  border-radius: 3.20867px;
  top: 80px;
  transition: 0.2s ease;
  background: ${props => props.theme.colors.card};
  border-radius: 5px 5px 5px 5px;
  min-height: 260px;
  z-index: 1000;
 

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
  background: ${props => props.theme.colors.primary};
  border-radius: 5px 5px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const BtnCloseModal = styled.img`
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const CartEmpty = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: ${props => props.theme.colors.text};
  margin-top: 70px;
  margin-bottom: 10px;
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
  margin-top: 15px;
  min-height: 60px;
  height: 100%;
  padding-bottom: 4px;
  max-height: 215px;
  margin-bottom: 4px;
  /* background-color: red; */
  gap: 20px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 20px;
    border: 3px solid transparent;
  }

  /* @media (min-width: 1000px) {
  
    max-height: 345px;
  } */
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

export const ImgLiCart = styled.img``;

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
 margin-top: 10px;
`;

export const TopDivBottomCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;

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
  background: ${props => props.theme.colors.button};
  border: none;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: ${props => props.theme.colors.column};

  &:hover {
    transition: 0.1s ease;
  }
`;
