const ShowPostItem = ({onRemove=f=>f, onEdit=f=>f, title, content}) =>
    <div className="todo-item">
        <center><div onClick={onEdit} className="todo-title">{title}</div></center>
        <div onClick={onRemove} className="todo-rm-btn">X</div>
        <div onClick={onEdit} className="todo-edit-btn start">✎</div>
        <div onClick={onEdit} className="todo-content">{content}</div>
    </div>

export default ShowPostItem
