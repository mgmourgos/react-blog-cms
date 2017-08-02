const ShowPostItem = ({onRemove=f=>f, onEdit=f=>f, title, content, author, date, id}) =>
    <div className="post-item">
        <div className="post-title"><a className="post-title-link" href={'/posts/' + id}>{title}</a></div>
        <div className="post-info">Posted by {author} on {date}</div>
        <div onClick={onEdit} className="post-content">{content}</div>
        <div onClick={onRemove} className="post-rm-btn">(delete post)</div>
        <div onClick={onEdit} className="post-edit-btn start">(edit post)</div>
    </div>

export default ShowPostItem
