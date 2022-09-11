import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/core'
import Textstyles from '../../text/texts'

const ProjectAccordian = (props) => {

    const navigation = useNavigation();

    const [Expand, setExpand] = useState(false)

    const toggleExpand = () => {
        setExpand(!Expand)

        console.log("TOGGLE HIT")
    }

    return (
        <View style={styles.Container}>
            <View style={styles.InnerContainer}>

                <View style={styles.ContainerBox}>
                    <View style={{ backgroundColor: props.backgroundColor, height: 40, width: 3.5, margin: '2%', left: '7%' }}></View>

                    <View style={styles.TeamContainer}>
                        <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>Team</Text>
                    </View>

                    <TouchableOpacity style={{ width: '10%', left: '25%', alignSelf: 'center' }} onPress={() => navigation.navigate("teamView")}>
                        <Icon size={36} name={Expand ? "chevron-down" : "chevron-right"} style={{ color: '#1b2041' }} />
                    </TouchableOpacity>

                </View>


            </View>
            <View style={styles.ExpandedContainer}>

                <View style={styles.Line}></View>

                <View style={styles.acordianContainer}>

                    <View style={styles.photoNotification}>
                        <Image source={require('../../../assets/images/beard.jpg')} style={styles.ImageSimple} resizeMode='cover' />
                        <Text style={[Textstyles.bold, styles.notifiNumber]}>1</Text>
                    </View>

                    <View style={styles.photoNotification}>
                        <Image source={require('../../../assets/images/beard.jpg')} style={styles.ImageSimple} resizeMode='cover' />
                        <Text style={[Textstyles.bold, styles.notifiNumber]}>7</Text>
                    </View>

                    <View style={styles.photoNotification}>
                        <Image source={require('../../../assets/images/beard.jpg')} style={styles.ImageSimple} resizeMode='cover' />
                        <Text style={[Textstyles.bold, styles.notifiNumber]}>0</Text>
                    </View>

                    <View style={styles.photoNotification}>
                        <Image source={require('../../../assets/images/beard.jpg')} style={styles.ImageSimple} resizeMode='cover' />
                        <Text style={[Textstyles.bold, styles.notifiNumber]}>10</Text>
                    </View>

                    <View style={styles.photoNotification}>
                        <Image source={require('../../../assets/images/beard.jpg')} style={styles.ImageSimple} resizeMode='cover' />
                        <Text style={[Textstyles.bold, styles.notifiNumber]}>10</Text>
                    </View>
                    <View style={styles.photoNotification}>
                        <Image source={require('../../../assets/images/beard.jpg')} style={styles.ImageSimple} resizeMode='cover' />
                        <Text style={[Textstyles.bold, styles.notifiNumber]}>10</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default ProjectAccordian

const styles = StyleSheet.create({
    detail: {
        fontSize: 15,
        textAlign: 'left',
        color: '#1b2041'
    },

    heading: {
        fontSize: 15,
        textAlign: 'left',
        color: '#1b2041'
    },
    photoNotification: {
        backgroundColor: "#b53535",
        width: '23%',
        height: 45,
        alignSelf: 'center',
        borderRadius: 100,
        flexDirection: 'row',
        margin: 3
    },
    ImageSimple: {
        height: 45,
        width: 45,
        borderRadius: 100,
        alignSelf: 'flex-start',
    },
    Container: {
        backgroundColor: "#fff",
        width: '95%',
        alignSelf: 'center',
        elevation: 5,
        borderRadius: 15,
        marginBottom: '4%'
    },
    InnerContainer: {
        flexDirection: 'row',
        width: '100%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        marginTop: '2%'
    },
    ContainerBox: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        width: '95%',
        height: 55,
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: '4%',
        flex: 1,
        opacity: 0.9
    },
    TeamContainer: {
        width: '75%',
        flexDirection: 'column',
        left: '2%',
        alignSelf: 'center',
        left: '15%'
    },
    ExpandedContainer: {
        width: '95%',
        borderTopColor: 'transparent',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    notifiNumber: {
        color: "#fff",
        fontSize: 20,
        textAlignVertical: 'center',
        marginStart: '4%',
        marginTop: Platform.OS === 'ios' ? '13%' : '0%'
        // marginTop:'13%',
    },
    Line: {
        borderWidth: 1,
        width: '94%',
        borderColor: '#1b2041',
        top: '2%',
        alignSelf: 'center'
    },
    acordianContainer: {
        flexDirection: "row",
        alignSelf: 'center',
        flexWrap: 'wrap',
        marginStart: '4%',
        marginTop: '2%'
    }


})







