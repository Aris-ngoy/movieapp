import React, {useContext } from 'react'
import { ScrollView, View } from 'react-native'
import AppContext from '../../../provider/AppState'
import { Text, StyleService, useStyleSheet } from '@ui-kitten/components'
import TrendingComponent from '../../../components/trendingTv'

const HomeView = () =>{

    const styles = useStyleSheet(themeStyles)

    const context = useContext(AppContext)
    const { trendingTv, trendingMovies, airingTvToday } = context
    
    return(<View style={styles.root}>
        <ScrollView>
            <Text style={styles.title} category="h5">On Air Today</Text>
            <TrendingComponent title="Playing Today" items={airingTvToday} />
            <Text style={styles.title} category="h5">Trending</Text>
            <TrendingComponent title="Tv shows" items={trendingTv} />
            <TrendingComponent title="Movies" displaytitle={true} items={trendingMovies} />
            <View style={{ height : 50 }} />
        </ScrollView>
    </View>)
}
export default HomeView;


const themeStyles = StyleService.create({
    root : {
        padding : 0,
        flexDirection : 'column',
        height : '100%',
        width : '100%',
    },
    title : {
        marginLeft : 10,
        marginTop : 10,
        marginBottom : 5
    }
    
})