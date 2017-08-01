import { PostListContainer, AddPostContainer } from './BlogPostList/BlogPostContainers'
import { LoginContainer } from './UserAuthentication/LoginContainer'
import { RegisterContainer } from './UserAuthentication/RegisterContainer'

import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Component } from 'react'
import { Redirect } from 'react-router'
// const BlogPostApp = () =>
//     <div>
//         <Switch>
//             <Route exact path='/' component={PostListContainer}/>
//             <Route path='/addpost' component={AddPostContainer}/>
//             <Route path='/login' component={LoginContainer}/>
//             <Route path='/register' component={RegisterContainer}/>
//         </Switch>
//     </div>
class BlogPostApp extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return (
                <div>
                    <Switch>
                        <Redirect from='/login' to='/'/>
                        <Redirect from='/register' to='/'/>
                        <Route exact path='/addpost' component={AddPostContainer}/>
                        <Route exact path='/' component={PostListContainer}/>
                        <Redirect from='*' to='/'/>//redirect any non-existant routes to '/'
                    </Switch>
                </div>
            )
        } else {
            return (
                <div>
                    <Switch>
                        <Route exact path='/register' component={RegisterContainer}/>
                        <Route exact path='/login' component={LoginContainer}/>
                        <Redirect from='/addpost' to='/login'/>
                        <Route exact path='/' component={PostListContainer}/>
                        <Redirect from='/*' to='/'/>//redirect any non-existant routes to '/'
                    </Switch>
                </div>
            )
        }
    }
}


    const BlogPostAppContainer = connect(
        state => ({
            isLoggedIn: state.auth.isLoggedIn
        }),
        null,
        null,
        { pure: false } //Allows activeClassName for NavLinks to update
    )(BlogPostApp)

export default BlogPostAppContainer
