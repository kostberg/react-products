import { CHECK_PRODUCTS_STARTED, CHECK_PRODUCTS_SUCCESS, CHECK_PRODUCTS_FAILURE } from './types'

const getProducts = () => {



    return async (dispatch, getState) => {
        dispatch(checkProductsStarted())
        const token = getState().auth.token

        let config = {
            method: 'POST',
            headers: { 'Content-Type':'application/x-www-form-urlencoded' },
            body: `token=${token}`
          }

        // Get database products
        const { products: dbProducts } = await fetch('http://mern-authenticator.herokuapp.com/api/methods/getProducts', config)
            .then(async res => {
                const jsonRes = await res.json()
                if(!jsonRes.error){
                    return jsonRes
                }
            })
            .catch(err => {
                dispatch(checkProductsFailure({error: typeof(err) === "string" || err ? err.toString() : "Error"}))
            })

        // Get current products in state
        const { products: stateProducts } = getState().products

        // Only add products that arent already in the state:
        const unqiueProducts = dbProducts.filter(dbProduct => !stateProducts.some(stateProduct => stateProduct._id === dbProduct._id))
        
        // Add them to payload
        dispatch(checkProductsSuccess(unqiueProducts))
    }
}


const checkProductsStarted = () => {
    return {
        type: CHECK_PRODUCTS_STARTED
    }
}

const checkProductsSuccess = (products) => {
    return {
        type: CHECK_PRODUCTS_SUCCESS,
        payload: {
            products
        }
    }
}

const checkProductsFailure = (err) => {
    return {
        type: CHECK_PRODUCTS_FAILURE,
        payload: {
            ...err
        }

    }
}

export default getProducts;