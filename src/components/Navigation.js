import React from 'react';
import { Link} from "react-router-dom";
import styled from "styled-components";

const NavigationWrapper = styled.nav`
    ul {
       display: flex;
       align-items: center;
        
        li {
            list-style: none;
            padding: 20px 50px;
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
        </ul>
    </NavigationWrapper>
);

export default Navigation;

