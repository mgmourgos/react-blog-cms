import ShowPostItem from './ShowPostItem'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { addPost, removePost, editPost } from '../../actions'
import { Component } from 'react'

const EditSinglePost = ({match, posts, onRemove, onEdit}) => {

        //define function for finding post with match.params.id
        const findById = id => post => post.id === id
        const findPostWithId = findById(match.params.id)

        var post = posts.find(findPostWithId)

        //if post not found in list, redirect to home page
        if (post === undefined) {
            return ( <Redirect to='/' /> )
        }

        var date = (new Date(post.date)).toLocaleDateString()

        let new_title = ''
        let new_content = ''

        return (
        <div className="post-item">
            <input autoFocus placeholder="Edit Post title..."
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            onEdit(new_title.value, new_content.value)
                        }
                    }}
                    defaultValue={post.title}
                    ref={input=>new_title=input}
                    className="edit-post-title">
            </input>
            <div className="post-info">Posted by {post.author} on {date}</div>
            <textarea placeholder="Edit Post content..."
                    defaultValue={post.content}
                    ref={input=>new_content=input}
                    className="edit-post-content">
            </textarea>

            <div onClick={onRemove} className="post-rm-btn">
                (Delete Post)
            </div>
            <div onClick={()=>onEdit(new_title.value, new_content.value)} className="post-edit-btn">
                (Save Changes)
            </div>
            <div className="post-btn"><a className="post-btn" href={'/posts/' + post.id}>
                (View Post)
            </a></div>
        </div>)
}

export const EditSinglePostContainer = connect(
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
)(EditSinglePost)
