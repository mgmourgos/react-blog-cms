import { PostListContainer, AddPostContainer }  from './BlogPostList/BlogPostContainers'
import { ShowSinglePostContainer } from './BlogPostList/ShowSinglePost'
import { EditSinglePostContainer } from './BlogPostList/EditSinglePost'
import { LoginContainer } from './UserAuthentication/LoginContainer'
import { RegisterContainer } from './UserAuthentication/RegisterContainer'

import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Component } from 'react'
import { withRouter } from 'react-router'
import { PrivateRoute } from './PrivateRoute'

class BlogPostApp extends Component {
    render () {
        const { isLoggedIn } = this.props
        return <div className="blog-body"><Switch>
            {/* Routes that are no-auth-only routes */}
            <PrivateRoute isAuth={!isLoggedIn} path='/login' redirect='/' component={LoginContainer} />
            <PrivateRoute isAuth={!isLoggedIn} path='/register' redirect='/' component={RegisterContainer} />

            {/* Routes that are auth-only routes */}
            <PrivateRoute isAuth={isLoggedIn} path='/addpost' redirect='/login' component={AddPostContainer} />
            <PrivateRoute isAuth={isLoggedIn} path='/posts/:id' redirect='/login' component={ShowSinglePostContainer}/>
            <PrivateRoute isAuth={isLoggedIn} path='/editpost/:id' redirect='/login' component={EditSinglePostContainer}/>

            <Route exact path='/' component={PostListContainer}/>
            <Redirect from='/*' to='/'/>
        </Switch></div>
    }
}

const BlogPostAppContainer = withRouter(connect(
    state => ({
        isLoggedIn: state.auth.isLoggedIn
    })
)(BlogPostApp))

export default BlogPostAppContainer
