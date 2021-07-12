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

export default function Games() {
    const history = useHistory();
    const {user, setUser} = useContext(UserContext);
    const {cartShopping, setCartShopping} = useContext(CartContext);
    const [payment, setPayment] = useState("cash");
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
        });
    }
    function getTotal(){
        let total = 0;
        cartShopping.forEach(gameInfo => {
            total += gameInfo.game.price * gameInfo.qtd;
        });
        return String(parseFloat(total).toFixed(2)).replace(".", ",");
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
                    <EndSale>Finalizar Compra</EndSale>
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