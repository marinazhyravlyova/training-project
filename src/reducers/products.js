const initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS_SET_PRODUCTS':
            return action.payload;
        default:
            return state
    }
};

export default products;

