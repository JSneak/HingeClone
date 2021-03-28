import * as React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Likes = () => {

    const navigation = useNavigation();

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    )
}

export default Likes