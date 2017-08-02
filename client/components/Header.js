import { connect } from 'react-redux'
import { Component } from 'react'
import LoggedOutBar from './NavBar/LoggedOutBar'
import LoggedInBar from './NavBar/LoggedInBar'
import { withRouter } from 'react-router'

class Header extends Component {
    render() {
        if (this.props.isLoggedIn)
            return(<LoggedInBar curPath={this.props.location.pathname} />)
        else
            return(<LoggedOutBar />)
    }
}

const HeaderContainer = withRouter(connect(
    state => ({
        isLoggedIn: state.auth.isLoggedIn
    }),
    dispatch => ({
        onLogout() {
            dispatch(logout())
        }
    })
)(Header) )

export default HeaderContainer
