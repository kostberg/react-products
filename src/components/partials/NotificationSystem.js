import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store as storeNotifications} from 'react-notifications-component';

export class NotificationSystem extends Component {

    componentDidUpdate = (prevProps) => {

        // When there's a new product error:
        if(this.props.productError !== prevProps.productError){
            if(!this.props.productError) return
            storeNotifications.addNotification({
                title: "Error",
                message: this.props.productError,
                type: "danger",
                insert: "top",
                container: "top-center",
                animationIn: ["animated", "flipInX"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        }

        // When there's a new auth error:
        if(this.props.authError !== prevProps.authError){
            if(!this.props.authError) return
            storeNotifications.addNotification({
                title: "Error",
                message: this.props.authError,
                type: "danger",
                insert: "top",
                container: "top-center",
                animationIn: ["animated", "flipInX"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        }

        // When the user has been successsfully logged in:
        if(this.props.authSuccess !== prevProps.authSuccess){
            if(!this.props.authSuccess) return
            storeNotifications.addNotification({
                title: "Logged in!",
                message: "You have been successfully logged in.",
                type: "success",
                insert: "top",
                container: "top-center",
                animationIn: ["animated", "flipInX"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        }

        // When there's a new product added:
        if(this.props.productAdded !== prevProps.productAdded){
            if(!this.props.productAdded) return
            storeNotifications.addNotification({
                title: "Product added",
                message: "A new product has been added.",
                type: "success",
                insert: "top",
                container: "top-center",
                animationIn: ["animated", "flipInX"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        }
    }

    render() {
        return (
            <></>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    productError: reduxState.products.error,
    authError: reduxState.auth.error,
    productAdded: reduxState.products.productAdded,
    authSuccess: reduxState.auth.isAuthenticated
})

export default connect(mapStateToProps)(NotificationSystem)
