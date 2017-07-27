import { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions'
import { Redirect } from 'react-router'

//A component for showing if logged in or not
class ShowLogin extends Component {
    render() {
        const {store} = this.context
        const state = store.getState()

        if (state.auth.isLoggedIn) {
            return(
                <a href='#' onClick={this.props.onLogout}>
                    Logout from {state.auth.username}
                    <Redirect to="/"/>
                </a >
            )
        } else {
            return(
                <a>
                    Not Logged In
                </a>
            )
        }
    }
}

export const ShowLoginContainer = connect(
    state => ({
        auth: state.auth
    }),
    dispatch => ({
        onLogout() {
            dispatch(logout())
        }
    })
)(ShowLogin)

ShowLogin.contextTypes = {
    store: PropTypes.object
}

export default ShowLoginContainer
