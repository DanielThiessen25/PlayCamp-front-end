import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../contexts/CartContext";
import { Box, CenterDiv, Description, HorizontalDiv, HorizontalLowDiv, Picture, Price, Title } from "./Card";

export default function CardInCart({info}){
    const {cartShopping, setCartShopping} = useContext(CartContext);
    function removeFromCart(){
        const newCart = [...cartShopping].filter(item => {
            if(item.game.id === info.game.id){
                return false;
            }
            return true;
        });
        setCartShopping(newCart);
    }
    return(
        <Box>
            <Title>{info.game.name}</Title>
            <CenterDiv>
                <Picture> <img src={info.game.img}/> </Picture>
                <Description>
                <h2>Descrição</h2>
                <h3>
                {info.game.description}
                </h3>
                <h2>Desenvolvedor</h2>
                <h3>{info.game.devName}</h3>
                </Description>
            </CenterDiv>
            <HorizontalLowDiv>
                <Price>R${String(parseFloat(info.game.price).toFixed(2)).replace(".", ",") }  X {info.qtd} = R${
                String((parseFloat(info.game.price) * info.qtd).toFixed(2)).replace(".", ",") }
                
                </Price>
                <HorizontalDiv>
                    <DeleteFromCart onClick={removeFromCart}>Deletar</DeleteFromCart>
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