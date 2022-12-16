import React, { useState } from "react";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { useEffect } from "react";
import { useContext } from "react";
import { ContainerMain, UlCards } from "./styled";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { PaymentsContext } from "../../context/PaymentsContext";


interface MyObjectType {
  id: number;
 name: string;
 category: string;
 price: number;
 img: string;
};

const Homepage = () => {

  const navigate = useNavigate()
  const token: string = localStorage.getItem('token') as string;
  const [ list, setList ] = useState<Array<MyObjectType>>([]) 

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
        localStorage.clear()
        navigate('/login')
      } 
    };

    getProfile();
  }, [token]);


  return (
    <>
    {/* <Modal /> */}
      <Header />
      <ContainerMain>
        <UlCards>



        {
        
        list.length > 0 && 
        list.map(lunch => ( <Cards 
          key={lunch.id}
          id={lunch.id} 
          name={lunch.name} 
          category={lunch.category}  
          price={lunch.price} 
          img={lunch.img}  />
  ))
        }
         
        </UlCards>
        
      </ContainerMain>
      
    </>
  );
};

export default Homepage;
