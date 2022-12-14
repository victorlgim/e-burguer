import React from "react";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import Modal from "../../components/Modal";

import { ContainerMain, UlCards } from "./styled";

const Homepage = () => {
  return (
    <>
    {/* <Modal /> */}
      <Header />
      <ContainerMain>
        <UlCards>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </UlCards>
        
      </ContainerMain>
      
    </>
  );
};

export default Homepage;
