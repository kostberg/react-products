import React, { Component } from 'react'
import Styler from './stylers/LoginStyler'
import logo from '../../logo.svg'
import { Link, Redirect } from 'react-router-dom'
import loginSvg from '../files/login.svg'
import registerSvg from '../files/register.svg'
import submit from '../files/submit.svg'
import { connect } from 'react-redux'
import login from '../../redux/actions/loginUser'

export class Login extends Component {
    state = {
        currentUsername: "",
        currentPassword: ""
    }

    inputHandler = (event) => {
        const value = event.target.value
        switch(event.target.getAttribute("name")){
            case "currentUsername":
                this.setState({currentUsername: value})
                break;
            case "currentPassword":
                this.setState({currentPassword: value})
                break;
            default:
                throw new Error('Value error');
        }
    }

    login = () => {
        this.props.login(this.state.currentUsername, this.state.currentPassword)
    }

    render() {
        return (
            <Styler>
                {this.props.isAuthenticated ? <Redirect to="/"/> : ""}
                <div>
                    <section className="choose">
                        <div>
                            <div>
                                <div></div>
                                <Link to="/login"><img src={loginSvg} alt="login"></img></Link>
                                <h6>Login</h6>
                            </div>
                            <div>
                                <Link to="/register"><img src={registerSvg} alt="register"></img></Link>
                                <h6>Register</h6>
                            </div>
                        </div>
                    </section>
                    <section className="information">
                        <div>
                            <img src={logo} alt="react-logo"/>
                            <h1>Please sign in</h1>
                            <h3>App requires authentication</h3>
                        </div>
                    </section>
                    <section className="input-form">
                        <div>
                            <input defaultValue="Username" name="currentUsername" type="text" onChange={this.inputHandler}></input>
                            <input defaultValue="Password" name="currentPassword" type="password" onChange={this.inputHandler}></input>
                            <h3>Forgot password?</h3>
                            <img src={submit} alt="Submit button" onClick={this.login}/>
                            <h3>Don't have an account? <Link to="/register" style={{textDecoration: "none"}}><span>Sign up</span></Link></h3>
                        </div>
                    </section>
                </div>
            </Styler>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    isFetching: reduxState.auth.isFetching,
    isAuthenticated: reduxState.auth.isAuthenticated,
    error: reduxState.auth.error
})

export default connect(mapStateToProps, { login })(Login)
