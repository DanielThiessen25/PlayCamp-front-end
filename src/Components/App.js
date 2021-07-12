import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import UserContext from '../contexts/UserContext';
import Games from './Games';
import Cart from './Cart';
import CartContext from '../contexts/CartContext';
import AddGame from './AddGame';


export default function App() {
    const [user, setUser] = useState();
    const [cartShopping, setCartShopping] = useState([]);
    return (
        <BrowserRouter>
            <Switch>
                <CartContext.Provider value={{ cartShopping, setCartShopping }}>
                <UserContext.Provider value={{ user, setUser }}> 
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/sign-up" exact={true} component={SignUp} />
                    <Route path="/games" exact={true} component={Games} />
                    <Route path="/cart" exact={true} component={Cart} />
                    <Route path="/addgame" exact={true} component={AddGame} />
                </UserContext.Provider>
                </CartContext.Provider>
            </Switch>
        </BrowserRouter>


    );
}