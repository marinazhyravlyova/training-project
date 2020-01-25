import { connect } from 'react-redux';

import SignUpForm from '../../components/auth/SignUpForm';
import { signUp } from '../../actions/authorisation';

const mapDispatchToProps = (dispatch) => ({
    signUpRequest: (userData) => dispatch(signUp(userData))
});

export default connect(
    null,
    mapDispatchToProps
)(SignUpForm);

