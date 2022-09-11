import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Textstyles from '../text/texts'

const AccordianPic = (props) => {

    const [Expand, setExpand] = useState(false)

    const toggleExpand = () => {
        setExpand(!Expand)

        console.log("TOGGLE HIT")
    }

    return (
        <View>
            <TouchableOpacity style={styles.Container}
                onPress={() => toggleExpand()}>
                <View style={{ backgroundColor: props.backgroundColor, height: 40, width: 3.5, margin: '2%', left: '5%' }}></View>

                <TouchableOpacity style={{ width: '15%', left: '10%', alignSelf: 'center' }} >
                    <Image source={require('../images/beard.jpg')} style={{ height: 40, width: 40, borderRadius: 100 }} />
                </TouchableOpacity>

                <View style={{ width: '60%', flexDirection: 'column', alignSelf: 'center' }}>
                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>{props.Name}</Text>
                    <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 15 }]}>{props.designation}</Text>
                </View>

                <View style={{ marginTop: '8%', width: '20%' }}>
                    <Text style={[Textstyles.normal, { textAlign: 'center', color: '#1b2041' }]}>{props.alert}</Text>
                </View>

            </TouchableOpacity>
            {
                Expand &&
                <View style={styles.ExpandedContainer}>
                    <View style={{ width: '100%', flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
                    </View>

                    <View style={{ flexDirection: "row", }}>
                        <Text style={[Textstyles.normal, { marginStart: '2%', color: '#1b2041', fontSize: 15 }]}>Current Org:
                            <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 15 }]}>XYZ Parts Inc.</Text></Text>
                    </View>

                    <View style={{ flexDirection: "row", marginStart: '2%', marginEnd: '2%' }}>
                        <View style={{ width: '50%' }}>
                            <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 15 }]}>Billable:
                                <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 15 }]}>40 Hours</Text></Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 15, textAlign: 'left', marginStart: '2%' }]}>Time Off:
                                <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 15 }]}>8 Hours</Text></Text>
                        </View>
                    </View>

                    <View style={{ marginStart: '2%', marginTop: "5%" }}>
                        <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 15 }]}>Pending Approvals</Text>
                    </View>

                    <View style={{ marginTop: "1%", marginStart: "2%", marginEnd: '2%' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[Textstyles.normal, styles.text, { textAlign: 'left' }]}>Timesheet:</Text>
                            <Text style={[Textstyles.normal, styles.text, { textAlign: 'center' }]}>40 Hours</Text>
                            <Text style={[Textstyles.normal, styles.text, { textAlign: 'right' }]}>Weekly</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[Textstyles.normal, styles.text, { textAlign: 'left' }]}>Timeoff:</Text>
                            <Text style={[Textstyles.normal, styles.text, { textAlign: 'center' }]}>8 Hours</Text>
                            <Text style={[Textstyles.normal, styles.text, { textAlign: 'right' }]}>Personal</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', margin: 10 }}>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={[Textstyles.normal, styles.editBtnText]}>EDIT</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={[Textstyles.normal, styles.submitBtnText]}>REVIEW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}

export default AccordianPic

const styles = StyleSheet.create({
    detailSideTop: {
        width: '20%',
        textAlign: 'center',
        color: '#1b2041'
    },
    detailSideMid: {
        width: '50%',
        textAlign: 'center',
        color: '#1b2041'
    },
    detailSideBottom: {
        width: '30%',
        textAlign: 'center',
        color: '#1b2041'
    },
    submitButton: {
        backgroundColor: '#1b2041',
        width: '40%',
        borderRadius: 10,
        height: 25,
        marginLeft: '13%'
    },
    submitBtnText: {
        textAlign: "center", 
        color: "#fff", 
        textAlignVertical: 'center', 
        marginTop: Platform.OS === 'ios' ? '2%' : '1%' 
    },
    editButton: {
        width: "40%",
        borderRadius: 10,
        height: 25,
        borderColor: '#1b2041',
        borderRadius: 10,
        borderWidth: 1,
    },
    editBtnText: {
        textAlign: "center",
        borderColor: '#1b2041',
        textAlignVertical: 'center',
        marginTop: Platform.OS ==='ios' ? '2.5%' : '1%',
        color: '#1b2041'
    },
    Container: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        width: '95%',
        height: 55,
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: '4%',
        flex: 1,
        // opacity: 0.9
    },
    ExpandedContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
        alignSelf: 'center',
        borderTopColor: 'transparent',
        // borderRadius: 10,
        bottom:'10%',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        marginTop:6
    },
    text: {
        width: '33%',
        color: '#1b2041',
        fontSize: 15,
    }
})
