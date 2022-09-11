import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Textstyles from '../text/texts'
import { useDispatch, useSelector } from 'react-redux'

const AccordianPicTimeSheet = (props) => {
    // console.log("The props ddata====>", props)
    const { employeeDetail } = useSelector((state) => ({
        employeeDetail : state?.EmployeeReducer?.data,
    }))

    const [Expand, setExpand] = useState(false)

    const toggleExpand = () => {
        setExpand(!Expand)

        console.log("TOGGLE HIT")
    }

    return (
        <View>
            <View style={styles.Container}>
                <View style={{ backgroundColor: props.backgroundColor, height: 40, width: 3.5, margin: '2%', left: '5%' }}></View>

                <TouchableOpacity style={{ width: '15%', left: '10%', alignSelf: 'center' }} >
                    <Image source={props?.empData?.employeeimage ? {uri:props?.empData?.employeeimage} : require('../images/beard.jpg')} style={{ height: 40, width: 40, borderRadius: 100 }} />
                </TouchableOpacity>

                <View style={{ width: Platform.OS === 'ios' ? '50%' : '45%', flexDirection: 'column', alignSelf: 'center' }}>
                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>{props.Name}</Text>
                    <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 15 }]}>{props.date}</Text>
                </View>

                <View style={{ marginTop: '8%', width: Platform.OS === 'ios' ? '20%' : '20%', right: Platform.OS === 'ios' ? '20%' : null }}>
                    <Text style={[Textstyles.normal, { textAlign: 'center', color: '#1b2041' }]}>{props.time}</Text>
                </View>
                <TouchableOpacity style={{ width: Platform.OS === 'ios' ? '10%' : '10%', left: Platform.OS === 'ios' ? null : '20%', alignSelf: 'center', right: Platform.OS === 'ios' ? '10%' : null }} onPress={() => toggleExpand()}>
                    <Icon size={36} name={Expand ? "chevron-down" : "chevron-right"} style={{ color: '#1b2041' }} />
                </TouchableOpacity>

            </View>
            {
                Expand &&
                <View style={styles.ExpandedContainer}>
                    <View style={styles.ExpandedBox}>
                        <Text style={[Textstyles.normal, styles.detailSideTop]}>06/07:</Text>
                        <Text style={[Textstyles.normal, styles.detailSideMid]}>8 Hours</Text>
                        <Text style={[Textstyles.normal, styles.detailSideBottom]}>Regular</Text>
                    </View>
                    <View style={styles.ExpandedBox}>
                        <Text style={[Textstyles.normal, styles.detailSideTop]}>06/07:</Text>
                        <Text style={[Textstyles.normal, styles.detailSideMid]}>8 Hours</Text>
                        <Text style={[Textstyles.normal, styles.detailSideBottom]}>Regular</Text>
                    </View>
                    <View style={styles.ExpandedBox}>
                        <Text style={[Textstyles.normal, styles.detailSideTop]}>06/07:</Text>
                        <Text style={[Textstyles.normal, styles.detailSideMid]}>8 Hours</Text>
                        <Text style={[Textstyles.normal, styles.detailSideBottom]}>Regular</Text>
                    </View>
                    <View style={styles.ExpandedBox}>
                        <Text style={[Textstyles.normal, styles.detailSideTop]}>06/07:</Text>
                        <Text style={[Textstyles.normal, styles.detailSideMid]}>8 Hours</Text>
                        <Text style={[Textstyles.normal, styles.detailSideBottom]}>Regular</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', margin: 10 }}>
                    {employeeDetail?.isadmin == false ?
                    null
                    :
                    <>
                        <TouchableOpacity style={styles.DeclineAcceptBtn}>
                            <Text style={[Textstyles.normal, { textAlign: "center", color: "#fff",padding:2}]}>DECLINE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.DeclineAcceptBtn}>
                            <Text style={[Textstyles.normal, { textAlign: "center",  color: "#fff",padding:2}]}>APPROVE</Text>
                        </TouchableOpacity>
                        </>
                    }
                    </View>
                </View>
            }
        </View>
    )
}

export default AccordianPicTimeSheet

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
        marginTop: '2.5%',
        color: '#1b2041'
    },
    Container: {
        flexDirection: 'row',
        backgroundColor: "#ffffff",
        width: '95%',
        height: 55,
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: '4%',
        flex: 1,
        marginTop: '2%'
    },
    ExpandedContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '93%',
        alignSelf: 'center',
        borderTopColor: 'transparent',
        // borderRadius: 10,
        bottom:'10%',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        marginTop: Platform.OS === 'ios' ? 5 : null
    },
    ExpandedBox: {
        width: '100%',
        flexDirection: "row",
        marginTop: '2%',
        alignSelf: "center"
    },
    DeclineAcceptBtn: {
        backgroundColor: '#1b2041',
        width: '40%',
        borderRadius: 10,
        // height: 25,
        marginLeft: '5%'
    },
})
