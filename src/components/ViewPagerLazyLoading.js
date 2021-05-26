import React, { useState, useContext } from 'react'
import { Layout, ViewPager } from '@ui-kitten/components';
import { StyleSheet,  } from 'react-native'
import { viewList } from '../resources/viewData'
import HomeContext from '../provider/homeScreenContext';

const ViewPagerLazyLoading = () =>{

    const context = useContext(HomeContext)
    const { selectedIndex, setSelectedIndex } = context

    const shouldLoadComponent = (index) => index === selectedIndex;

    return(<ViewPager
        selectedIndex={selectedIndex}
        shouldLoadComponent={shouldLoadComponent}
        onSelect={index => setSelectedIndex(index)}>
        {
            viewList.map((item, index)=>
                <Layout level='2' style={styles.view} key={index}>
                    <item.view  />
                </Layout>
            )
        }
    </ViewPager>)
}

export default ViewPagerLazyLoading;

const styles = StyleSheet.create({
    view: {
      height : '100%',
      alignItems: 'center',
      justifyContent: 'center',
      margin : 10,
      backgroundColor : 'transparent'
    },
  });