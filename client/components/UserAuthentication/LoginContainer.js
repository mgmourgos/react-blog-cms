import { connect } from 'react-redux'
import loginStyle from '../../styles/login.css'
import { Component } from 'react'
import { login } from '../../actions'

class LoginScreen extends Component {
    render () {
        let username = ''
        let password = ''
        return(
            <div className="register">
                <form onSubmit={ e =>{
                        e.preventDefault()
                        this.props.onLogin(username.value, password.value)
                        username.value = ''
                        password.value = ''
                        // this.props.history.push('/')
                    }}>
                    <div><input      placeholder="Username"
                                ref={input=>username=input}>
                    </input></div>
                    <div><input
                                placeholder="Password"
                                ref={input=>password=input}>
                    </input></div>
                    <button className="valid-button">Login</button>
                </form>
            </div>
        )
    }
}

export const LoginContainer = connect(
    null,
    dispatch => ({
        onLogin(username, password) {
            dispatch(login(username, password))
        }
    })
)(LoginScreen)
