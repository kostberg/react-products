import { ADD_PRODUCT_STARTED, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE,
         CHECK_PRODUCTS_STARTED, CHECK_PRODUCTS_SUCCESS, CHECK_PRODUCTS_FAILURE } from '../actions/types'

const initialState = {
    products: [],
    loading: false,
    error: null,
    productAdded: false
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_STARTED:
            return {
                ...state,
                loading: true
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                productAdded: true,
                products: [...state.products]
            };
        case ADD_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error ? action.payload.error : "error"
            };
        case CHECK_PRODUCTS_STARTED:
            return {
                ...state,
                loading: true
            };
        case CHECK_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: [...state.products, ...action.payload.products]
            };
        case CHECK_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error ? action.payload.error : "error"
            };
        default:
            return state;
    }
}

export default productsReducer