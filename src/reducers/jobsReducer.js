import { intialState } from "../store";

export const jobsReducer = (state = intialState.jobs, action) => {
    const { type, payload} = action
    switch (type) {
        case "FETCH_JOBS": 
            return {
            //     ...state, 
            //     elements:[...state.elements, payload]
            // }
            ...state,
                elements: payload, // .data (use this or the destruc. way)
            }
        case "GET_FETCH_LOADING":
            return {
            ...state,
            isLoading: payload,
            }
        case "GET_FETCH_ERROR":
            return {
            ...state,
            isError: payload,
            }
        default:
            return state
    }
}