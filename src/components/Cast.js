import { getCast } from "fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Cast=()=>{

    const [cast, setCast] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await getCast(id);
        if (data.cast.length !== 0) {
          setCast(data.cast);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, []);
  
    return(
      <>
        {cast ? (<ul>
          {cast.map((actor)=>(
            <li key={actor.id}>
              <img src={`http://image.tmdb.org/t/p/w200${actor.profile_path}`} alt=''/>
              <p>{actor.name}</p>
              <p>character:{actor.character}</p>
            </li>
          )

          )}
        </ul>):(<div>нема</div>)}
        </>
    )
}