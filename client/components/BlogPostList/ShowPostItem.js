import { Component } from 'react'
import { connect } from 'react-redux'

const ShowPostItem = ({onRemove=f=>f, onEdit=f=>f, title, content, author, date, id, isLoggedIn}) =>
    <div className="post-item">
        <div className="post-title"><a className="post-title-link" href={'/posts/' + id}>{title}</a></div>
        <div className="post-info">Posted by {author} on {date}</div>
        <div className="post-content">{content}</div>

        {/* show edit and delete buttons only when logged in */}
        { isLoggedIn &&
            <div>
                <div onClick={onRemove} className="post-rm-btn">
                    (delete post)
                </div>
                <div className="post-edit-btn start">
                    <a className="post-btn" href={'/editpost/' + id}>
                        (edit post)
                    </a>
                </div>
            </div>
        }
    </div>

const ShowPostItemContainer = connect(
    state => ({
        isLoggedIn: state.auth.isLoggedIn
    })
)(ShowPostItem)

 export default ShowPostItemContainer
