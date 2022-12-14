import React from "react";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import { ContainerMain, UlCards } from "./styled";

const Homepage = () => {
  return (
    <>
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
