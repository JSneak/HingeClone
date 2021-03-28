import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Standouts = () => {

    return(
        <View style={styles.container}>
            <Text> Settings </Text>
        </View>
    )
}

export default Standouts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
        height: '100%',
    },
})