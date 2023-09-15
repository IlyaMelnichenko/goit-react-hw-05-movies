import { TrendingList } from 'components/TrendingList';
import { useEffect, useState } from 'react';
import { getMovies } from 'fetch';
import { Link } from 'react-router-dom';
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const creatMarkap = async () => {
      const data = await getMovies();
      const array = await data.results.map(({ title, id }) => {
        return { title, id };
      });
      setMovies(array);
    };
    creatMarkap();
  });
  return (
    <main>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <TrendingList movie={movie} />{' '}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
