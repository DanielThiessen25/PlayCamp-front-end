import styled from 'styled-components';
import { useState, useContext} from 'react';
import Screen from "./Screen";
import { Link, Redirect } from "react-router-dom";
import InputArea from "./InputArea";
import { FaPlay } from "react-icons/fa";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState('');

    function doLogin(){

    }

    function render(){

    }


    return (
        <Screen>
            <InputArea>
            <FaPlay color="#FFFFFF" size="4em"></FaPlay>
                <Logo>PlayCamp</Logo>
                <form onSubmit={doLogin}>
                    <input placeholder="E-mail" required type="e-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="Senha" required type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit">Entrar</button>
                </form>
                <Link to="/sign-up" style={{ textDecoration: 'none' }}><LinkText>Perdido por aqui?? Crie já a sua conta!</LinkText></Link>
                {render()}
            </InputArea>
        </Screen>
    );
}

const Logo = styled.div`
    font-family: 'Press Start 2P', cursive;
    font-style: normal; 
    font-weight: normal;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    margin-bottom: 25px;
    margin-top: 10px;
`;

const LinkText = styled.div`
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
`;