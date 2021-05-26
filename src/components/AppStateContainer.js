import React , { useState, useEffect } from 'react'
import { AppProvider } from '../provider/AppState'
import App from '../../App'
import { getTrending } from '../services/network/Api_services'

const AppStateContainer = () =>{

    const [trending, setTrending] = useState([])
    const [trendingTv, setTrendingTv] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        intApp()
    }, [])

    const intApp = async () =>{
        try {
            let { trendingMovies, trendingTv } = await getTrending()
            setTrendingMovies(trendingMovies)            
            setTrendingTv(trendingTv)            
        } catch (error) {
            console.log(error)
        }
    }


    const values = {
        trending, setTrending,
        trendingTv, setTrendingTv,
        trendingMovies,setTrendingMovies,
    }

    return(<AppProvider value={values}>
        <App />
    </AppProvider>)
}
export default AppStateContainer
