import styled from "styled-components";
import Screen from "./Screen";
import { Link, Redirect, useHistory } from "react-router-dom";
import { IoExitOutline, IoCartOutline } from "react-icons/io5";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useContext, useState } from "react";
import Loader from 'react-loader-spinner';
import InputArea from "./InputArea";

export default function AddGame() {
    const history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [urlImage, setUrlImage] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    if (!user.token) {
        history.push("/");
        return "";
    }

    function doLogout() {
        const config = {
            headers: {
                "authorization": `Bearer ${user.token}`
            }
        }
        const body = {}
        const url = "https://playcamp-back.herokuapp.com/logout"
        const requestLogout = axios.post(url, body, config);
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

    function create(e) {
        const config = {
            headers: {
                Authorization: "Bearer " + user.token
            }
        }
        e.preventDefault();
        if(loading){
            return;
        }
        setLoading(true);
        const body = {  
            name: name,
            img: urlImage,
            price:price,
            description:description
        }
        const url = "https://playcamp-back.herokuapp.com/addgame";
        const requestCreation = axios.post(url, body, config);
        requestCreation.then((response)=>{
            setName('');
            setUrlImage('');
            setPrice('');
            setDescription('');
            setLoading(false);
            history.push("/games");
        });
        requestCreation.catch((err)=>{
            console.log(err);
            setLoading(false);
            setName('');
            setUrlImage('');
            setPrice('');
            setDescription('');
            alert("Não conseguimos publicar jogo, tente novamente!");
        });
    }

    return (
        <Screen>
            <Heading>
                {"Welcome, " + user.name}
                <Toolbar>
                    <Link to="/cart" style={{ textDecoration: 'none' }}> <IoCartOutline color="#FFFFFF" size="1.9em" /> </Link>
                    <IoExitOutline color="#FFFFFF" size="1.9em"
                        onClick={doLogout} />
                </Toolbar>

            </Heading>
            <Title>Criar Jogo</Title>

            <CreateForm>
                <InputArea>
                <form onSubmit={event => create(event)}>
                    <input placeholder="Nome" required type="text" value={name} onChange={e => setName(e.target.value)} />
                    <input placeholder="URL da imagem" required type="url" value={urlImage} onChange={e => setUrlImage(e.target.value)} />
                    <input placeholder="Preço" required type="text" value={price} onChange={e => setPrice(e.target.value)} />
                    <textarea placeholder="Descrição" required value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    <button type="submit" disabled={loading}>
                        {loading ?
                            <Loader type="ThreeDots" color="#FFFFFF" height={13} width={80} />
                            : "Enviar"}
                    </button>
                </form>
                </InputArea>
            </CreateForm>


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

const Title = styled.div`
width: 100%;
height: 30px;
position: fixed;
top: 85px;
font-family: 'Press Start 2P', cursive;
font-style: normal;
font-weight: normal;
font-size:  30px;
text-align: center;
line-height: 30px;
color: #FFFFFF;
`;

const CreateForm = styled.div`
height: 85%;
width: 100%;
padding: 15px;
position: fixed;
top:140px;
overflow: hidden;
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;
`;