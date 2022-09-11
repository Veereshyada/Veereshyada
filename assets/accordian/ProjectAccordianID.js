import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Textstyles from '../text/texts'

const ProjectAcordianID = (props) => {

    const item = props.item
    const [Expand, setExpand] = useState(false)

    const toggleExpand = () => {
        setExpand(!Expand)

        console.log("TOGGLE HIT")
    }

    return (
        <View style={styles.Container}>
            <View style={{ flexDirection: 'row', width: '100%', borderTopRightRadius: 15, borderTopLeftRadius: 15, }}>

                <View style={{ backgroundColor: props.backgroundColor, height: 40, width: 3.5, margin: '3%', left: '5%', }}></View>

                <View style={{ width: '10%', flexDirection: 'column', left: '5%', alignSelf: 'center', left: Platform.OS === 'ios' ? null : '10%' }}>
                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 18 }]}>{props.date}</Text>
                    <Text style={[Textstyles.bold, { color: '#87ceeb', fontSize: 12 }]}>{props.month}</Text>
                </View>

                <View style={{ width: '67%', flexDirection: 'column', left: '5%', alignSelf: 'center' }}>
                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 18 }]}>{props.companyName}</Text>
                    <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 14 }]}>{props.projectID}</Text>
                </View>

                <TouchableOpacity style={{ width: '10%', left: '20%', alignSelf: 'center' }} onPress={() => toggleExpand()}>
                    <Icon size={36} name={Expand ? "chevron-down" : "chevron-right"} style={{ color: '#1b2041' }} />
                </TouchableOpacity>

            </View>
            {
                Expand &&
                <View style={styles.ExpandedContainer}>

                    <View style={{ borderWidth: 1, width: '94%', borderColor: '#1b2041', top: '2%', alignSelf: 'center' }}></View>

                    <View style={styles.ExpandedContainerBox}>
                        <View style={{ flexDirection: 'column', width: '40%' }}>


                            <View style={{ alignSelf: 'auto' }}>
                                <Text style={[Textstyles.normal, styles.heading]}>Status:</Text>
                                <Text style={[Textstyles.bold, styles.detail]}>{item.status.text}</Text>
                            </View>
                            <View style={{ alignSelf: 'auto', marginTop: 15 }}>
                                <Text style={[Textstyles.normal, styles.heading]}>Employee:</Text>
                                <Text style={[Textstyles.bold, styles.detail]}>{item.employee.text}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column', width: '30%' }}>
                            <View style={{ alignSelf: 'auto' }}>
                                <Text style={[Textstyles.normal, styles.heading]}>Billable:</Text>
                                <Text style={[Textstyles.bold, styles.detail]}>{item.billable}</Text>
                            </View>
                            <View style={{ alignSelf: 'auto', marginTop: 15 }}>
                                <Text style={[Textstyles.normal, styles.heading]}>Note:</Text>
                                <Text style={[Textstyles.bold, styles.detail]}>{item.note != '' ? item.note : '-'}</Text>
                            </View>
                        </View>


                        <View style={{ flexDirection: 'column', width: Platform.OS === 'ios' ? '35%' : '30%' }}>
                            <View style={{ alignSelf: 'auto' }}>
                                <Text style={[Textstyles.normal, styles.heading]}>Location</Text>
                                <Text style={[Textstyles.bold, styles.detail]}>{item.location.text != '' ? item.location.text : '-' }</Text>
                            </View>
                            <View style={{ alignSelf: 'auto', marginTop: 15 }}>
                                <Text style={[Textstyles.normal, styles.heading]}>Notifications:</Text>
                                <Text style={[Textstyles.bold, styles.detail]}>{item.notification != '' ? item.notification : '-'}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            }
        </View>
    )
}

export default ProjectAcordianID

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
    Container: {
        backgroundColor: "#fff",
        width: '95%',
        alignSelf: 'center',
        elevation: 5,
        borderRadius: 15,
        marginBottom: '4%',
        paddingTop: Platform.OS === 'ios' ? 5 : null,
        paddingBottom: Platform.OS === 'ios' ? 5 : null
    },
    ExpandedContainer: {
        width: '100%',
        borderTopColor: 'transparent',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    ExpandedContainerBox: {
        flexDirection: "row",
        alignSelf: "center",
        width: '90%',
        height: Platform.OS === 'ios' ? 115 : 100,
        marginTop: '2%',
    }



})
