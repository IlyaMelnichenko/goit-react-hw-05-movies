import {  Route, Routes } from "react-router-dom";
import Home  from "../pages/Home";
import Movies from "../pages/Movies";
import { StyledNav,Link } from "./Styledapp";
import  MovieDetails  from "pages/MovieDetails";



export const App = () => {

  return (
    <div>
      <header>
        <StyledNav>
          <Link to='/'>Home</Link>
          <Link to='/movies'>Movies</Link>
        </StyledNav>

      </header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/movies/:id' element={<MovieDetails/>}></Route>
      </Routes>
    </div>
  );
};
