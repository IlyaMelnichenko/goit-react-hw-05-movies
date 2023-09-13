import axios from "axios";
const API_KEY = 'e3a5006031fb15b51def9b2796c1eb21';
axios.defaults.baseURL='https://api.themoviedb.org/3/movie/'


export const getMovies=async ()=>{
 const response =await axios(`top_rated?api_key=${API_KEY}`);
 return response.data;
}

export const getMoviesByID = async(id)=>{
 const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`) ;
 return response.data;  
}

export const getReviews = async(id)=>{
    const response=await axios(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`);
    return response.data;
}

export const getCast = async(id)=>{
    const response=await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);
    return response.data;
}