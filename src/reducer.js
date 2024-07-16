// here we define all the application level states and define actions to make the changes to the state

export const initialState = {
    basket: [],
};

//Selector

export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount, item) => item.price + amount, 0));
}

const reducer = (state, action) => {
    console.log("Reducer action:", action);
    switch(action.type) {
        case "ADD_TO_BASKET":
          return {
              ...state,
              basket: [...state.basket, action.item],
          };
        case "REMOVE_FROM_BASKET":
          return {
              ...state,
              basket: state.basket.filter(item => item.id !== action.id),
        };
        default:
            return state;
    }
}


export default reducer;