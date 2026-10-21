// ============================================
// COMPONENTE: Tweet.jsx
// Representa un tweet individual
// ============================================

function Tweet({ tweet, onLike, onDelete, currentUser }) {
    const esAutor = currentUser && tweet.author === currentUser.username;

    return (
        <div className="tweet">
            <div className="tweet-header">
                <span className="tweet-author">@{tweet.author}</span>
                <span className="tweet-date">
                    {new Date(tweet.createdAt).toLocaleString("es-MX")}
                </span>
            </div>
            <p className="tweet-text">{tweet.text}</p>
            <div className="tweet-actions">
                <button className="btn-like" onClick={() => onLike(tweet.id)}>
                    ❤ {tweet.likes}
                </button>
                {esAutor && (
                    <button className="btn-delete" onClick={() => onDelete(tweet.id)}>
                        🗑️
                    </button>
                )}
            </div>
        </div>
    );
}

export default Tweet;