import React  from 'react';
import { useHistory, useLocation } from 'react-router-dom'

import { ContactsForm } from './SignUpForm'

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

