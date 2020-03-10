import React, { Component } from 'react'
import Styler from './stylers/RegisterStyler'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom'
import loginSvg from '../files/login.svg'
import registerSvg from '../files/register.svg'
import submit from '../files/submit.svg'

export class Login extends Component {
    render() {
        return (
            <Styler>
                <div>
                    <section className="choose">
                        <div>
                            <div>
                                <Link to="/login"><img src={loginSvg} alt="login"></img></Link>
                                <h6>Login</h6>
                            </div>
                            <div>
                                <div></div>
                                <Link to="/register"><img src={registerSvg} alt="register"></img></Link>
                                <h6>Register</h6>
                            </div>
                        </div>
                    </section>
                    <section className="information">
                        <div>
                            <img src={logo} alt="react-logo"/>
                            <h1>Registration not implemented yet :/</h1>
                            
                        </div>
                    </section>
                    <section className="input-form">
                        <div>
                            <input defaultValue="Username" type="text"></input>
                            <input defaultValue="Password" type="password"></input>
                            <h3>Forgot password?</h3>
                            <img src={submit} alt="Submit button"/>
                            <h3>Don't have an account? <Link to="/register" style={{textDecoration: "none"}}><span>Sign up</span></Link></h3>
                        </div>
                    </section>
                </div>
            </Styler>
        )
    }
}

export default Login
