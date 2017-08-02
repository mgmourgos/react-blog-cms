import { PropTypes, Component } from 'react'
import ShowPostItem from './ShowPostItem'
import EditPostItem from './EditPostItem'

class ShowPostList extends Component {

    constructor(props) {
        super(props)
        this.state = {editing: ""}
        this.setEditingItem=this.setEditingItem.bind(this)
        this.editItem=this.editItem.bind(this)
    }

    //set the id of the item currently being edited
    setEditingItem(id) {
        this.setState({editing: id})
    }

    //dispatch an item edit
    //set the editing item to no id
    editItem(new_title, new_content, id) {
        this.props.onEdit(id, new_title, new_content)
        this.setEditingItem("")
    }

    render() {
        const { store } = this.context
        const state = store.getState()

        return (
            <div>
                {state.posts.map((post,i) => {
                    var date = (new Date(post.date)).toLocaleDateString()
                    if(post.id === this.state.editing) {

                        return (
                        <EditPostItem
                            key={i}
                            id = {post.id}
                            title={post.title}
                            author={post.author}
                            date={post.date}
                            content={post.content}
                            onRemove={()=>this.props.onRemove(post.id)}
                            onEdit={(new_title, new_content)=>this.editItem(new_title, new_content, post.id)}>
                        </EditPostItem> )
                    } else {
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
                    }
                })}
            </div>
        )//return
    }//render
}

ShowPostList.contextTypes = {
    store: PropTypes.object
}

export default ShowPostList
