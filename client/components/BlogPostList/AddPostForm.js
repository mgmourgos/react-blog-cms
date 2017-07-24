import { PropTypes, Component } from 'react'

class AddPostForm extends Component {

    constructor(props) {
        super(props)
        //this.state = props.history
    }

    render () {
        let title = ''
        let content = ''
        const {store} = this.context
        const state = store.getState()
        return (
            <div className="todo-add-form">
                <form onSubmit={ e =>{
                        e.preventDefault()
                        this.props.onAdd(title.value, content.value)
                        title.value = ''
                        content.value = ''
                        this.props.history.push('/form-complete')
                    }}>
                    <input      placeholder="Add title here..."
                                ref={input=>title=input}>
                    </input>
                    <textarea   className="textArea"
                                placeholder="Add content here..."
                                ref={input=>content=input}>
                    </textarea>
                    <button>Add Blog Post</button>
                </form>
            </div>
        )
    }
}

AddPostForm.contextTypes = {
    store: PropTypes.object
}

export default AddPostForm
