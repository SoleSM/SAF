import { useState } from 'react';
import styled from 'styled-components';
import { GiFruitBowl, GiMeat, GiMilkCarton, GiPaperBagOpen, GiWrappedSweet } from "react-icons/gi";


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

export const Button = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  background-color: #9ADFFE;
  border-radius : 20px;
  height: 17vh;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  background-color: #9ADFFE;
  border-radius : 20px;
  height: 100px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 15px;
  position:relative;
`;

const Span = styled.div`
position:absolute;
bottom:0;
font-family: Monserrat;
font-weight: bold;
;
`


const Catalogo = () => {

    const [eleccion, setEleccion] = useState("");
    
    return (
        <Container>
            <Title>Encuentra los productos que buscas</Title>
            <Container>
                <Grid>
                    <Button type="button" onClick={() => setEleccion("lacteos")}>
                        <GiMilkCarton size={50} color={"white"} />
                        <Span>Lacteos</Span>
                    </Button>

                    <Button type="button" onClick={() => setEleccion("carnes")}>
                        <GiMeat size={50} color={"white"} />
                        <Span>Carnes</Span>
                    </Button>

                    <Button type="button">
                        <GiFruitBowl size={50} color={"white"} />
                        <Span>Frutas/Verduras</Span>
                    </Button>

                    <Button type="button">
                        <GiPaperBagOpen size={50} color={"white"} />
                        <Span>Bolsones</Span>
                    </Button>

                    <Button type="button">
                        <GiWrappedSweet size={50} color={"white"} />
                        <Span>Dulces artesanales</Span>
                    </Button>
                </Grid>
            </Container>

            <Input onChange={e => setEleccion(e.target.value)} placeholder='Buscar Productos'></Input>
            <button
            onClick={()=> console.log(eleccion)}>Guardar</button>

            {
                console.log(eleccion)
            }
            {
                eleccion === "carnes" ?
                    <Grid>
                        <Item>Carne</Item>
                        <Item>Carne</Item>
                        <Item>Carne</Item>
                        <Item>Carne</Item>
                    </Grid> : console.log("no carnes")
            }
            {
                       eleccion === "lacteos" ?
                       <Grid>
                           <Item>Lacteos</Item>
                           <Item>Lacteos</Item>
                           <Item>Lacteos</Item>
                           <Item>Lacteos</Item>
                           <Item>Lacteos</Item>
                         
                       </Grid> : console.log("no lacteos")
            }




        </Container>


    )

}

export default Catalogo;