const ShowPostItem = ({onRemove=f=>f, onEdit=f=>f, title, content, author, date, id}) =>
    <div className="post-item">
        <div className="post-title"><a className="post-title-link" href={'/posts/' + id}>{title}</a></div>
        <div className="post-info">Posted by {author} on {date}</div>
        <div className="post-content">{content}</div>
        <div onClick={onRemove} className="post-rm-btn">(delete post)</div>
        <div className="post-edit-btn start"><a className="post-btn" href={'/editpost/' + id}>(edit post)</a></div>
    </div>

export default ShowPostItem
