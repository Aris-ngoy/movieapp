import React, {useContext } from 'react'
import { View, Text } from 'react-native'
import AppContext from '../../../provider/AppState'

const HomeView = () =>{
    const context = useContext(AppContext)
    const { trendingTv } = context
    let trendTvList = []
    if(trendingTv.results != undefined){
        for(const item of trendingTv.results) {
            console.log(item)
            trendTvList.push(item)
        } 
    }   
    
    return(<View>
        <Text>{
            `${trendingTv}`
        }</Text>
    </View>)
}
export default HomeView;