import { connect } from 'react-redux'

import SignInForm from '../../components/auth/SignInForm';
import { signIn } from '../../actions/authorisation';

const mapDispatchToProps = (dispatch) => ({
    signInRequest: (userData) => dispatch(signIn(userData))
});

export default connect(
    null,
    mapDispatchToProps
)(SignInForm);


