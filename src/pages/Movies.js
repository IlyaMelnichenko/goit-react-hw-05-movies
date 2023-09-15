import { Searchlist } from 'components/Searchlist';
import { getMovieByQuery } from 'fetch';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(null);
  const onSearch = e => {
    e.preventDefault();
    const newQuery = e.target.elements.search.value;
    setQuery(newQuery);
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchSearchMovie() {
      try {
        const data = await getMovieByQuery(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSearchMovie();
  }, [query]);

  return (
    <main>
      <form onSubmit={onSearch}>
        <input name="search" />
        <button type="submit">Search</button>
      </form>
      <hr />

      {movies.length !== 0 && (
        <section>
          <ul>
            {movies.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                    <Searchlist movie={movie} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </main>
  );
};
export default Movies;
