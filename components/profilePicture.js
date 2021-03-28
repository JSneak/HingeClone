import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { Ionicons  } from '@expo/vector-icons';

const ProfilePicture = ({url}) => {

    const sendLike = () => {
        console.log('open up modal or something')
    }

    return (
        <View style={styles.row}>
            <Image
                source={{uri: url}}
                style={styles.image}
            />
            <Ionicons onPress={sendLike} name="heart-circle-outline" size={50} color="pink" style={styles.icon}/>
        </View>
    )
}

export default ProfilePicture

const styles = StyleSheet.create({
    row: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height/2.1,
    },
    image: {
        borderRadius:10,
        width: '100%',
        height: '100%',
        borderColor: '#fff',
        borderWidth: 1,
        // resizeMode: 'cover',
    },
    icon: {
        position: 'absolute',
        right: '5%',
        bottom: '5%'
    }
})