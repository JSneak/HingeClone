import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const NamePlate = ({name}) => {

    const profileAction = () => {
        console.log("Pressed Profile Setting")
    }

    return(
        <View style={styles.row}>
            <Text style={styles.namePlateText}>{name}</Text>
            <Entypo onPress={profileAction} name="dots-three-vertical" size={28} color="black" />
        </View>
    )
}

export default NamePlate

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    namePlateText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#333',
        letterSpacing: 1,
    },
})