import * as React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global'
import NamePlate from '../components/namePlate'
import ProfilePicture from '../components/profilePicture'
import InfoSection from '../components/infoSection'


const Home = () => {

    return(
        <View style={globalStyles.container}>
            <NamePlate name='Hambooorger' />
            <ProfilePicture url='https://cdn.discordapp.com/attachments/556697272537317387/825632448016416778/hamboorger.png'/>
            <InfoSection props={[21,"5\'6", 'Chicago Loop', 'Burger King', 'Chicago']} />
        </View>
    )
}

export default Home