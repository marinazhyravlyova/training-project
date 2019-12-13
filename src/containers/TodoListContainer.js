import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/index';

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

