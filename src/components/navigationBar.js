import React from 'react'
import { Icon, TopNavigation, TopNavigationAction, StyleService, useStyleSheet } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native';



  
const NavigationBar = () =>{

    const navigation = useNavigation()
    const styles = useStyleSheet(themeStyles)

    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back'/>
    );

    const BackAction = () => (
        <TopNavigationAction onPress={()=> navigation.goBack()} icon={BackIcon}/>
    );

    return(
        <TopNavigation style={styles.root} accessoryLeft={BackAction}  />
    )
}

export default NavigationBar

const themeStyles = StyleService.create({
    root : {
        backgroundColor : 'transparent'
    }
})