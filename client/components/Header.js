import { connect } from 'react-redux'
import { Component } from 'react'
import LoggedOutBar from './NavBar/LoggedOutBar'
import LoggedInBar from './NavBar/LoggedInBar'

class Header extends Component {
    render() {
        if (this.props.isLoggedIn)
            return(<LoggedInBar />)
        else
            return(<LoggedOutBar />)
    }
}

const HeaderContainer = connect(
    state => ({
        isLoggedIn: state.auth.isLoggedIn
    }),
    dispatch => ({
        onLogout() {
            dispatch(logout())
        }
    }),
    null,
    { pure: false } //Allows activeClassName for NavLinks to update
)(Header)

export default HeaderContainer
