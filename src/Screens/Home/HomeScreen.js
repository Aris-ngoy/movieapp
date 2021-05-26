import React from 'react'
import {  View } from 'react-native'
import { StyleService,  useStyleSheet } from '@ui-kitten/components'
import CircleButton from '../../components/CircleButton';

const HomeScreen = () =>{

    const styles = useStyleSheet(themeStyles)
    
    return(<View style={styles.root}>   
        <View style={[styles.sideMenu]}>
            <CircleButton />
            <CircleButton iconName="film-outline" />
            <CircleButton iconName="tv-outline" />
        </View>
    </View>)
}

export default HomeScreen

const themeStyles = StyleService.create({
    root : {
        flex : 1,
        flexDirection : 'row'
    },
    sideMenu : {
        width : 80,
        flexDirection : 'column',
        justifyContent : 'center',
        backgroundColor : 'color-primary-500',
        alignItems : 'center'
    }
})