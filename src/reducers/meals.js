const initialState = [];

const meals = (state = initialState, action) => {
    switch (action.type) {
        case 'MEALS_SET_MEALS':
            return action.payload;
        default:
            return state
    }
};

export default meals;

