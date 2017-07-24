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
                {state.todos.map((todo,i) => {
                    if(todo.id === this.state.editing) {
                        return (
                        <EditPostItem
                            key={i}
                            title={todo.title}
                            content={todo.content}
                            onRemove={()=>this.props.onRemove(todo.id)}
                            onEdit={(new_title, new_content)=>this.editItem(new_title, new_content, todo.id)}>
                        </EditPostItem> )
                    } else {
                        return (
                        <ShowPostItem
                            key={i}
                            title={todo.title}
                            content={todo.content}
                            onRemove={()=>this.props.onRemove(todo.id)}
                            onEdit={()=>this.setEditingItem(todo.id)}>
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
