// ============================================
// PÁGINA: Home.jsx
// Línea de tiempo principal
// ============================================

import { useState, useEffect } from "react";
import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";
import { useAuth } from "../context/AuthContext";

function Home() {
    const { user } = useAuth();
    const [tweets, setTweets] = useState([]);

    // Cargar tweets desde localStorage al montar
    useEffect(() => {
        const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
        setTweets(storedTweets);
    }, []);

    // Guardar tweets en localStorage cada vez que cambian
    useEffect(() => {
        localStorage.setItem("tweets", JSON.stringify(tweets));
    }, [tweets]);

    const addTweet = (text) => {
        if (!user) return;

        const newTweet = {
            id: Date.now(),
            text,
            author: user.username,
            createdAt: new Date().toISOString(),
            likes: 0,
        };

        setTweets([newTweet, ...tweets]);
    };

    const likeTweet = (id) => {
        setTweets(
            tweets.map((tweet) =>
                tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
            )
        );
    };

    const deleteTweet = (id) => {
        if (confirm("¿Eliminar este tweet?")) {
            setTweets(tweets.filter((t) => t.id !== id));
        }
    };

    return (
        <div className="home-page">
            <h2>🏠 Inicio</h2>
            <p className="bienvenida">
                Hola, <strong>@{user.username}</strong>. ¿Qué está pasando?
            </p>

            <TweetForm onAddTweet={addTweet} />

            <h3 className="timeline-title">Línea de tiempo</h3>
            <TweetList
                tweets={tweets}
                onLike={likeTweet}
                onDelete={deleteTweet}
                currentUser={user}
            />
        </div>
    );
}

export default Home;