import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import SignUp from "./containers/auth/signUp";
import SignIn from "./containers/auth/signIn";
import HomePage from './containers/homePage';

import PrivateRoute from './utils/privateRoute'


const App = () => {
    return (
        <BrowserRouter>
               <Navigation />
                <Switch>
                    <Route path="/sign-up">
                        <SignUp />
                    </Route>
                    <Route path="/sign-in">
                        <SignIn />
                    </Route>
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute>
                </Switch>
        </BrowserRouter>
    );
}

export default App;
