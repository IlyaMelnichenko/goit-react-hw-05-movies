import axios from "axios";
const API_KEY = 'e3a5006031fb15b51def9b2796c1eb21';
axios.defaults.baseURL='https://api.themoviedb.org/3/movie/top_rated'
export const getMovies=async ()=>{
 const response =await axios(`?api_key=${API_KEY}`);
 return response.data;
}