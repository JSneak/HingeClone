import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DiscoverHeader() {

    const goBack = () => {
        console.log("Go Back")
    }

    return (
        <View style={styles.header}>
            <Ionicons style={styles.icon} name="rose-outline" size={36} color="pink" />
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