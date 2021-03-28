import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../styles/global'
import NamePlate from '../components/namePlate'
import ProfilePicture from '../components/profilePicture'
import InfoSection from '../components/infoSection'


const Home = () => {

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <NamePlate name='Hambooorger' />
                <ProfilePicture url='https://cdn.discordapp.com/attachments/556697272537317387/825650486639984640/srf-2-burgers-on-cutting-board.jpg'/>
                {/* <InfoSection props={[21,"5\'6", 'Chicago Loop', 'Burger King', 'Chicago']} /> */}
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        height: '100%',
    },
})