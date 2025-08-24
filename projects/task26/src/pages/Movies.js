import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using dummyjson movies API
    axios.get('https://dummyjson.com/movies')
      .then(res => {
        setMovies(res.data.movies || []);
      })
      .catch(err => {
        console.error('Failed to fetch movies', err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div>
      <h2>Movies</h2>
      <div className="row">
        {movies.map(movie => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <div className="card h-100">
              <img src={movie.poster || 'https://via.placeholder.com/400x250'} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </h5>
                <p className="card-text text-truncate">{movie.director || movie.genres?.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
