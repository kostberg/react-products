import {
    ADD_PRODUCT_STARTED,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
} from './types'
import getProducts from './getProducts'


const checkInput = (name, price) => {
    if((!(name === "") && typeof(name) === "string") 
    && (!(price === "") && typeof(price) === "number")){
            return true
    } else {
        return false
    }
}

const isDuplicate = (name, getState) => {
    const stateProducts = getState().products.products
    if(stateProducts.some(stateProduct => stateProduct.name === name)){
        return true
    } else {
        return false
    }
}

const addProduct = (name, price) => {
    return async (dispatch, getState) => {
        dispatch(addProductStarted())

        // Validate input
        if(!checkInput(name, getState)){
            dispatch(addProductFailure({error: "Invalid input"}))
            return
        } else if(isDuplicate(name, price, getState)) {
            dispatch(addProductFailure({error: "Duplicate input"}))
            return
        }

        // Fetch image from api
        const { img: image } = await fetch(`http://localhost:1337/api/scrape/${name}`)
        .then(async res => await res.json())
        .catch(err => {
            dispatch(addProductFailure({error: typeof(err) === "string" || err ? err.toString() : "Error"}))
        })

        

        let config = {
            method: 'POST',
            headers: { 'Content-Type':'application/x-www-form-urlencoded' },
            body: `token=${getState().auth.token}&name=${name}&price=${price}&image=${image}`
          }

        // Add product to database
        fetch('http://mern-authenticator.herokuapp.com/api/methods/addProduct', config)
            .then(
                dispatch(updateAndSuccess())
            )
            .catch(
                err => {
                dispatch(addProductFailure({error: typeof(err) === "string" || err ? err.toString() : "Error"}))
            })

    }
}

const updateAndSuccess = () => {
    return dispatch => {
        dispatch(addProductSuccess())
        dispatch(getProducts())
    } 
}

const addProductStarted = () => {
    return {
        type: ADD_PRODUCT_STARTED
    }
}

const addProductSuccess = () => {
    return {
        type: ADD_PRODUCT_SUCCESS
    }
}

const addProductFailure = (err) => {
    return {
        type: ADD_PRODUCT_FAILURE,
        payload: {
            ...err
        }

    }
}


export default addProduct