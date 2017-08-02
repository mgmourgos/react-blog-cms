import ShowPostItem from './ShowPostItem'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { addPost, removePost, editPost } from '../../actions'
import { Component } from 'react'

const ShowSinglePost = ({match, posts, onRemove}) => {

        //define function for finding post with match.params.id
        const findById = id => post => post.id === id
        const findPostWithId = findById(match.params.id)

        var post = posts.find(findPostWithId)

        //if post not found in list, redirect to home page
        if (post === undefined) {
            return ( <Redirect to='/' /> )
        }

        var date = (new Date(post.date)).toLocaleDateString()

        return <ShowPostItem
            title={post.title}
            author={post.author}
            id={post.id}
            date={date}
            content={post.content}
            onRemove={()=>onRemove(post.id)}
            onEdit={()=>this.setEditingItem(post.id)}>
        </ShowPostItem>
}

export const ShowSinglePostContainer = connect(
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
)(ShowSinglePost)
