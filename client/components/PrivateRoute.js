import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'

export const PrivateRoute = ({isAuth, component, path, redirect, ...rest}) => {
    if( isAuth ) {
        return(<Route exact path={path} component={component} {...rest}/>)
    } else {
        return(<Redirect from={path} to={redirect} />)
    }
}
