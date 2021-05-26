import React, { useState } from 'react'
import {  View } from 'react-native'
import { Layout, StyleService, useStyleSheet } from '@ui-kitten/components'
import CircleButton from '../../components/CircleButton';
import Header from '../../components/Header';
import ViewPagerLazyLoading from '../../components/ViewPagerLazyLoading';
import { viewList } from '../../resources/viewData';
import { HomeContextProvider } from '../../provider/homeScreenContext';

const HomeScreen = () =>{
    
    const styles = useStyleSheet(themeStyles)
 
    const [selectedIndex, setSelectedIndex] = useState(0);

    const providerValues = React.useMemo(() => ({
        selectedIndex, setSelectedIndex
      }), [selectedIndex]);

    
    return(
        <HomeContextProvider value={providerValues}>
            <View style={styles.root}>   
                <View style={[styles.sideMenu]}>
                    {
                        viewList.map((item, index)=>
                            <CircleButton onPress={()=> setSelectedIndex(index)} 
                                color={ selectedIndex == index ? 'color-primary-400' : 'color-primary-500' }
                                key={index} 
                                iconName={item.iconName} />
                        )
                    }
                </View>
                <View style={styles.mainContainer}>
                    <Header />
                    <Layout style={styles.mainLayout}>
                        <ViewPagerLazyLoading />
                    </Layout>
                </View>
            </View>
        </HomeContextProvider>
    )
}

export default HomeScreen

const themeStyles = StyleService.create({
    root : {
        flex : 1,
        flexDirection : 'row'
    },
    sideMenu : {
        width : '20%',
        flexDirection : 'column',
        justifyContent : 'center',
        backgroundColor : 'color-primary-500',
        alignItems : 'center',
        zIndex : 100
    },
    mainContainer : {
        flex:1,
        flexDirection : 'column',
        backgroundColor : 'color-primary-100'
    },
    mainLayout : {
        flex : 3,
        backgroundColor : 'white',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
        width : '100%'
    }
})