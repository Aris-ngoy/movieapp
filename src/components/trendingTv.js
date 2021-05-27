import React from 'react'
import { FlatList, View, Image, TouchableOpacity } from 'react-native';
import { Text, StyleService, useStyleSheet } from '@ui-kitten/components'
import { getImageUrl } from '../Helpers/ImageHelper';
import { useNavigation } from '@react-navigation/native';



const TrendingComponent = (props) =>{

    const navigation =  useNavigation();

    const { title, items, displaytitle  } = props
    const styles = useStyleSheet(themeStyles)

    const onDetail = (item) =>{
        navigation.navigate("Detail",{ ...item })
    }

    const RenderItem = ({ item }) => {
        const { name, title, poster_path } = item;
        return(<TouchableOpacity 
            onPress={()=> onDetail(item)} 
            activeOpacity={.5} 
            style={styles.card}>
            <Image style={styles.image} source={{ uri: getImageUrl(poster_path) }} />
            <Text numberOfLines={2} style={styles.cardTitle} category="h6">{ displaytitle ? title : name}</Text>
        </TouchableOpacity>)
    };

    return(<View style={styles.root}>
        <Text style={styles.title}>{title}</Text>
        <FlatList horizontal={true} data={items} renderItem={RenderItem} extraData={item => item.id } />
    </View>)
}

export default TrendingComponent;

TrendingComponent.DefaultProps = {
    displaytitle : false,
    onPress : ()=>{}
}

const themeStyles = StyleService.create({
    root : {
        marginBottom : 10
    },
    title : {
       marginBottom : 10,
       marginTop : 10,
       marginLeft : 10 
    },
    card : {
        marginRight : 10,
        marginLeft : 10
    },
    image : {
        borderRadius : 10,
        marginBottom : 10,
        width : 150,
        height : 120
    },
    cardTitle : {
        width : 150,
    }
})