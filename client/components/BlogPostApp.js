import { PostListContainer, AddPostContainer } from './BlogPostList/BlogPostContainers'
import { LoginContainer } from './UserAuthentication/LoginContainer'
import { RegisterContainer } from './UserAuthentication/RegisterContainer'
import { Switch, Route } from 'react-router-dom'

const BlogPostApp = () =>
    <div>
        <Switch>
            <Route exact path='/' component={PostListContainer}/>
            <Route path='/addpost' component={AddPostContainer}/>
            <Route path='/login' component={LoginContainer}/>
            <Route path='/register' component={RegisterContainer}/>
        </Switch>
    </div>

export default BlogPostApp
