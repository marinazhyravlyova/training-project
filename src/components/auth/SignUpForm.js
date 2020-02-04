import React, { useState } from 'react';
import styled from 'styled-components';

import { useCorrectSubmit } from '../../utils/form';

const Container = styled.div`
    margin: ${({ big }) => big ? '20px' : 'unset'};
`;

const UserDataForm = ({ onSubmit }) => {
    const handleSubmit = useCorrectSubmit(onSubmit);

    return (
        <form onSubmit={handleSubmit}>
            {/*<Container big>Sign Up</Container>*/}
            <div>
                <label>Gender:</label>
                <input name="gender" required/>
            </div>
            <div>
                <label>Age:</label>
                <input name="age" required/>
            </div>
            <div>
                <label>Height:</label>
                <input name="height" required/>
            </div>
            <div>
                <label>Weight:</label>
                <input name="weight" required/>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
};

const ContactsForm = ({ onSubmit }) => {
    const handleSubmit = useCorrectSubmit(onSubmit);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: <input name="name" required/></label>
            </div>
            <div>
                <label>Email: <input name="email" required/></label>
            </div>
            <div>
                <label>Password:</label>
                <input name="password" required/>
            </div>
            <div>
                <label>Repeat Password:</label>
                <input name="repeatPassword" required/>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
};


function SignUpForm ({ signUpRequest }) {
    const [contacts, setContacts] = useState(null);

    const handleSignUp = userData =>  {
        signUpRequest(userData);
    };

    const handleContactsSubmit = data => setContacts(data);
    const handleUserDataSubmit = data => handleSignUp({ ...contacts, ...data });

    return !contacts
        ? <ContactsForm onSubmit={handleContactsSubmit} />
        : <UserDataForm onSubmit={handleUserDataSubmit} />;
}

export default SignUpForm;
