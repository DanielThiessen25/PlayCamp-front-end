import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login';
import UserContext from '../contexts/UserContext';

export default function App() {
    const [user, setUser] = useState();
    return (
        <BrowserRouter>
            <Switch>
                <UserContext.Provider value={{ user, setUser }}>
                    <Route path="/" exact={true} component={Login} />
                </UserContext.Provider>
            </Switch>
        </BrowserRouter>


    );
}