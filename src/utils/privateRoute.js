import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ isAuthenticated, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/sign-in",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.user && !!state.user.token,
});

export default connect(
    mapStateToProps,
    null
)(PrivateRoute)


