import { PropTypes, Component } from 'react'
import ShowPostItem from './ShowPostItem'
import EditPostItem from './EditPostItem'

class ShowPostList extends Component {

    render() {
        const { store } = this.context
        const state = store.getState()
        return (
            <div>
                {state.posts.map((post,i) => {
                    var date = (new Date(post.date)).toLocaleDateString()
                    return (
                        <ShowPostItem
                            key={i}
                            id = {post.id}
                            title={post.title}
                            author={post.author}
                            date={date}
                            content={post.content}
                            onRemove={()=>this.props.onRemove(post.id)}
                            onEdit={()=>this.setEditingItem(post.id)}>
                        </ShowPostItem> )
                })}
            </div>
        )//return
    }//render
}

ShowPostList.contextTypes = {
    store: PropTypes.object
}

export default ShowPostList
