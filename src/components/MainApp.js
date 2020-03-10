import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import AddProductMain from './mains/AddProductMain'
import LandingPage from './mains/Homepage'
import ProductsMain from './mains/ProductsMain'
import Header from './statics/Header'
import '../App.css';

export class MainApp extends Component {
    render() {
        return (
            <> {this.props.isAuthenticated ? (
            <div>
                <Header/>
                <div className="MainApp" style={this.props.loading ? {overflowY: "hidden"} : {overflowY: "scroll"}}>
                        <Switch>
                            <Route path="/" exact component={LandingPage} />
                            <Route path="/addProduct" component={AddProductMain} />
                            <Route path="/products" component={ProductsMain}/>
                        </Switch>
                </div>
            </div>
            ) : (<Redirect
                to={{
                  pathname: "/login"
                }}
              />)}
            
            </>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    loading: reduxState.products.loading,
    isAuthenticated: reduxState.auth.isAuthenticated
})

export default connect(mapStateToProps)(MainApp)