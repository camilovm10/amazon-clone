export const initialState = {
    basket: [],
    user: null
};

// Selector
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);
    


const reducer = (state, action) => {


    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.payload);
            let newBasket = [...state.basket];

            if(index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.payload} as it is not in the basket`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
    
        default:
            break;
    }

};

export default reducer;