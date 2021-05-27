import { API_BASE_URL, API_KEY } from '@env'
import axios from 'axios'

const base_fetch = async (param, extraParam = "") =>{
    const url = API_BASE_URL + `${param}?api_key=${API_KEY}${extraParam}`
    const response = await axios.get(url);
    return response;
}

export const getTrending = async () =>{
    const resultsTv = await base_fetch("trending/tv/week")
    const resultsMovie = await base_fetch("trending/movie/week")
    let data = {
        trendingTv : resultsTv.data.results,
        trendingMovies : resultsMovie.data.results
    }
    return data;
}

export const getTvonAirToday = async () =>{
    const { data } = await base_fetch("tv/airing_today", "&language=en-US&page=1")
    return { airingToday : data.results };
}

export default base_fetch