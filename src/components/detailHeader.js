import React from 'react'
import { StyleService, useStyleSheet  } from '@ui-kitten/components'
import { View, useWindowDimensions } from 'react-native'

const DetailHeader = ({ children, color }) =>{
    const { height, width } = useWindowDimensions()
    const styles = useStyleSheet(themeStyles)
    
    return(<View style={[styles.root, { height : height * .5, backgroundColor : color }]}>
        {children}
    </View>)
}

export default DetailHeader

const themeStyles = StyleService.create({
    root : {
        height : '40%',
        borderBottomRightRadius : 70,
        borderBottomLeftRadius : 70
    }
})