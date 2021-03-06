const initialState = [
    {
        id: 1,
        text: 'First',
        completed: false
    },
    {
        id: 2,
        text: 'Second',
        completed: true
    },
];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state
    }
};
export default todos;

