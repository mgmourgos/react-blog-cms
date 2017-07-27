import { connect } from 'react-redux'
//import { PropTypes, Component } from 'react'
import { registerUser } from '../../actions'
import RegisterUserValidationForm from './RegisterUserValidationForm'

export const RegisterContainer = connect(
    null,
    dispatch => ({
        onSubmit(values) {
            return console.log(dispatch(registerUser(values)))
        }
    })
)(RegisterUserValidationForm)
