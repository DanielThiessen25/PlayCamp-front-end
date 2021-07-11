import styled from 'styled-components';
import { useState, useContext} from 'react';
import Screen from "./Screen";
import { Link, useHistory } from "react-router-dom";
import InputArea from "./InputArea";
import { FaPlay } from "react-icons/fa";
import Loader from 'react-loader-spinner';
import axios from 'axios';


export default function SignUp() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirm, setPasswordConfirm ] = useState('');
    const [ name, setName] = useState('');
    const [isClient, setIsClient] = useState(false);
    const [isDev, setIsDev] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function doSignUp(e){
        e.preventDefault()
        if(loading){
            return;
        }
        setLoading(true);
        if(password !== passwordConfirm){
            alert("As senhas digitadas devem ser iguais!");
            setLoading(false);
            return;
        }
        const body = {
            name: String(name).trim(),
            email: String(email).trim(),
            password: String(password).trim(),
            userType: isDev ? "developer" : "normal"
        }
        const url = "http://localhost:4000/signup";
        const requestSignUp = axios.post(url, body);
        requestSignUp.then(response => {
            setEmail("");
            setPassword("");
            setPasswordConfirm("");
            setName("");
            setLoading(false);
            alert("Usuário cadastrado com sucesso!");
            history.push("/");
        });
        requestSignUp.catch(err => {
            setEmail("");
            setPassword("");
            setPasswordConfirm("");
            setName("");
            setLoading(false);
            alert("Infelizmente nãoconseguimos te cadastrar,tente novamente.");
        })
    }

    function render(){

    }
    function renderClient(){
        if(isClient){
            return(
                <OptionSelected onClick={()=>{setIsClient(!isClient);setIsDev(false)}}>Cliente</OptionSelected>
            );
       
        }
        else{
            return(
                <Option onClick={()=>{setIsClient(!isClient); setIsDev(false)}}>Cliente</Option>
            );
        }
    }
    function renderDev(){
        if(isDev){
            return(
                <OptionSelected  onClick={()=> { setIsDev(!isDev); setIsClient(false)}}>Desenvolvedor</OptionSelected>
            );
            
        }
        else{
            return(
                <Option  onClick={()=> { setIsDev(!isDev); setIsClient(false)}}>Desenvolvedor</Option>
            );
        }
            
    }
    function switchOption(){
        
    }

    return (
        <Screen>
            <InputArea>
            <FaPlay color="#FFFFFF" size="4em"></FaPlay>
                <Logo>PlayCamp</Logo>
                <form onSubmit={event => doSignUp(event)}>
                <input placeholder="Nome" required type="text" value={name} onChange={e => setName(e.target.value)} disabled={loading}/>
                <input placeholder="E-mail" required type="e-mail" value={email} onChange={e => setEmail(e.target.value)} disabled={loading}/>
                <input placeholder="Senha" required type="password" value={password} onChange={e => setPassword(e.target.value)} disabled={loading}/>
                <input placeholder="Confirme a senha..." required type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} disabled={loading}/>
                <TypeAccount>
                    {renderClient()} 
                    {renderDev()}
                
                </TypeAccount> 
                <button type="submit" disabled={loading}>
                    {loading ? 
                    <Loader type="ThreeDots" color="#FFFFFF" height={13} width={80} />
                    : "Cadastrar"}
                </button>
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

const TypeAccount = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

`;

const Option = styled.div`
    width:45%;
    height: 60px;
    background: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    cursor: pointer;
`;

const OptionSelected = styled.div`
    width:45%;
    height: 60px;
    background: #D6D6D6;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    cursor: pointer;
    border: 5px solid black;
`;