// here we define all the application level states and define actions to make the changes to the state

export const initialState = {
    basket: [],
};

//Selector
const reducer = (state, action) => {
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