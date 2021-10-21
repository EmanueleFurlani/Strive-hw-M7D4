import { intialState } from "../store";

export const likesReducer = (state = intialState.likes, action) => {
    const { type, payload} = action
    switch (type) {
        case "ADD_TO_FAVORITE": 
            return {
                ...state,
                elements: [...state.elements, payload]
            }
        case "REMOVE_FROM_FAVORITE":
            return {
                ...state,
                elements: state.elements.filter(company => company !== payload)
            }
        default:
            return state
    }
}