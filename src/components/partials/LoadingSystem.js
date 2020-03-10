import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../partials/Loading'

export class LoadingSystem extends Component {
    render() {
        return (
            <>
            {this.props.productLoading || this.props.authLoading ? <Loading/> : ""}
            </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    productLoading: reduxState.products.loading,
    authLoading: reduxState.auth.isFetching
})

export default connect(mapStateToProps)(LoadingSystem)
