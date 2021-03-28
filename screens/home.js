import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import NamePlate from '../components/namePlate'
import ProfilePicture from '../components/profilePicture'
import InfoSection from '../components/infoSection'
import PromptBubbles from '../components/promptBubbles'

const Home = () => {

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <NamePlate name='Hambooorger' />
                <ProfilePicture url='https://cdn.discordapp.com/attachments/556697272537317387/825650486639984640/srf-2-burgers-on-cutting-board.jpg'/>
                <InfoSection props={[21,"5\'6", 'Chicago Loop', 'Burger King', 'Chicago']} />
                <PromptBubbles props={['Worse idea I\'ve ever had', 'Getting a sandwhich when I could have gotten a hamburger instead. Garbage decision making by me of course, but now I know']} />
                <ProfilePicture url='https://cdn.discordapp.com/attachments/556697272537317387/825666184078163998/filthy-burgers-pulled-pork-beef-bacon-square.jpg'/>
                <PromptBubbles props={['Best type of hamburger?', 'Kind of a competition between chicken and a traditional meat patty. Not too sure, but I think that the chicken patties are pretty delicious.']} />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
        height: '100%',
    },
})