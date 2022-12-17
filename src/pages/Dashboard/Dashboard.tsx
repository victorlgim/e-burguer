import Cards from "../../components/Cards";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { useEffect } from "react";
import { useContext } from "react";
import { ContainerMain, UlCards } from "./styled";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { PaymentsContext } from "../../context/PaymentsContext";
import { notAuth } from "../../utils/toast";
import { DefaultValueList } from "../../@types/@PaymentsTypes/types";


const Homepage = ({ changeTheme, theme }: any) => {

  const navigate = useNavigate()

  const token = localStorage.getItem('token') as string;

  const { resMobile, empty, modal } = useContext<any>(PaymentsContext)

  const { list, setList } = useContext(PaymentsContext) as DefaultValueList

  const filterState = list.filter(e => e.category.toLowerCase().includes(resMobile.toLowerCase().trim()) || e.name.toLowerCase().includes(resMobile.toLowerCase().trim()))

  useEffect(() => {
    const getProducts = async () => {
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
        notAuth()
      } 
    };

    getProducts();
  }, [token]);


  return (
    <>
    
    {modal && <Modal />}
    
      <Header changeTheme={ changeTheme } theme={ theme }/>
      <ContainerMain>
        <UlCards>



        {

        filterState.length && !empty ?
     
        list.map(lunch => ( 
        <Cards 
        key={lunch.id} 
        id={lunch.id} 
        name={lunch.name} 
        category={lunch.category} 
        price={lunch.price} 
        img={lunch.img}  

        />
        )
        )

        :  
        
        filterState.length && empty ? 

        filterState.map(lunch => ( 
          <Cards 
          key={lunch.id} 
          id={lunch.id} 
          name={lunch.name} 
          category={lunch.category} 
          price={lunch.price} 
          img={lunch.img} 

          />
          )
          )

          :

          <></>
        }
         
        </UlCards>
        
      </ContainerMain>
      
    </>
  );
};

export default Homepage;
