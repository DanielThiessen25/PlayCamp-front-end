import Screen from "./Screen";
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom";
import { IoExitOutline, IoCartOutline} from "react-icons/io5";

export default function Games() {
return(
    <Screen>
    <Heading>
        {"Olá, Fulano"}
        <div>
        <Link to="/cart" style={{ textDecoration: 'none'}}> <IoCartOutline color="#FFFFFF" size="1.2em" /> </Link>
        <Link to="/" style={{ textDecoration: 'none' }}><IoExitOutline color="#FFFFFF" size="1.2em" /></Link>
        </div>
        
    </Heading>
</Screen>
);

}

const Heading = styled.div`
width: 100%;
height:50px;
padding: 12px;
display: flex;
position: fixed;
top: 0px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background: #000000;
flex-direction: row;
align-items: center;
justify-content: space-between;
font-family: 'Raleway', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
margin-bottom: 23px

`;
