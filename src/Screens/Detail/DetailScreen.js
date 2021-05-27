import React, { useEffect, useState } from 'react'
import { Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components'
import NavigationBar from '../../components/navigationBar'
import { Image, SafeAreaView, View } from 'react-native'
import DetailHeader from '../../components/detailHeader'
import { getImageUrl } from '../../Helpers/ImageHelper'
import ImageColors from "react-native-image-colors"

const DetailScreen = ({ route }) =>{
    const { name, title, poster_path } = route.params;
    const styles = useStyleSheet(themeStyles)

    const [imageColor, setImageColor] = useState("transparent")

    useEffect(() => {
        ComponentInit()
    }, [])

    const ComponentInit = async () =>{
        const colors = await ImageColors.getColors(getImageUrl(poster_path), {
            fallback: "#fff",
        })
        const { primary, dominant, platform } = colors
        setImageColor(platform === "ios" ? primary : dominant)

    }

    

    return(<Layout style={styles.root}>
        <View>
            <DetailHeader color={imageColor} >
                <SafeAreaView>
                    <NavigationBar />
                </SafeAreaView>
                <View style={[styles.headerContainer, styles.elevation]}>
                    <View style={styles.elevation}>
                        <Image  style={styles.image} source={{ uri : getImageUrl(poster_path) }} />
                    </View>
                </View>
            </DetailHeader>

        </View>
    </Layout>)
}

export default DetailScreen;

const themeStyles = StyleService.create({
    root : {
        flex : 1,
        flexDirection : 'column',
        backgroundColor : 'color-primary-100'
    },
    headerContainer : {
        width : '80%',
        alignSelf : 'center',
        backgroundColor : 'white',
        height : 300,
        marginTop : '5%',
        borderRadius : 15
    },
    image : {
        width : 100,
        height : 120,
        alignSelf : 'flex-end',
        marginRight : '10%',
        marginTop : '-8%',
        borderRadius : 15,
        borderWidth:1,
        borderColor : 'white'        
    },
    elevation: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }
    
})