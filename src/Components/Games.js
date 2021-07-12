import Screen from "./Screen";
import styled from 'styled-components';
import { Link, Redirect, useHistory } from "react-router-dom";
import { IoExitOutline, IoCartOutline} from "react-icons/io5";
import Card from "./Card";
import { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function Games() {
    const history = useHistory();
    const [list, setList] = useState([]);
    const {user, setUser} = useContext(UserContext);
    useEffect(() => {
        if(!user.token){
            history.push("/");
            return "";
        }
        const config = {
            headers: {
                Authorization: "Bearer " + user.token
            }
        }
        const request = axios.get("https://back-playcamp.herokuapp.com/games", config);

        request.then(resposta => {
            setList(resposta.data);
            console.log(resposta.data);
        });
    }, []);
    
    const isDev = user.userType === "developer" ? true : false;
    console.log(isDev);

    

    function doLogout(){
        const config = {
            headers:{
                "authorization": `Bearer ${user.token}`
            }
        }
        const body = {}
        const url = "https://back-playcamp.herokuapp.com/logout"
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
            <Link to="/addgame">Adicionar Jogo</Link>
        </DevAddGame> : ''}

        

        <CardsList isDev={isDev}>
        <Title isDev={isDev}>Jogos</Title>
        {list.map(item => 
            <Card game={item}></Card>
        )}
        </CardsList>
        
    </Screen>
);

}

export const Heading = styled.div`
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

export const Toolbar = styled.div`
width: 18%;
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const Title = styled.div`
width: 100%;
height: 30px;
font-family: 'Press Start 2P', cursive;
font-style: normal;
font-weight: normal;
font-size:  30px;
line-height: 30px;
color: #FFFFFF;
margin-bottom: 30px;
`;

export const CardsList = styled.div`
height: 85%;
width: 100%;
padding: 15px;
position: fixed;
top: ${props => props.isDev ? '150px':'65px'};
overflow: hidden;
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;
`;

const DevAddGame = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
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
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    }
`;

