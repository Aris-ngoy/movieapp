import React , { useState, useEffect } from 'react'
import { AppProvider } from '../provider/AppState'
import App from '../../App'
import { getTrending, getTvonAirToday } from '../services/network/Api_services'

const AppStateContainer = () =>{
    const [airingTvToday, setairingTvToday] = useState([])
    const [trendingTv, setTrendingTv] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        intApp()
    }, [])

    const intApp = async () =>{
        try {
            let { airingToday } = await getTvonAirToday()
            setairingTvToday(airingToday)            
            let { trendingMovies, trendingTv } = await getTrending()
            setTrendingMovies(trendingMovies)            
            setTrendingTv(trendingTv)
        } catch (error) {
            console.log(error)
        }
    }


    const values = {
        trendingTv, setTrendingTv,
        trendingMovies,setTrendingMovies,
        airingTvToday, setairingTvToday
    }

    return(<AppProvider value={values}>
        <App />
    </AppProvider>)
}
export default AppStateContainer
