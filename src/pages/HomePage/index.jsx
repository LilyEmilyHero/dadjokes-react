import { Jokes } from '../../components/Jokes';
import './style.css';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [jokesList, setJokesList] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/Czechitas-podklady-WEB/daweb-test/deploy/jokes.json',
      );
      const data = await response.json();
      setJokesList(data);
    };

    fetchJokes();
  }, []);

  return (
    <div className="container">
      {jokesList.map((joke) => (
        <Jokes
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
