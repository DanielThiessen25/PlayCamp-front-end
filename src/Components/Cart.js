import { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { CardsList, Heading } from "./Games";
import Screen from "./Screen";
import axios from "axios";
import { IoExitOutline, IoHomeOutline} from "react-icons/io5";
import CardInCart from "./CardInCart";
import CartContext from "../contexts/CartContext";
import { Box, Title } from "./Card";
import styled from "styled-components";
import Loader from 'react-loader-spinner';

export default function Cart() {
    const history = useHistory();
    const {user, setUser} = useContext(UserContext);
    const {cartShopping, setCartShopping} = useContext(CartContext);
    const [payment, setPayment] = useState("cash");
    const [loading, setLoading] = useState(false);
    function doLogout(){
        const config = {
            headers:{
                "authorization": `Bearer ${user.token}`
            }
        }
        const body = {}
        const url = "https://playcamp-back.herokuapp.com/logout"
        const requestLogout = axios.post(url,body, config);
        requestLogout.then(response => {
            setUser({});
            history.push("/");
        });
        requestLogout.catch(err => {
            alert("Ops, tivemos algum erro.");
            setUser({});
            history.push("/");
        });
    }
    function getTotal(){
        let total = 0;
        cartShopping.forEach(gameInfo => {
            total += gameInfo.game.price * gameInfo.qtd;
        });
        return String(parseFloat(total).toFixed(2)).replace(".", ",");
    }

    function doSale(){
        setLoading(true);
        const games = [...cartShopping].map(game => {
            const obj = {
                gameId: game.game.id,
                qtd: game.qtd
            }
            return obj;
        });
        const body = {
            payment: payment,
            games: games
        }
        const config = {
            headers: {
                "authorization": `Bearer ${user.token}`
            }
        }
        const url = "https://playcamp-back.herokuapp.com/endsale"
        const saleRequest = axios.post(url, body, config);
        saleRequest.then(response =>{
            alert("Compra efetuada com sucesso!");
            setLoading(false);
            setCartShopping([]);
            history.push("/games");
        });
        saleRequest.catch(err => {
            alert("Não conseguimos efetuar sua compra, tente novamente!");
            setLoading(false);
        })
    }

    return(
        <Screen>
            <Heading>
                {"Welcome, " + user.name}
                <Link to="/games" style={{ textDecoration: 'none'}}> <IoHomeOutline color="#FFFFFF" size="1.9em" /> </Link>
                <IoExitOutline color="#FFFFFF" size="1.9em" 
                onClick={doLogout}/>
            </Heading>
            <CardsList isDev={false}>
                
                <Box>
                    
                    {parseFloat(getTotal().replace(",", ".")) > 0 ?
                    <>
                    <Title>Total: R${getTotal()}</Title>
                    <Select value={payment} onChange={e => setPayment(e.target.value)}>
                        <option value="cash">Em dinheiro</option>
                        <option value="credit">Cartão de Crédito</option>
                    </Select>
                    <EndSale onClick={doSale}disabled={loading}>
                        {loading ? 
                            <Loader type="ThreeDots" color="#FFFFFF" height={13} width={80} />
                            : "Finalizar Compra"}
                    </EndSale>
                    </>
                    : <Title>Seu carrinho está vazio</Title>}
                </Box>
                {cartShopping.map((gameInfo, idx) =>{
                    return <CardInCart key={idx} info={gameInfo}/>
                })}
            </CardsList>
        </Screen>
    );
}

const EndSale = styled.button`
    width: 100%;
    font-weight: bold;
    margin-top: 5px;
    color: #FFFFFF;
    font-size: 25px;
    background: green;
    height: 50px;
    border-radius: 6px;
`;
const Select = styled.select`
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 40px;
    font-weight: bold;
    color: #FFFFFF;
    background: #3E3D3D;
    border: none;
`;