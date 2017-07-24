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
