import { getMoviesByID } from 'fetch';
import { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { StyledButton } from './StyledMovieDetails';
import { StyledMain } from 'pages/Home/StyledHome';

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

  const { title, poster_path, genres, release_date, vote_average, overview } =
    movie;
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
    <StyledMain>
      <StyledButton to={backButton.current}>Get back</StyledButton>
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
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </StyledMain>
  );
};
export default MovieDetails;
