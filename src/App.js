import React from 'react'
import { connect } from 'react-redux';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import { authorize } from './actions/authorisation';
import { useAutoSignIn } from './utils/hooks';

import Navigation from "./components/Navigation";
import SignUp from "./containers/auth/signUp";
import SignIn from "./containers/auth/signIn";
import UserPage from './containers/userPage';
import ProductsPage from './containers/productsPage';
import CaloriesJournal from './containers/caloriesJournal';

import PrivateRoute from './utils/privateRoute'

const App = ({ authorizeRequest }) => {
    useAutoSignIn(authorizeRequest);

    return (
        <BrowserRouter>
               <Navigation />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/sign-up">
                        <SignUp />
                    </Route>
                    <Route path="/sign-in">
                        <SignIn />
                    </Route>
                    <Route path="/products">
                        <ProductsPage />
                    </Route>
                    <PrivateRoute path="/user-page">
                        <UserPage />
                    </PrivateRoute>
                    <PrivateRoute path="/calories-journal">
                        <CaloriesJournal />
                    </PrivateRoute>
                </Switch>
        </BrowserRouter>
    );
}

function HomePage() {
    return <h2>Welcome to the Homepage!</h2>;
}

const mapDispatchToProps = (dispatch) => ({
    authorizeRequest: token => dispatch(authorize(token))
});

export default connect(
    null,
    mapDispatchToProps
)(App);
