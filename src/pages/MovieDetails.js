import { getMoviesByID } from "fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails=()=>{
    const {id} = useParams();
    const [movie,setMovie]=useState(null);
    

    useEffect(()=>{
        async function buBu(){
          try{
            const data = await getMoviesByID (id);
          setMovie(data);
          
          
          }
            catch(error){
                console.log(error)
            }
          }
          buBu();
    },[id]);

    console.log(movie);

    if (movie === null) {
        return;
      }
    
    const {
        title,
        original_title,
        poster_path,
        budget,
        genres,
        homepage,
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
    
    return(
        <main>
            <h2>{title}</h2>
            <img src='' alt=''/>
            <p>User score:%</p>
            <h3>Overview</h3>
            <p>description</p>
            <h4>Genres</h4>
            <p>Action</p>


        
        </main>
    )
}
export default MovieDetails;