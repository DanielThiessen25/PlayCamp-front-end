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
    const [isClient, setIsClient] = useState(false);
    const [isDev, setIsDev] = useState(false);

    function doSignUp(){

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
                <form onSubmit={doSignUp}>
                <input placeholder="Nome" required type="text" value={name} onChange={e => setName(e.target.value)}/>
                <input placeholder="E-mail" required type="e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="Senha" required type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <input placeholder="Confirme a senha..." required type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/>
                <TypeAccount>
                    {renderClient()} 
                    {renderDev()}
                
                </TypeAccount> 
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