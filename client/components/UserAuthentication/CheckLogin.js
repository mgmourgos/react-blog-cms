import { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { isLoggedIn } from '../../actions'

//A component for checking if logged in or not
class CheckLogin extends Component {
    render() {
        const {store} = this.context
        const state = store.getState()

        if (state.auth.isLoggedIn) {
            return(
                <a href='#' onClick={this.props.checkLogin}>
                    username={state.auth.username}
                </a >
            )
        } else {
            return(
                <a onClick={this.props.checkLogin}>
                    Check if logged in  
                    username={state.auth.username}
                </a>
            )
        }
    }
}

export const CheckLoginContainer = connect(
    state => ({
        auth: state.auth
    }),
    dispatch => ({
        checkLogin() {
            dispatch(isLoggedIn())
        }
    })
)(CheckLogin)

CheckLogin.contextTypes = {
    store: PropTypes.object
}

export default CheckLoginContainer
