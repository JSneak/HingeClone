import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const ProfilePicture = ({url}) => {
    return (
        <View style={styles.row}>
            <Image
                source={{uri: url}}
                style={styles.image}
            />
        </View>
    )
}

export default ProfilePicture

const styles = StyleSheet.create({
    row: {
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height/2.1,
    },
    image: {
        width: '100%',
        height: '100%',
        borderColor: 'black',
        borderWidth: 3,
        // resizeMode: 'cover',
    }
})