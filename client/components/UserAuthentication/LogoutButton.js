import { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions'
import { Redirect } from 'react-router'

class LogoutButton extends Component {
    render() {
        return(
            <a onClick={this.props.onLogout}>
                Logout from {this.props.auth.username}
            </a>
        )
    }
}

const LogoutButtonContainer = connect(
    state => ({
        auth: state.auth
    }),
    dispatch => ({
        onLogout() {
            dispatch(logout())
        }
    })
)(LogoutButton)

export default LogoutButtonContainer
