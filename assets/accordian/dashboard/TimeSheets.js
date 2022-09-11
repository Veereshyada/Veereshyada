import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { useNavigation } from '@react-navigation/core'
import Textstyles from '../../text/texts'

const TimeSheets = (props) => {


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

                    <View style={styles.TimesheetContainer}>
                        <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>Time Sheets</Text>
                    </View>

                    <TouchableOpacity style={{ width: '10%', left: '25%', alignSelf: 'center' }} onPress={() => navigation.navigate("timeSheetCalendar")}>
                        <Icon size={36} name={Expand ? "chevron-down" : "chevron-right"} style={{ color: '#1b2041' }} />
                    </TouchableOpacity>
                </View>


            </View>

            <View style={styles.ExpandedContainer}>

                <View style={styles.Line}></View>

                <View style={styles.ExpandedInner}>
                    <View style={styles.dateBox}></View>
                    <View style={styles.dateBox}></View>
                    <View style={styles.dateBox}></View>
                    <View style={styles.dateBox}></View>
                    <View style={styles.dateBox}></View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>1</Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>2</Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>3</Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>4</Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>5</Text>
                    </View>

                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>6</Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>7</Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>8</Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>9</Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>10</Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>11</Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>12</Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>13</Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>14</Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={[Textstyles.bold, styles.count]}>15</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default TimeSheets

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
    dateBox: {
        backgroundColor: '#E8E8E8',
        height: 30,
        width: 30,
        borderRadius: 10,
        margin: 1.5,
    },
    count: {
        backgroundColor: '#1b2041',
        height: '100%',
        width: '100%',
        borderRadius: 10,
        color: "#fff",
        textAlign: "center",
        textAlignVertical: 'center',
        fontSize: 20,
        paddingTop:2
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
        width: '90%',
        height: 55,
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: '4%',
        flex: 1,
        opacity: 0.9
    },
    TimesheetContainer: {
        width: '75%',
        flexDirection: 'column',
        left: '2%',
        alignSelf: 'center',
        left: '15%'
    },
    ExpandedContainer: {
        width: '100%',
        borderTopColor: 'transparent',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    ExpandedInner: {
        flexDirection: "row",
        alignSelf: 'center',
        flexWrap: 'wrap',
        marginTop: '2%',
        width: '95%',
        marginBottom: "2%"
    },
    Line: {
        borderWidth: 1,
        width: '94%',
        borderColor: '#1b2041',
        top: '2%',
        alignSelf: 'center'
    }


})







