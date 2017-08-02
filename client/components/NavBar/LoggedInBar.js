import { NavLink } from 'react-router-dom'
import { Component } from 'react'
import headerStyles from '../../styles/header.css'
import { connect } from 'react-redux'
import { logout } from '../../actions'

class LoggedInBar extends Component {
    render() {
        return(
        <div className="nav-bar">
            <ul>
                <li className="nav-item">
                    <NavLink exact activeClassName="activeLink" to='/'>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="activeLink" to='/addpost'>
                        Add Post
                    </NavLink>
                </li>
                <li className="nav-item-right">
                    <a className="nav-button" onClick={this.props.onLogout}>
                        Logout
                    </a>
                </li>
                <li className=" nav-item-right">
                    <div className="nav-text">Welcome, {this.props.auth.username}!</div>
                </li>
            </ul>
        </div>
        )
    }
}

const LoggedInBarContainer = connect(
    state => ({
        auth: state.auth
    }),
    dispatch => ({
        onLogout() {
            dispatch(logout())
        }
    })
)(LoggedInBar)

export default LoggedInBarContainer
