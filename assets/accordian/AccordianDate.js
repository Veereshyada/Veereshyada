import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Textstyles from '../text/texts'

const AccordianDate = (props) => {

    const [Expand, setExpand] = useState(false)

    const toggleExpand = () => {
        setExpand(!Expand)

        console.log("TOGGLE HIT")
    }

    return (
        <View>
            <View style={styles.Container}>
                <View style={{ backgroundColor: props.backgroundColor, height: 40, width: 3.5, margin: '2%', left: '5%' }}></View>

                <View style={{ width: '10%', flexDirection: 'column', left: '2%', alignSelf: 'center', left: '10%' }}>
                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>{props.date}</Text>
                    <Text style={[Textstyles.bold, { color: '#87ceeb', fontSize: Platform.OS==='ios' ? 10 : 15 }]}>{props.month}</Text>
                </View>

                <View style={{ width: '55%', flexDirection: 'column', left: '2%', alignSelf: 'center' }}>
                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>{props.companyName}</Text>
                    <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 15 }]}>{props.projectTimings}</Text>
                </View>

                <View style={{ width: '15%', flexDirection: 'column', alignSelf: 'center', }}>
                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>{props.status}</Text>
                    <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 15 }]}>{props.time}</Text>
                </View>

                <TouchableOpacity style={{ width: '10%', left: '20%', alignSelf: 'center', elevation: 5 }}>
                    <Icon size={36} name={Expand ? "chevron-down" : "chevron-right"} style={{ color: '#1b2041' }} />
                </TouchableOpacity>
            </View>
            {/* {
                Expand &&
                <View style={styles.ExpandedContainer}>
                    <View style={{ width: '100%', flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
                        <Text style={[styles.detailSide], { width: '20%', textAlign: 'center' }}>06/07:</Text>
                        <Text style={[styles.detailSide], { width: '50%', textAlign: 'center' }}>8 Hours</Text>
                        <Text style={[styles.detailSide], { width: '30%', textAlign: 'center' }}>Regular</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
                        <Text style={[styles.detailSide], { width: '20%', textAlign: 'center' }}>06/08:</Text>
                        <Text style={[styles.detailSide], { width: '50%', textAlign: 'center' }}>10 Hours</Text>
                        <Text style={[styles.detailSide], { width: '30%', textAlign: 'center' }}>Regular</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
                        <Text style={[styles.detailSide], { width: '20%', textAlign: 'center' }}>06/09:</Text>
                        <Text style={[styles.detailSide], { width: '50%', textAlign: 'center' }}>8 Hours</Text>
                        <Text style={[styles.detailSide], { width: '30%', textAlign: 'center' }}>PTO</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
                        <Text style={[styles.detailSide], { width: '20%', textAlign: 'center' }}>06/10:</Text>
                        <Text style={[styles.detailSide], { width: '50%', textAlign: 'center' }}>6 Hours</Text>
                        <Text style={[styles.detailSide], { width: '30%', textAlign: 'center' }}>Regular</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
                        <Text style={[styles.detailSide], { width: '20%', textAlign: 'center' }}>06/10:</Text>
                        <Text style={[styles.detailSide], { width: '50%', textAlign: 'center' }}>8 Hours</Text>
                        <Text style={[styles.detailSide], { width: '30%', textAlign: 'center' }}>Regular</Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', margin: 10 }}>
                        <TouchableOpacity style={styles.EditBtn}>
                            <Text style={{ textAlign: "center", borderColor: '#1b2041', textAlignVertical: 'center' }}>EDIT</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.SubmitBtn}>
                            <Text style={{ textAlign: "center", color: "#fff", textAlignVertical: 'center' }}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            } */}
        </View>
    )
}

export default AccordianDate

const styles = StyleSheet.create({
    detailSide: {
        textAlign: 'left',
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
        elevation: 5,
        opacity: .9
    },
    ExpandedContainer: {
        borderWidth: 2,
        borderColor: 'gray',
        width: '90%',
        alignSelf: 'center',
        borderTopColor: 'transparent',
        borderRadius: 10,
        elevation: .5
    },
    EditBtn: {
        width: "40%",
        borderRadius: 10,
        height: 25,
        borderColor: '#1b2041',
        borderRadius: 10,
        borderWidth: 1,
    },
    SubmitBtn: {
        backgroundColor: '#1b2041',
        width: '40%',
        borderRadius: 10,
        height: 25,
        marginLeft: '13%'
    }

})
