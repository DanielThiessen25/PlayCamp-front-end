import styled from "styled-components";
import { Box, CenterDiv, Description, HorizontalDiv, HorizontalLowDiv, Picture, Price, Title } from "./Card";

export default function CardInCart(props){
    return(
        <Box>
            <Title>JOGO 1</Title>
            <CenterDiv>
                <Picture/>
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
                <Price>R$49,90  X 2 = R$99,80</Price>
                <HorizontalDiv>
                    <DeleteFromCart>Deletar</DeleteFromCart>
                </HorizontalDiv>
            </HorizontalLowDiv>
        </Box>
    );
}

const DeleteFromCart = styled.button`
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
    background: red;
`;