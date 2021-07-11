import styled from 'styled-components';
import { useState, useContext} from 'react';
import Screen from "./Screen";
import { Link, useHistory } from "react-router-dom";
import InputArea from "./InputArea";
import { FaPlay } from "react-icons/fa";
import Loader from 'react-loader-spinner';
import axios from 'axios';
import UserContext from '../contexts/UserContext';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const {setUser} = useContext(UserContext);

    function doLogin(e){
        e.preventDefault();
        if(loading){
            return;
        }
        setLoading(true);
        const body = {
            email: String(email).trim(),
            password: String(password).trim()
        }
        const url = "http://localhost:4000/signin"
        const requestSignIn = axios.post(url, body);
        requestSignIn.then(response => {
            setEmail("");
            setPassword("");
            setLoading(false);
            setUser({
                token: response.data.token,
                name: response.data.userName,
                userType: response.data.userType
            });
            history.push("/games");
        });
        requestSignIn.catch(err => {
            setEmail("");
            setPassword("");
            setLoading(false);
            alert("Não conseguimos te logar, tente novamente!");
        })
    }

    function render(){

    }


    return (
        <Screen>
            <InputArea>
            <FaPlay color="#FFFFFF" size="4em"></FaPlay>
                <Logo>PlayCamp</Logo>
                <form onSubmit={event => doLogin(event)}>
                    <input placeholder="E-mail" required type="e-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="Senha" required type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" disabled={loading}>
                        {loading ? 
                        <Loader type="ThreeDots" color="#FFFFFF" height={13} width={80} />
                        : "Entrar"}
                    </button>
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