export const addToFav= (company) => ({
    type: "ADD_TO_FAVORITE",
    payload: company
})

export const removeFromFav = (company) => ({
    type: "REMOVE_FROM_FAVORITE",
    payload: company
})

export const handleFetch = (url, query, limit) => {
    return async (dispatch, getState) => {
         dispatch({
            type: "GET_FETCH_LOADING",
            payload: true,
            })
        try { 
            let resp = await fetch(url, query, limit)
            if (resp.ok) {
                const {data} = await resp.json()  //yayyyyy is correct also like this
                dispatch({
                type: "FETCH_JOBS",
                payload: data,
                })
                dispatch({
                type: "GET_FETCH_ERROR",
                payload: false,
                })
                dispatch({
                type: "GET_FETCH_LOADING",
                payload: false,
                })
            } else {
                console.log ("error")
                  dispatch({
                type: "GET_FETCH_ERROR",
                payload: true,
                })
                dispatch({
                type: "GET_FETCH_LOADING",
                payload: false,
                })
            }
            
        } catch (error) {
            console.log(error)
              dispatch({
                type: "GET_FETCH_ERROR",
                payload: true,
                })
                dispatch({
                type: "GET_FETCH_LOADING",
                payload: false,
                })
        }
    }
}