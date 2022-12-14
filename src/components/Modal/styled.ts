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
  height: 312px;
  border-radius: 8px;
  box-shadow: 2px 5px 15px 5px rgba(0, 0, 0, 0.31);
  animation: transition 1.4s ease;
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  top: 80px;
  transition: 0.2s ease;

  z-index: 9999;

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