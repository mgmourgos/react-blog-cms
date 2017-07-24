const ShowPostItem = ({onRemove=f=>f, onEdit=f=>f, title, content}) =>
    <div className="post-item">
        <center><div onClick={onEdit} className="post-title">{title}</div></center>
        <div onClick={onRemove} className="post-rm-btn">X</div>
        <div onClick={onEdit} className="post-edit-btn start">✎</div>
        <div onClick={onEdit} className="post-content">{content}</div>
    </div>

export default ShowPostItem
