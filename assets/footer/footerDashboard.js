import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Textstyles from '../text/texts'

const FooterDashboard = () => {

    const navigation = useNavigation()

    const [timeoff, setTimeOff] = useState(false)
    const [projects, setProject] = useState(false)

    const TimeOff = () => {
        // console.log("TIME OFF", timeoff)
        setTimeOff(!timeoff)
        setProject(false)
    }

    const Projects = () => {
        // console.log("PROJECTS ", projects)
        setProject(!projects)
        setTimeOff(false)
    }

    return (
        <View>

            <TouchableOpacity style={{ backgroundColor: "#1b2041", height: 45, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <Text style={[Textstyles.bold, { fontSize: 25, color: '#fff', textAlign: 'center', marginTop: '2%' }]}>TEST BUTTON ON UI</Text>
            </TouchableOpacity>

            {projects && <View style={{ backgroundColor: "#fff", height: 200, width: '100%', borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                <View style={{ flexDirection: 'row', borderWidth: 1, width: '90%', alignSelf: 'center', padding: 10, borderRadius: 10, borderColor: "black", marginTop: '3%' }}>
                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20, width: '60%' }]}>Team </Text>
                    <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 20, width: '40%' }]}>8 of Members</Text>
                </View>

                <View style={{ flexDirection: 'row', borderWidth: 1, width: '90%', alignSelf: 'center', padding: 10, borderRadius: 10, borderColor: "black", marginTop: '3%' }}>
                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20, width: '70%' }]}>Projects</Text>
                    <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 20, width: '30%' }]}>15 active</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: '4%' }}>
                    <View style={{ width: '50%', alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '80%', height: 50, borderRadius: 10, backgroundColor: "#1b2041", alignSelf: 'center' }}>
                            <Text style={[Textstyles.bold, { color: '#fff', textAlign: 'center', fontSize: 20, marginTop: 12 }]}>ADD PROJECT</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '50%' }}>
                        <TouchableOpacity style={{ width: '80%', height: 50, borderRadius: 10, backgroundColor: "#1b2041", alignSelf: 'center' }}>
                            <Text style={[Textstyles.bold, { color: '#fff', textAlign: 'center', fontSize: 20, marginTop: 12 }]}>ADD EMPLOYEE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>}

            <View style={{ flexDirection: 'row', height: 50, backgroundColor: "#fff", width: '100%', alignItems: 'center' }}>

                <TouchableOpacity style={{ width: "30%" }} onPress={() => navigation.navigate("timeOffCalendar")}>
                    <Text style={[Textstyles.bold, styles.text]}>TIME OFF</Text>
                </TouchableOpacity>

                <Text style={styles.seperator}>|</Text>

                <TouchableOpacity style={{ width: '30%' }} onPress={() => Projects()}>
                    <Text style={[Textstyles.bold, styles.text]}>PROJECTS</Text>
                </TouchableOpacity>

                <Text style={styles.seperator}>|</Text>

                <TouchableOpacity style={{ width: '30%' }} onPress={() => navigation.navigate('timeSheetCalendar')}>
                    <Text style={[Textstyles.bold, styles.text]}>TIMESHEET</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default FooterDashboard

const styles = StyleSheet.create({
    text: {
        color: '#1b2041',
        fontSize: 18,
        alignSelf: 'center'
    },
    seperator: {
        color: '#1b2041',
        fontSize: 30,
        alignSelf: 'center'

    }
})
