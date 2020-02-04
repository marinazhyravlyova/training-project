import React from 'react'
import { connect } from 'react-redux';

import { logOut } from '../actions/authorisation';

function LogOutButton({ isAuthenticated, logOut }) {
    return isAuthenticated
      ? <button onClick={logOut}>Log Out</button>
      : null
}

const mapStateToProps = state => ({
    isAuthenticated: state.user && !!state.user.token,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogOutButton)
