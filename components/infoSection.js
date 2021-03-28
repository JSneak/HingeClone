import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const InfoSection = (props) => {

    const {age, height, location, college, city} = props;

    return (
        <View style={styles.container}>
            <View style={styles.personalInfo}>
                <Text>{age}</Text>
                <Text>{height}</Text>
                <Text>{location}</Text>
            </View>
            <View style={styles.university}>
                <Text>{college}</Text>
            </View>
            <View style={styles.city}>
                <Text>{city}</Text>
            </View>   
        </View>
    )
}

export default InfoSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    personalInfo: {
        flexDirection: 'row',
    },
    university: {
        flexDirection: 'row',
    },
    city: {
        flexDirection: 'row',
    }
})