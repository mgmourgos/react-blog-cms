import { connect } from 'react-redux'
import loginStyle from '../../styles/login.css'

const LoginScreen = () => {
    return(
        <div className="login">
            Login here
        </div>
    )
}

export const LoginContainer = connect(
    null,
    dispatch => ({
        onLogin(username, password) {
            //dispatch(addPost(title, content))
        }
    })
)(LoginScreen)

const RegisterScreen = () => {
    return(
        <div className="login">
            Register here
        </div>
    )
}

export const RegisterContainer = connect(
    null,
    dispatch => ({
        onNewAccount(username, password, email) {
            //dispatch(addPost(title, content))
        }
    })
)(RegisterScreen)
