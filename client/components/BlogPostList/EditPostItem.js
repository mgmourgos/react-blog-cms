const EditPostItem = ({onRemove=f=>f, onEdit=f=>f, title, content}) => {
    let new_title = ''
    let new_content = ''
    return (
        <div className="todo-item edit">
            <input autoFocus placeholder="Edit Post title..."
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            onEdit(new_title.value, new_content.value)
                        }
                    }}
                    defaultValue={title}
                    ref={input=>new_title=input}></input>
            <textarea placeholder="Edit Post content..."
                    defaultValue={content}
                    ref={input=>new_content=input}></textarea>
            <div onClick={onRemove} className="todo-rm-btn">X</div>
            <div onClick={()=>onEdit(new_title.value, new_content.value)} className="todo-edit-btn">✓</div>
        </div>
    )//return
}

export default EditPostItem
