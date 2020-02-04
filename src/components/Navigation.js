import React from 'react';
import { Link} from "react-router-dom";
import styled from "styled-components";

import LogOutButton from '../containers/LogOutButton';

const NavigationWrapper = styled.nav`
    ul {
       display: flex;
       align-items: center;
        
        li {
            list-style: none;

            display: flex;
            justify-content: center;
            align-items: center;

            height: 60px;
            padding: 0 50px;
        }
    }
`;

const Navigation = () => (
    <NavigationWrapper>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/sign-in">Sign in</Link>
            </li>
            <li>
                <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/user-page">User Page</Link>
            </li>
            <li>
                <Link to="/calories-journal">Calories Journal</Link>
            </li>
            <li>
                <LogOutButton />
            </li>
        </ul>
    </NavigationWrapper>
);

export default Navigation;

