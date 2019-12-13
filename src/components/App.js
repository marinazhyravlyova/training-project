import React from 'react'
import VisibleTodoList from "../containers/TodoListContainer";

const Footer = () => (
    <>
        <div>
            <span>Show: </span>
            <button>Load Data</button>
        </div>
        <VisibleTodoList />
    </>
);

export default Footer
