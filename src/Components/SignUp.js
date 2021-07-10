import styled from 'styled-components';
import { useState, useContext} from 'react';
import Screen from "./Screen";
import { Link, Redirect } from "react-router-dom";
import InputArea from "./InputArea";
import { FaPlay } from "react-icons/fa";


export default function SignUp() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirm, setPasswordConfirm ] = useState('');
    const [ name, setName] = useState('');

    function doSignUp(){

    }

    function render(){

    }


    return (
        <Screen>
            <InputArea>
            <FaPlay color="#FFFFFF" size="5em"></FaPlay>
                <Logo>PlayCamp</Logo>
                <form onSubmit={doSignUp}>
                <input placeholder="Nome" required type="text" value={name} onChange={e => setName(e.target.value)}/>
                <input placeholder="E-mail" required type="e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="Senha" required type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <input placeholder="Confirme a senha..." required type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/>
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to="/" style={{ textDecoration: 'none' }}><LinkText>Mais perdido ainda?? Tente um login mágico!</LinkText></Link>
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