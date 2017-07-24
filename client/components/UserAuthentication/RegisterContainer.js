import { connect } from 'react-redux'
import loginStyle from '../../styles/login.css'
import { PropTypes, Component } from 'react'
import { registerUser } from '../../actions'

class RegisterScreen extends Component {

    render() {
        let username = ''
        let password1 = ''
        let password2 = ''
        //const { store } = this.context
        return(
            <div className="register">
                <form onSubmit={ e =>{
                        e.preventDefault()
                        console.log('start')
                        this.props.onRegisterUser(username.value, password1.value)
                        //console.log(store.getState())
                        //this.props.history.push('/login')
                    }}>

                    <div>Username</div>
                    <input      placeholder = "Username"
                                ref={ input => username = input }>
                    </input>

                    <div>Password</div>
                    <input      type = "password"
                                placeholder = "Password"
                                ref={ input => password1 = input }>
                    </input>

                    <div>Re-Enter Password</div>
                    <input      type = "email"
                                placeholder = "Password"
                                ref={ input => password2 = input }>
                    </input>

                    <button> Register New Account </button>
                </form>
            </div>
        )
    }
}

// RegisterScreen.contextTypes = {
//     store: PropTypes.object
// }

export const RegisterContainer = connect(
    null,
    dispatch => ({
        onRegisterUser(username, password) {
            return dispatch(registerUser(username, password))
        }
    })
)(RegisterScreen)
