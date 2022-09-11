import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { useNavigation } from '@react-navigation/core'
import Textstyles from '../../text/texts'

const Projects = (props) => {
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

                    <View style={styles.ProjectsBox}>
                        <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>Projects</Text>
                    </View>

                    <TouchableOpacity style={{ width: '10%', left: '25%', alignSelf: 'center' }} onPress={() => navigation.navigate('projectListExpandable')}>
                        <Icon size={36} name={Expand ? "chevron-down" : "chevron-right"} style={{ color: '#1b2041' }} />
                    </TouchableOpacity>
                </View>


            </View>

            <View style={styles.ExpandedContainer}>

                <View style={{ borderWidth: 1, width: '94%', borderColor: '#1b2041', top: '2%', alignSelf: 'center' }}></View>

                <View style={{ flexDirection: 'column', alignSelf: 'center', width: '90%' }}>

                    <View style={[styles.DetailBox, { marginTop: '5%' }]}>
                        <View style={{ width: "5%", height: 22 }}>
                            <View style={styles.greenContainer} />
                        </View>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "left" }]}>Widgets R Us</Text>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "right" }]}>320 Hours</Text>
                    </View>

                    <View style={[styles.DetailBox, { marginTop: '2%' }]}>
                        <View style={{ width: "5%", height: 22 }}>
                            <View style={styles.greenContainer} />
                        </View>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "left" }]}>XYZ Parts Inc.</Text>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "right" }]}>240 Hours</Text>
                    </View>


                    <View style={[styles.DetailBox, { marginTop: '2%' }]}>
                        <View style={{ width: "5%", height: 22 }}>
                            <View style={styles.greenContainer} />
                        </View>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "left" }]}>Best Venture Partners</Text>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "right" }]}>160 Hours</Text>
                    </View>


                    <View style={[styles.DetailBox, { marginTop: '2%' }]}>
                        <View style={{ width: "5%", height: 22 }}>
                            <View style={styles.yellowContainer} />
                        </View>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "left" }]}>Westvletern</Text>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "right" }]}>520 Hours</Text>
                    </View>


                    <View style={[styles.DetailBox, { marginTop: '2%' }]}>
                        <View style={{ width: "5%", height: 22 }}>
                            <View style={styles.yellowContainer} />
                        </View>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "left" }]}>Widgets R Us</Text>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "right" }]}>320 Hours</Text>
                    </View>

                    <View style={[styles.DetailBox, { marginTop: '2%' }]}>
                        <View style={{ width: "5%", height: 22 }}>
                            <View style={styles.redContainer} />
                        </View>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "left" }]}>XYZ Partners Inc.</Text>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "right" }]}>240 Hours</Text>
                    </View>

                    <View style={[styles.DetailBox, { marginTop: '2%', marginBottom: '2%' }]}>
                        <View style={{ width: "5%", height: 22 }}>
                            <View style={styles.redContainer} />
                        </View>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "left" }]}>Best Venture Partners</Text>
                        <Text style={[Textstyles.normal, styles.text, { textAlign: "right" }]}>160 Hours</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Projects

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
        width: '21%',
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
    ContainerBox: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        width: '90%',
        height: 55,
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: '4%',
        flex: 1,
        opacity: 0.9
    },
    ExpandedContainer: {
        width: '100%',
        borderTopColor: 'transparent',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    InnerContainer: {
        flexDirection: 'row',
        width: '100%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        marginTop: '2%'
    },
    ProjectsBox: {
        width: '75%',
        flexDirection: 'column',
        left: '2%',
        alignSelf: 'center',
        left: '15%'
    },
    DetailBox: {
        alignSelf: "center",
        width: '100%',
        flexDirection: "row"
    },
    greenContainer: {
        width: '30%',
        height: "100%",
        backgroundColor: "#73bf74",
        alignSelf: 'flex-start'
    },
    yellowContainer: {
        width: '30%',
        height: "100%",
        backgroundColor: "#d6a744",
        alignSelf: 'flex-start'
    },
    redContainer: {
        width: '30%',
        height: "100%",
        backgroundColor: "#b53535",
        alignSelf: 'flex-start'
    },
    text: {
        color: '#1b2041',
        width: "47.5%"
    }


})
