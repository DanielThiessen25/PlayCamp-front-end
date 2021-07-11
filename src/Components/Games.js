import Screen from "./Screen";
import styled from 'styled-components';
import { Link, Redirect, useHistory } from "react-router-dom";
import { IoExitOutline, IoCartOutline} from "react-icons/io5";
import Card from "./Card";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function Games() {
    const history = useHistory();
    const {user, setUser} = useContext(UserContext);
    if(!user.token){
        history.push("/");
        return "";
    }
    const isDev = user.userType === "developer" ? true : false;
    console.log(isDev)

    function doLogout(){
        const config = {
            headers:{
                "authorization": `Bearer ${user.token}`
            }
        }
        const body = {}
        const url = "http://localhost:4000/logout"
        const requestLogout = axios.post(url,body, config);
        requestLogout.then(response => {
            setUser({});
            history.push("/");
        });
        requestLogout.catch(err => {
            alert("Ops, tivemos algum erro.");
            setUser({});
            history.push("/");
        })
    }
    return(
        <Screen>
        <Heading>
            {"Welcome, " + user.name}
            <Toolbar>
            <Link to="/cart" style={{ textDecoration: 'none'}}> <IoCartOutline color="#FFFFFF" size="1.9em" /> </Link>
            <IoExitOutline color="#FFFFFF" size="1.9em" 
            onClick={doLogout}/>
            </Toolbar>
        </Heading>
        {isDev ?
        <DevAddGame>
            <Link to="/addgame">Dev, Adicionar Jogo</Link>
        </DevAddGame> : ''}

        <CardsList isDev={isDev}>
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
top: ${props => props.isDev ? '134px':'65px'};
overflow: hidden;
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;
`;

const DevAddGame = styled.div`
    display: flex;
    width: 100%;
    justify-content: right;
    position: fixed;
    top: 85px;
    padding-right: 15px;
    a{
        color: #FFFFFF;
        font-weight: bold;
        text-decoration: none;
        background: #000000;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        padding-left :8px;
        padding-right: 8px;
        margin-bottom: 5px;
    }
`;

