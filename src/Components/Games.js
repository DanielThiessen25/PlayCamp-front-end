import Screen from "./Screen";
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom";
import { IoExitOutline, IoCartOutline} from "react-icons/io5";
import Card from "./Card";

export default function Games() {
return(
    <Screen>
    <Heading>
        {"Welcome, Fulano"}
        <Toolbar>
        <Link to="/cart" style={{ textDecoration: 'none'}}> <IoCartOutline color="#FFFFFF" size="1.9em" /> </Link>
        <Link to="/" style={{ textDecoration: 'none' }}><IoExitOutline color="#FFFFFF" size="1.9em" /></Link>
        </Toolbar>
        
    </Heading>

    <CardsList>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    </CardsList>
    
</Screen>
);

}

const Heading = styled.div`
width: 100%;
height:60px;
padding: 12px;
display: flex;
position: fixed;
top: 0px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
background: #000000;
flex-direction: row;
align-items: center;
justify-content: space-between;
font-family: 'Press Start 2P', cursive;
font-style: normal;
font-weight: normal;
font-size:  12px;
line-height: 40px;
color: #FFFFFF;
margin-bottom: 23px;
`;

const Toolbar = styled.div`
width: 18%;
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

const CardsList = styled.div`
height: 85%;
width: 100%;
padding: 15px;
position: fixed;
top:65px;
overflow: hidden;
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;

`;

