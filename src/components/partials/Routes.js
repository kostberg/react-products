import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from '../mains/LoginMain'
import Register from '../mains/RegisterMain'
import MainApp from '../MainApp'

export class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route path="/" component={MainApp}/>
                </Switch>
          </Router>
        )
    }
}

export default Routes
