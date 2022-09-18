import { useState } from 'react';
import styled from 'styled-components';
import { GiFruitBowl, GiMeat, GiMilkCarton, GiPaperBagOpen, GiWrappedSweet } from "react-icons/gi";
import { useEffect } from 'react';



const Container = styled.div`
    background-color: white;
    padding: 10px;
    text-align: center;
    margin: 35px 35px 35px 35px;
`;

const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  color: blue;
  font-family: Monserrat;
  padding: 20px
`;

const Input = styled.input`
font-size: 18px;
padding: 10px;
margin: 10px;
background: #DCDFDF;
border-size: 50px; 
border-radius: 3px;
::placeholder {
  color: #858585;
}
width: 100vh;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  background-color: #9ADFFE;
  border-radius : 20px;
  height: 17vh;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  background-color: #9ADFFE;
  border-radius : 20px;
  height: 100px;
  
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 15px;
  position:relative;
  align-items:center

`;

const Span = styled.div`
position:absolute;
bottom:0;
font-family: Monserrat;
font-weight: bold;
;
`


const Catalogo = () => {

    const [eleccion, setEleccion] = useState([]);
    const [search, setSearch] = useState("");

    const showData = () => {
        fetch("http://localhost:3000/carrito")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setEleccion(data)
            });

    }
    


//Función que guarda el valor de lo que se escribe en el input
const searcher = (e) => {
  setSearch(e.target.value)
  console.log(e.target.value)
}    


//Filtro clickeable por categoria
  const filterResult=(catItem) => {
    const result= eleccion.filter((curData) => {
      return curData.categoria === catItem;
    });
   setEleccion(result);
  
  }


//metodo de filtrado por input con nombre de producto
let resultados = []
if(!search){
  resultados = eleccion
}else{
 resultados =  eleccion.filter( (dato) => 
  dato.producto.toLowerCase().includes(search.toLocaleLowerCase()))
}


useEffect( () => {
  showData();
}, [])


    return (
        <Container>
            <Title>Encuentra los productos que buscas</Title>
            <Container>
                <Grid>
                    <Button type="button"  onClick={() => filterResult("Lacteos")}>
                        <GiMilkCarton size={50} color={"white"} />
                        <Span>Lacteos</Span>
                    </Button>

                    <Button type="button"  onClick={() => filterResult("Carnes")}>
                        <GiMeat size={50} color={"white"} />
                        <Span>Carnes</Span>
                    </Button>

                    <Button type="button"  onClick={() => filterResult("Frutas/Verduras")}>
                        <GiFruitBowl size={50} color={"white"} />
                        <Span>Frutas/Verduras</Span>
                    </Button>

                    <Button type="button"  onClick={() => filterResult("Bolsones")}>
                        <GiPaperBagOpen size={50} color={"white"} />
                        <Span>Bolsones</Span>
                    </Button>

                    <Button type="button"  onClick={() => filterResult("Dulces artesanales")}>
                        <GiWrappedSweet size={50} color={"white"} />
                        <Span>Dulces artesanales</Span>
                    </Button>
                </Grid>
            </Container>

            <Input  onChange={searcher} placeholder='Buscar Productos'></Input>
      
      
        <table>
          <Grid>
            {
              resultados.map( (producto) => (
                <tr key={producto.id}>
                  <Item>{producto.producto}</Item>
                </tr>
              ))
            }
          </Grid>
        </table>
      

        </Container>


    )

}

export default Catalogo;