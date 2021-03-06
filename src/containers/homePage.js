import React from 'react';

import { connect } from 'react-redux'

function Home({ user }) {
    console.log(user);

    return <h2>Hello, {user.name}</h2>;
}

const mapStateToProps = (state /*, ownProps*/) => ({
    user: state.user,
});

export default connect(
    mapStateToProps,
    null
)(Home);


