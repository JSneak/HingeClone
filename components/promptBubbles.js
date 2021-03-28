import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons  } from '@expo/vector-icons';

const PromptBubbles = ({props}) => {

    const [prompt, response] = props;

    const sendLike = () => {
        console.log('open up modal or something')
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.prompt}>{prompt}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.response}>{response}</Text>
            </View>
            <View style={styles.iconRow}>
                <Ionicons onPress={sendLike} name="heart-circle-outline" size={50} color="pink" style={styles.icon}/>
            </View>
        </View>
    )
}

export default PromptBubbles

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderColor: '#fff',
        borderRadius:10,
        borderWidth: 1,
        backgroundColor: "white",
        marginTop: 25,
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
    },
    prompt: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    response: {
        paddingTop: 16,
        fontSize: 24,
    },
    icon: {
        paddingTop: 5,
    },
    row: {
        alignItems: 'flex-start',
    },
    iconRow: {
        alignItems: 'flex-end',
    }
})