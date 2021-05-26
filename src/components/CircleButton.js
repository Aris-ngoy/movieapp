import React from 'react'
import { StyleService,  useStyleSheet, useTheme,Icon } from '@ui-kitten/components'
import {  TouchableOpacity, View } from 'react-native'

const CircleButton = (props) =>{

    const styles = useStyleSheet(themeStyles)
    const theme  =  useTheme()

    const { width, height, fill, iconName, iconWidth, iconHeight, color } = props

    return(<TouchableOpacity activeOpacity={.5} onPress={()=>{  console.log("Pressed !") }}>
        <View style={[styles.root, { width : width, height : height, backgroundColor : theme[color] }]}>
            <Icon fill={fill} 
                style={{ width : iconWidth, height : iconHeight }} 
                name={iconName} />
        </View>
    </TouchableOpacity>)
}

export default CircleButton

CircleButton.defaultProps={
    width : 50, height : 50,
    fill : 'white', 
    iconName : 'home-outline', 
    iconWidth : 30, 
    iconHeight : 30,
    color : 'color-primary-400' 
}

const themeStyles = StyleService.create({
    root : {
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 1000,
        marginLeft : 10,
        marginRight : 10,
        marginBottom : 5,
        marginTop : 5
    }
})