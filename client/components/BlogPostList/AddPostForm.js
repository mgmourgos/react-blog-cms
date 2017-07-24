import { Component } from 'react'

class AddPostForm extends Component {

    render () {
        let title = ''
        let content = ''
        return (
            <div className="post-add-form">
                <form onSubmit={ e =>{
                        e.preventDefault()
                        this.props.onAdd(title.value, content.value)
                        title.value = ''
                        content.value = ''
                        this.props.history.push('/')
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

export default AddPostForm
