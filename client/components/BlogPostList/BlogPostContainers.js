import AddPostForm from './AddPostForm'
import ShowPostList from './ShowPostList'
import { connect } from 'react-redux'
import { addPost, removePost, editPost } from '../../actions'

export const AddPostContainer = connect(
    null,
    dispatch => ({
        onAdd(title, content) {
            dispatch(addPost(title, content))
        }
    })
)(AddPostForm)

export const PostListContainer = connect(
    state => ({
        posts: state.posts
    }),
    dispatch => ({
        onRemove(id) {
            dispatch(removePost(id))
        },
        onEdit(id, title, content) {
            dispatch(editPost(id, title, content))
        }
    })
)(ShowPostList)
