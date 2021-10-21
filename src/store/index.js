import { createStore, compose, applyMiddleware, combineReducers } from "redux"
//import { mainReducer } from "../reducers/likesReducer"
import thunk from "redux-thunk"
import { likesReducer } from "../reducers/likesReducer"
import { jobsReducer } from "../reducers/jobsReducer"



export const intialState = {
    likes: {
        elements: []
    },

    jobs: {
        elements: [],
        isError: false,
        isLoading: false,
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// combine the reducers
 const mainReducer = combineReducers({
     likes: likesReducer,
     jobs: jobsReducer
 })

const configureStore = createStore(
    mainReducer,
    intialState,
    composeEnhancers(applyMiddleware(thunk))
   
)

export default configureStore