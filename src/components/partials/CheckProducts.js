import React, { Component } from 'react'
import checkProducts from '../../redux/actions/getProducts'
import { connect } from 'react-redux'

export class CheckProducts extends Component {
    render() {
        this.props.checkProducts()
        return (
            <>
                
            </>
        )
    }
}

export default connect(null, { checkProducts })(CheckProducts)
