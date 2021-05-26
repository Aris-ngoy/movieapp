import React from 'react'
import {  SafeAreaView, View } from 'react-native'
import CircleButton from './CircleButton';
import { StyleService,  Text,  useStyleSheet } from '@ui-kitten/components'

const Header = () =>{

    const styles = useStyleSheet(themeStyles)

    return(<SafeAreaView>
        <View style={styles.Headers}>
            <Text style={styles.headerText} category="h4">Movie App</Text>
            <CircleButton 
                width={40} height={40} 
                iconHeight={25} 
                iconWidth={25}
                color="color-primary-transparent-200" 
                fill="black"
                iconName="bell-outline" />
            <CircleButton 
                width={40} height={40} 
                iconHeight={25} 
                iconWidth={25} 
                fill="black"
                iconName="lock-outline" />
        </View>
    </SafeAreaView>)
}

export default Header;

const themeStyles = StyleService.create({
    Headers : {
        flexDirection : 'row',
        paddingLeft : 15,
        padding : 10,
        alignItems : 'center',
        marginBottom : 10
    },
    headerText : {
        flex : 1,
    },
    mainLayout : {
        flex : 3,
        backgroundColor : 'white',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        width : '100%'
    }
})