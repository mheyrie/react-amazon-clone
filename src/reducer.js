// here we define all the application level states and define actions to make the changes to the state

export const initialState = {
    basket: [],
};

//Selector

export const getBasketTotal = (basket) => {
    console.log("Basket contents:", basket);

    // Check if the basket is an array and contains items with price
    return basket?.reduce((amount, item) => {
        console.log(`Adding item price: ${item.price} to amount: ${amount}`);
        return item.price + amount;
    }, 0);
};


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