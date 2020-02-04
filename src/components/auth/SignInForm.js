import React  from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useCorrectSubmit } from '../../utils/form';

const ContactsForm = ({ onSubmit }) => {
    const handleSubmit = useCorrectSubmit(onSubmit);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email: <input name="email" required/></label>
            </div>
            <div>
                <label>Password:</label>
                <input name="password" required/>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
};

function SignInForm ({ signInRequest, ...rest }) {
    const history = useHistory();

    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = userData =>  {
        signInRequest({
            onSuccess: () => history.replace(from),
            userData
        });
    };

    return <ContactsForm onSubmit={handleSignIn} />
}

export default SignInForm;

