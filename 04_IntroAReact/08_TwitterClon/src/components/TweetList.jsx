// ============================================
// COMPONENTE: TweetList.jsx
// Lista de tweets
// ============================================

import Tweet from "./Tweet";

function TweetList({ tweets, onLike, onDelete, currentUser }) {
    if (tweets.length === 0) {
        return (
            <div className="empty-timeline">
                <p>🐦 No hay tweets aún. ¡Sé el primero en publicar algo!</p>
            </div>
        );
    }

    return (
        <div className="tweet-list">
            {tweets.map((tweet) => (
                <Tweet
                    key={tweet.id}
                    tweet={tweet}
                    onLike={onLike}
                    onDelete={onDelete}
                    currentUser={currentUser}
                />
            ))}
        </div>
    );
}

export default TweetList;