import { connect } from 'react-redux'
//import { PropTypes, Component } from 'react'
import { registerUser } from '../../actions'
import RegisterUserValidationForm from './RegisterUserValidationForm'

export const RegisterContainer = connect(
    null,
    dispatch => ({
        onSubmit(username, password) {
            return dispatch(registerUser(username, password))
        }
    })
)(RegisterUserValidationForm)
