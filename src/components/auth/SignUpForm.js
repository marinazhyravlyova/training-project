import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: ${({ big }) => big ? '20px' : 'unset'};
`;

const UserDataForm = ({ onSubmit }) => {
    const handleSubmit = e => {
        e.preventDefault();

        const { age, height, weight, gender } = e.target.elements;
        onSubmit({
            age: age.value,
            height: height.value,
            weight: weight.value,
            gender: gender.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/*<Container big>Sign Up</Container>*/}
            <div>
                <label>Gender:</label>
                <input name="gender"/>
            </div>
            <div>
                <label>Age:</label>
                <input name="age"/>
            </div>
            <div>
                <label>Height:</label>
                <input name="height"/>
            </div>
            <div>
                <label>Weight:</label>
                <input name="weight"/>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
};

export const ContactsForm = ({ onSubmit }) => {
    const handleSubmit = e => {
        e.preventDefault();

        const { name, email, password, repeatPassword } = e.target.elements;
        onSubmit({
            name: name.value,
            email: email.value,
            password: password.value,
            repeatPassword: repeatPassword.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: <input name="name"/></label>
            </div>
            <div>
                <label>Email: <input name="email"/></label>
            </div>
            <div>
                <label>Password:</label>
                <input name="password"/>
            </div>
            <div>
                <label>Repeat Password:</label>
                <input name="repeatPassword"/>
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
