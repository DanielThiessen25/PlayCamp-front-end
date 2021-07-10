import styled from 'styled-components';
import { IoAddCircleOutline, IoCartOutline} from "react-icons/io5";

export default function Card(props){

    return(
        <Box>
            <Title>JOGO 1</Title>
            <CenterDiv>
            <Picture></Picture>
            <Description>
            <h2>Descrição</h2>
            <h3>
            bla bla bla bla bla bla bla bla bla bla bla
            </h3>
            <h2>Desenvolvedor</h2>
            <h3>UsuárioX</h3>
            </Description>
            </CenterDiv>
            
            <HorizontalLowDiv>
                <Price>R$ 49,90</Price>
                <HorizontalDiv>
                <Buy>Comprar</Buy>
                <AddCart><IoAddCircleOutline color="#000000" size="1.2em" /><IoCartOutline color="#000000 " size="1.8em" /></AddCart>
                </HorizontalDiv> 
            </HorizontalLowDiv>
        </Box>

    );
}

const Box = styled.div `
width: 100%;
height: auto;
margin-bottom:35px;
padding:12px;
border-radius: 5px;
background: whitesmoke;
box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
`;

const Title = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    font-family: 'Press Start 2P', cursive;
    font-style: normal;
    font-weight: bolder;
    font-size: 17px;
    line-height: 20px;
    color: black;
`;

const CenterDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
`;
const HorizontalLowDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    margin-top: 15px;
`;

const HorizontalDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
`;


const Picture = styled.div`
    width: 120px;
    height: 120px;
    border-radius:5px;
    background: blueviolet;
    margin-right: 10px;
`;

const Description = styled.div`
    width: 50%;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: regular;
    
    line-height: 15px;
    color: black;
    display: flex;
    flex-direction: column;

    h2{
        color: black;
    font-weight: bold;
    font-size:15px;
    margin-bottom: 10px;
    }

    h3{
        font-size: 12px;
        font-weight: normal;
        color: darkgray;
        margin-bottom: 10px;
    }

`;

const Price = styled.div`
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: black;
`;

const Buy = styled.div`
    width: 80px;
    height: 30px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: white;
    border-radius: 5px;
    margin-right: 20px;

`;

const AddCart = styled.div`
    width: 60px;
    height: 30px;
    border-radius:5px;
    background: darkgrey;
    display: flex;
    justify-content: center;
    align-items: center;
`;