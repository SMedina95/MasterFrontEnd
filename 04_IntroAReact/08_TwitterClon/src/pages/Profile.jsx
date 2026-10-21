// ============================================
// PÁGINA: Profile.jsx (RUTA PROTEGIDA)
// Perfil del usuario autenticado
// ============================================

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import TweetList from "../components/TweetList";

function Profile() {
    const { user } = useAuth();
    const [misTweets, setMisTweets] = useState([]);

    useEffect(() => {
        const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
        setMisTweets(storedTweets.filter((t) => t.author === user.username));
    }, [user]);

    const likeTweet = (id) => {
        const allTweets = JSON.parse(localStorage.getItem("tweets")) || [];
        const updated = allTweets.map((t) =>
            t.id === id ? { ...t, likes: t.likes + 1 } : t
        );
        localStorage.setItem("tweets", JSON.stringify(updated));
        setMisTweets(updated.filter((t) => t.author === user.username));
    };

    const deleteTweet = (id) => {
        if (!confirm("¿Eliminar este tweet?")) return;

        const allTweets = JSON.parse(localStorage.getItem("tweets")) || [];
        const updated = allTweets.filter((t) => t.id !== id);
        localStorage.setItem("tweets", JSON.stringify(updated));
        setMisTweets(updated.filter((t) => t.author === user.username));
    };

    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-avatar">{user.username.charAt(0).toUpperCase()}</div>
                <div>
                    <h2>@{user.username}</h2>
                    <p className="profile-info">
                        Miembro desde: {new Date(user.loginAt).toLocaleDateString("es-MX")}
                    </p>
                </div>
            </div>

            <div className="profile-stats">
                <div className="stat">
                    <span className="stat-number">{misTweets.length}</span>
                    <span className="stat-label">Tweets</span>
                </div>
                <div className="stat">
                    <span className="stat-number">
                        {misTweets.reduce((acc, t) => acc + t.likes, 0)}
                    </span>
                    <span className="stat-label">Likes recibidos</span>
                </div>
            </div>

            <h3 className="timeline-title">Mis Tweets</h3>
            <TweetList
                tweets={misTweets}
                onLike={likeTweet}
                onDelete={deleteTweet}
                currentUser={user}
            />
        </div>
    );
}

export default Profile;