import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const InfoSection = ({props}) => {

    const [age, height, location, college, city] = props;

    return (
        <View style={styles.container}>
            <View style={styles.personalInfoContainer}>
                <View style={styles.personalInfo}>
                    <MaterialIcons name="cake" size={30} color="black" style={styles.personInfoIcon} />
                    <Text style={styles.text}>{age}</Text>
                    <MaterialIcons name="height" size={30} color="black" style={styles.personInfoIcon} />
                    <Text style={styles.text}>{height}</Text>
                    <Ionicons name="location-outline" size={30} color="black" style={styles.personInfoIcon} />
                    <Text style={styles.text}>{location}</Text>
                </View>
            </View>
            <View style={styles.university}>
                <Ionicons style={styles.icon} name="school-outline" size={30} color="black" />
                <Text style={styles.text}>{college}</Text>
            </View>
            <View style={styles.city}>
                <Ionicons style={styles.icon} name="home-outline" size={30} color="black" />
                <Text style={styles.text}>{city}</Text>
            </View>   
        </View>
    )
}

export default InfoSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderColor: '#fff',
        borderRadius:10,
        borderWidth: 1,
        backgroundColor: "white",
        marginTop: 25,
        // overflow: 'hidden',
    },
    personalInfoContainer: {
        flexDirection: 'column',
        borderBottomWidth: 2,
        borderColor: '#F5F5F5',
        padding: 5,
    },
    personalInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 18,
    },
    personInfoIcon: {
        borderLeftWidth: 2,
        borderColor: '#F5F5F5',
    },
    university: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#F5F5F5',
        padding: 5,
    },
    city: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#F5F5F5',
        padding: 5,
    },
    icon: {
        paddingRight: 20,
    }
})