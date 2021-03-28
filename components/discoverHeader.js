import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function DiscoverHeader() {

    const goBack = () => {
        console.log("Go Back")
    }

    const openSettings = () => {
        console.log("Open a setting modal eventually")
    }

    return (
        <View style={styles.header}>
            <AntDesign name="back" size={36} color="black" style={styles.icon} onPress={goBack}/>
            <AntDesign name="setting" size={36} color="black" style={styles.icon} onPress={openSettings}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('window').width,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    icon: {
        paddingRight: 16,
    }
})