import loginStyle from '../../styles/login.css'
import { reduxForm, Field } from 'redux-form'
import { PropTypes, Component } from 'react'
import renderField from './RenderField'
import fetch from 'isomorphic-fetch'

class RegisterUserForm extends Component {

    render() {
        const { handleSubmit, pristine, reset, submitting, valid, error } = this.props;
        return(
            <div className="register">
                <form onSubmit={ handleSubmit }>

                    <Field      label = "Username"
                                placeholder = "Username"
                                name = "username"
                                component = {renderField}
                                type="text">
                    </Field>
                    <Field      label = "Password"
                                placeholder = "Password"
                                name = "password1"
                                component = {renderField}
                                type = "password">
                    </Field>
                    <Field      label = "Re-Enter Password"
                                placeholder = "Password"
                                name = "password2"
                                component = {renderField}
                                type = "password">
                    </Field>

                    {!valid &&
                    <button className="invalid-button" type="submit" disabled={submitting}>
                        Register New Account
                    </button>
                    }
                    {valid &&
                    <button className="valid-button" type="submit" disabled={submitting}>
                        Register New Account
                    </button>
                    }
                </form>
            </div>
        )
    }
}

const validate = values => {
    const errors = {}
    if(!values.username) {
        errors.username = "Username Required"
    }
    if(!values.password1) {
        errors.password1 = "Password Required"
    }
    if(!values.password2) {
        errors.password2 = "Password Required"
    }
    if(values.password1 && values.password2 && values.password1 != values.password2){
        errors.password2 = "Passwords don't match"
    }
    return errors
}

const asyncValidate = ( values, dispatch ) => {
    return fetch('/api/users/' + values.username)
    .then(response => response.json())
    .then(response => {
            if (response.errors) {
                throw response.errors
            }
        }
    )
}

export default reduxForm({
    form: "registerUser",
    validate,
    asyncValidate,
    asyncBlurFields: ['username']
})(RegisterUserForm)
