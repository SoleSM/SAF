import imagen1 from '../../assets/imagen1.jpg'
import imagen2 from '../../assets/imagen2.jpg'
import imagen3 from '../../assets/imagen3.jpg'
import CardImagen from '../../components/Cards/CardImagen'
import styled from 'styled-components'

const Container = styled.div`
margin : 5px 5px 5px 5px;
background-color: #C7FFDE ; 
`;
const Title = styled.h1`
  font-size: bold;
  text-align: center;
  color: rgba(88.00000235438347, 116.00000068545341, 231.00000143051147, 1);
  font-family: concert one;
  padding: 20px
`;
const Title2 = styled.h3`
color: black;
font-family: CenturyGothic;
padding: 20px
`;
const Parrafo = styled.p`
  flex-direction: row;
  justify-content: left;
  text-align: justify;
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  text-indent: 10px;
  margin: 40px;

`;
const Wrapper = styled.div`
height: 300px;
display: flex;
`;
const Left = styled.div`
padding: 20px
width: 50%;
height: 50vh
`;
const Right = styled.div`
width: 50%;
height: 50vh;
padding: 20px
`;

const ButtonQuestions = styled.button`
display: inline-block;
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
display: block;
`;


export default function Info() {

  return (
    <>

      <Container>
        <Title>SOBERANIA ALIMENTARIA FORMOSEÑA</Title>
        <Wrapper>
          <Left>
           <Title2>¿QUÉ ES?</Title2>
            <Parrafo>
              En Formosa, el Gobierno provincial lanzó un nuevo programa que beneficia a la economía de las familias y a los pequeños
              productores conocidos como paipperos(forman parte del PAIPPA).
            </Parrafo>
          </Left>
          <Right>
            <CardImagen
              imagen={imagen1} />
          </Right>
        </Wrapper>

        <Wrapper>
          <Right>
            <CardImagen
              imagen={imagen2} />
          </Right>
          <Left>
            <Parrafo>
              <strong>Soberanía Alimentaria Formosa</strong> es un programa que ofrece alimentos directamente del productor al consumidor, es decir,
              sin que existan intermediarios y agregados de valor entre la comercialización y las familias. Así, la gente puede acceder
              a una gran variedad de alimentos de producción local a precios referenciados. Desde frutas, verduras, hortalizas, carnes,
              productos lácteos y artesanales de los distintos consorcios adheridos al programa.
            </Parrafo>
          </Left>
        </Wrapper>

        <Wrapper>
          <Left>
            <Parrafo>
              Con esto se buscar impulsar a la producción y consumo local, mejorar la nutrición, la seguridad alimentaria y ayudar al bolsillo
              de las familias <strong>llevando a los stands productos de calidad garantizada.</strong>
              Mediante cronogramas el programa recorrerá todas las jurisdicciones de la provincia de Formosa para asegurarse de llegar a los
              lugares en donde se dan las mayores asimetrías en costos de producción y los precios que pagan los consumidores finales.
            </Parrafo>
          </Left>
          <Right>
            <CardImagen
              imagen={imagen3} />
          </Right>
        </Wrapper>

        <ButtonQuestions>PREGUNTAS FRECUENTES</ButtonQuestions>

      </Container>

    </>
  )
}

