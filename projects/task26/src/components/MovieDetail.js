import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.poster || 'https://via.placeholder.com/600x350'} alt={movie.title} className="img-fluid my-3" />
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Genres:</strong> {movie.genres?.join(', ')}</p>
      <p><strong>Plot:</strong> {movie.plot || movie.description}</p>
    </div>
  );
}

export default MovieDetail;
