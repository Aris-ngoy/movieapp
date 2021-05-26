import { API_BASE_URL, API_KEY } from '@env'
import axios from 'axios'

const base_fetch = async (param, extraParam) =>{
    const url = API_BASE_URL + `${param}?api_key=${API_KEY}${extraParam??""}`
    const response = await axios.get(url);
    return response;
}

export const getTrending = async () =>{
    const trendingTv = await base_fetch("trending/tv/week")
    const trendingMovies = await base_fetch("trending/movie/week")
    return { trendingTv : trendingTv.data, trendingMovies : trendingMovies.data }
}

export default base_fetch