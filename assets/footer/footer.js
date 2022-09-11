import React, { useState,useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Textstyles from '../text/texts'
const Footer = (props) => {

    // console.log("the props from footer===>", props)

    const navigation = useNavigation()

    const [timeoff, setTimeOff] = useState(false)
    const [projects, setProject] = useState(false)

    useEffect(()=>
    {
        // console.log("USE EFFECT FROM FOOTERS")
        setProject(false)
        setTimeOff(false)
    },[])

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

    const handleNavigation=()=>{
        navigation.navigate(props.btnNavigation)
        
    }

    return (
        <View>

            {timeoff && <View style={styles.Container}>

                <TouchableOpacity onPress={() => setTimeOff(false)}>
                    <Icon name='chevrons-down' size={36} style={{ alignSelf: 'center' }} color="#1b2041" />
                </TouchableOpacity>

                <View style={styles.upContainer}>
                    <Text style={[Textstyles.bold, styles.timeoffActivityText]}>Time Off Activity</Text>
                    <Text style={[Textstyles.normal, styles.timeoffText]}>{`${props.timeOffLength} Pending`}</Text>
                </View>

                <View style={{ top: '10%' }}>
                    <TouchableOpacity style={styles.requestBtn}
                        onPress={() => navigation.navigate('requestActivity')}>
                        <Text style={[Textstyles.bold, styles.requestBtnText]}>REQUEST TIME OFF</Text>
                    </TouchableOpacity>
                </View>
            </View>}

            {projects && <View style={{backgroundColor: "#fff",height: props.btnName!=""?220:170,width: '100%',borderTopEndRadius: 20,borderTopStartRadius: 20,elevation: 1}}>
                <TouchableOpacity onPress={() => setProject(false)}>
                    <Icon name='chevrons-down' size={36} style={{ alignSelf: 'center' }} color="#1b2041" />
                </TouchableOpacity>

                <View style={styles.upContainer}>
                    <Text style={[Textstyles.bold, styles.textBold]}>Current Project</Text>
                    <Text style={[Textstyles.normal, styles.textNormal]}>Project ID</Text>
                </View>

                <TouchableOpacity style={styles.projectContainer}
                    onPress={() => navigation.navigate('projectList')}>
                    <Text style={[Textstyles.bold, styles.textBold]}>Project List</Text>
                    <Text style={[Textstyles.normal, styles.textNormal]}>{`${props.projectLength} active`}</Text>
                    {/* <Text style={[Textstyles.normal, styles.textNormal]}>5 active</Text> */}
                </TouchableOpacity>

                {props.btnName != '' &&<View style={{ marginTop: 7 }}>
                    <TouchableOpacity style={styles.requestBtn} onPress={()=>handleNavigation()}>
                        <Text style={[Textstyles.bold, styles.requestBtnText]}>{props.btnName}</Text>
                    </TouchableOpacity>
                </View>}


            </View>}

            <View style={styles.footerContainer}>

                <TouchableOpacity style={{ width: "30%" }} onPress={() => TimeOff()}>
                    <Text style={[Textstyles.bold, styles.text]}>TIME OFF</Text>
                </TouchableOpacity>

                <Text style={styles.seperator}>|</Text>

                <TouchableOpacity style={{ width: '30%' }} onPress={() => Projects()}>
                    <Text style={[Textstyles.bold, styles.text]}>PROJECTS</Text>
                </TouchableOpacity>

                <Text style={styles.seperator}>|</Text>

                <TouchableOpacity style={{ width: '30%' }} onPress={() => navigation.navigate('timeSheet')}>
                    <Text style={[Textstyles.bold, styles.text]}>TIMESHEET</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Footer

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
    },
    Container: {
        backgroundColor: "#fff",
        height: 170,
        width: '100%',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        elevation: 1
    },
    ContainerProjects: {},
    upContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
        borderColor: "black",
        marginTop: '3%'
    },
    textBold: {
        color: '#1b2041',
        fontSize: 20,
        width: '70%'
    },
    textNormal: {
        color: '#1b2041',
        fontSize: 20,
        width: '30%'
    },
    projectContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
        borderColor: "black",
        marginTop: '3%'
    },
    footerContainer: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: "#fff",
        width: '100%',
        alignItems: 'center',
        elevation: 2
    },
    timeoffText: {
        color: '#1b2041',
        fontSize: 20,
    },
    timeoffActivityText: {
        color: '#1b2041',
        fontSize: 20,
        width: '60%'
    },
    requestBtn: {
        backgroundColor: '#1b2041',
        height: 50,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10
    },
    requestBtnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginTop: '4%'
    }
})
