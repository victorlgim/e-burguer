import React from "react";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { useEffect } from "react";
import { useContext } from "react";
import { ContainerMain, UlCards } from "./styled";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { PaymentsContext } from "../../context/PaymentsContext";

const Homepage = () => {

  const navigate = useNavigate()
  const token: any = localStorage.getItem('token')
  const { list, setList } = useContext<any>(PaymentsContext)

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get("products", { 
            headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },});
          console.log(response.data)
       setList(response.data);
      } catch (err) {
        // localStorage.clear()
        // navigate('/login')
      } 
    };

    getProfile();
  }, []);


  return (
    <>
    <Modal />
      <Header />
      <ContainerMain>
        <UlCards>
          {/* {

            list.map(lunch => (
              <Cards id={lunch.id} name={lunch.name} category={lunch.category} price={lunch.price} img={lunch.img}/>
            ))

          } */}
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
