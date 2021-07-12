import styled from 'styled-components';
import { IoAddCircleOutline, IoCartOutline, IoRemoveCircleOutline} from "react-icons/io5";
import { useState, useContext, useEffect } from 'react';

export default function Card(props){
    const [isCarted, setIsCarted] = useState(false);
    const [orders, setOrders] = useState(1);
    function clickCart(){
            setIsCarted(!isCarted);
    }

    function renderCartButton(){
        if(isCarted){
            return(
            <button onClick={clickCart}><RemoveCart><IoRemoveCircleOutline color="#000000" size="1.2em" /><IoCartOutline color="#000000 " size="1.8em" /></RemoveCart></button>
            );
        }
        else{
            return(
                <button onClick={clickCart}><AddCart><IoAddCircleOutline color="#FFFFFF" size="1.2em" /><IoCartOutline color="#FFFFFF" size="1.8em" /></AddCart></button>
            );
        }
    }
    function minusQtd(){
        if(orders > 1){
            setOrders(orders - 1);
        }
    }

    return(
        <Box>
            <Title>{props.game.name}</Title>
            <CenterDiv>
            <Picture><img src={props.game.img} /></Picture>
            <Description>
            <h2>Descrição</h2>
            <h3>
            {props.game.description}
            </h3>
            <h2>Desenvolvedor</h2>
            <h3>{props.game.devName}</h3>
            </Description>
            </CenterDiv>
            
            <HorizontalLowDiv>
                <Price>R$ {props.game.price}</Price>
                <HorizontalDiv>
                <button><Buy>Comprar</Buy></button>
                <Qtd>
                    <button onClick={minusQtd}><h2>-</h2></button>
                    <h1>{orders}</h1>
                    <button onClick={()=>setOrders(orders + 1)}><h3>+</h3></button>
                </Qtd>

                {renderCartButton()}
                </HorizontalDiv> 
            </HorizontalLowDiv>
        </Box>

    );
}

export const Box = styled.div `
width: 100%;
height: auto;
margin-bottom:35px;
padding:12px;
border-radius: 5px;
background: whitesmoke;
box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.div`
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

export const CenterDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
`;
export const HorizontalLowDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    margin-top: 15px;
`;

export const HorizontalDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
`;


export const Picture = styled.div`
    width: 120px;
    height: 120px;
    border-radius:5px;
    background: blueviolet;
    margin-right: 10px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
`;

export const Description = styled.div`
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
        color: #3C3C3C;
        margin-bottom: 10px;
    }

`;

export const Price = styled.div`
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: black;
`;

export const Buy = styled.div`
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

`;

export const AddCart = styled.div`
    width: 60px;
    height: 30px;
    border-radius:5px;
    background: #3C3C3C;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RemoveCart = styled.div`
    width: 60px;
    height: 30px;
    border-radius:5px;
    background: #D6D6D6;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Qtd = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
    
    
    h1{
        font-size: 20px;
        font-weight: normal;
        margin-left: 10px;
        margin-right: 10px;
    }

    h2{
        font-size: 25px;
        font-weight: bolder;
        color:red;
        margin-left: 10px;
    }
    h3{
        font-size: 25px;
        font-weight: bolder;
        color:green;
        margin-right: 10px;
    }

`;