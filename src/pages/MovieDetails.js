import { getMoviesByID } from 'fetch';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backButton = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function buBu() {
      try {
        const data = await getMoviesByID(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    buBu();
  }, [id]);

  console.log(movie);

  if (movie === null) {
    return;
  }

  const {
    title,
    poster_path,
    genres,
    release_date,
    vote_average,
    overview,
  } = movie;
  const tags =
    genres &&
    genres.map(tag => (
      <li key={tag.id}>
        <p>{tag.name}</p>
      </li>
    ));
  const img = `http://image.tmdb.org/t/p/w500${poster_path}`;
  const data = release_date.slice(0, 4);
  const score = Math.round(vote_average * 10);
  return (
    <main>
      <Link to={backButton.current} >Get back</Link>
      <h2>
        {title}({data})
      </h2>
      <img src={img} alt="" />
      <p>User score:{score}%</p>
      <h3>Overiew</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <ul>{tags}</ul>
      <p>Addinitional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </main>
  );
};
export default MovieDetails;
