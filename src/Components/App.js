import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import UserContext from '../contexts/UserContext';
import Games from './Games';
import Cart from './Cart';


export default function App() {
    const [user, setUser] = useState();
    return (
        <BrowserRouter>
            <Switch>
                <UserContext.Provider value={{ user, setUser }}> 
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/sign-up" exact={true} component={SignUp} />
                    <Route path="/games" exact={true} component={Games} />
                    <Route path="/cart" exact={true} component={Cart} />
                </UserContext.Provider>
            </Switch>
        </BrowserRouter>


    );
}