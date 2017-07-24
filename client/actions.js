import C from './constants.js'
import { v4 } from 'uuid'
import fetch from 'isomorphic-fetch'

export const addPostPreFetch = (title, content) => ({
        type: C.ADD_POST,
        id: v4(),
        title: title,
        content: content
    })

export const addPost = (title, content) => {
    return dispatch => {

        //Perform expected result of the POST API request
        dispatch(addPostPreFetch(title, content))

        //API call to POST a new post with {title}
        return fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title: title, content: content}),
            headers: { "Content-Type": "application/json" }
        })
        .then(
            response => response,
            error => console.log('An error occured.', error)
        ).then(
            response => dispatch(fetchPosts())
        )
    }
}

export const removePostPreFetch = (id) => ({
        type: C.REMOVE_POST,
        id: id
    })

export const removePost = (id) => {
    return dispatch => {

        //Perform expected result of the DELETE API request
        dispatch(removePostPreFetch(id))

        //API call to delete post {id}
        return fetch('/api/posts/' + id, {
            method: 'DELETE'
        })
        .then(
            response => dispatch(fetchPosts()),
            error => console.log('An error occured.', error)
        )
    }
}

export const editPostPreFetch = (id, title, content) => ({
        type: C.EDIT_POST,
        id: id,
        title: title,
        content: content
    })

export const editPost = (id, title, content) => {
    return dispatch => {

        //Perform expected result of the PUT API request
        dispatch(editPostPreFetch(id, title, content))

        //API call to edit post {id}, with new title: {title}
        return fetch('/api/posts/' + id, {
                method: 'PUT',
                body: JSON.stringify({ title: title, id: id, content: content}),
                headers: { "Content-Type": "application/json" }
            })
            .then(
                response => dispatch(fetchPosts()),
                error => console.log('An error occured.', error)
            )
    }
}

//A thunk which will fetch+set the state of the psot list from the backend db
export const fetchPosts = () => {
    return dispatch => {
        return fetch('/api/posts')
            .then(
                response => response.json(),
                error => console.log('An error occured.', error)
            )
            .then(
                json => dispatch(setPosts(json))
            )
    }
}

export const setPosts = (posts) => ({
    type: C.SET_POSTS,
    posts: posts
})

//A thunk which will attempt to register a new user
export const registerUser = (username, password) => {
    return dispatch => {
        return fetch('/register', {
            method: 'POST',
            body: JSON.stringify({ username: username, psd: password}),
            headers: { "Content-Type": "application/json" }
        })
        .then(
            response => response,
            error => console.log('An error occured.', error)
        )
    }
}
