import React, { Component } from 'react'
import AddProduct from '../partials/AddProduct'
import Products from '../partials/Products'
import Wrapper from './stylers/AddMainStyler'
import CheckProducts from '../partials/CheckProducts'

export class AddProductHome extends Component {
    render() {
        // if(!this.props.loading){
        //     this.props.checkProducts()
        // }
        return (<>
            <CheckProducts />
            <Wrapper>
                <div className="container">
                    <AddProduct />
                    <div className="seperator"></div>
                    <Products />
                </div>
            </Wrapper>
            
        </>)
    }
}

export default AddProductHome