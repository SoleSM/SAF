import styled, { withTheme } from 'styled-components';
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
  text-align: center;
  background: papayawhip;
  border: none;
  border-radius: 3px;

  }
`;

export const button = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  background-color: #9ADFFE;
  border-radius : 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 15px;
`;

const Catalogo = () => {

    return (
        <Container>
            <Title>Encuentra los productos que buscas</Title>
            <Container>
                <Grid>
                    <button style={{backgroundColor:"#9ADFFE", borderRadius:"15px", height:"100px" }}>
                        <GiMilkCarton size={50} color={"white"}/>
                    </button>

                    <button style={{backgroundColor:"#9ADFFE", borderRadius:"15px", height:"100px" }}>
                        <GiMeat size={50} color={"white"}/>
                    </button>

                    <button style={{backgroundColor:"#9ADFFE", borderRadius:"15px", height:"100px" }}>
                        <GiFruitBowl size={50} color={"white"}/>
                    </button>

                    <button style={{backgroundColor:"#9ADFFE", borderRadius:"15px", height:"100px" }}>
                        <GiPaperBagOpen size={50} color={"white"}/>
                    </button>

                    <button style={{backgroundColor:"#9ADFFE", borderRadius:"15px", height:"100px" }}>
                        <GiWrappedSweet size={50} color={"white"}/>
                    </button>
                </Grid>
                <Input placeholder='Buscar productos' type="text"></Input>
            </Container>

          
        </Container>


    )

}

export default Catalogo;