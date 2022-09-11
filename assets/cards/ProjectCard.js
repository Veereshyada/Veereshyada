import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Textstyles from '../text/texts'
import { useSelector } from 'react-redux'

const ProjectCard = (props) => {

    const {employeeDetail} = useSelector((state)=>({
        employeeDetail : state?.EmployeeReducer?.data,
    }))
    console.log("The props in project card====>", employeeDetail?.isadmin)

    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ marginTop: 10 }}>
                <View style={styles.Container}>
                    <View style={styles.ContainerBox}>

                        <View style={{ margin: '3%', width: '95%', flexDirection: 'column', alignSelf: 'center', left: '5%' }}>
                            <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 18 }]}>{props?.data?.companyname}</Text>
                            <Text style={[Textstyles.normal, styles.DataEditText]}>Data Analysis Audit</Text>
                        </View>
                    {employeeDetail?.isadmin === false ?
                    null
                    :
                        <TouchableOpacity style={[styles.UpperCardContainer, { left:'15%' }]}>
                            <Text style={[Textstyles.normal, styles.DataEditText, {color:'#fff', textAlign:'center'}]}>Edit</Text>
                        </TouchableOpacity>
                    }

                    </View>

                    <View style={styles.ExpandedContainer}>

                        <View style={{ borderWidth: 1, width: '94%', borderColor: '#1b2041', top: '2%', alignSelf: 'center' }}></View>

                        <View style={styles.ExpandedContainerInner}>
                            <View style={{ flexDirection: 'column', width: '40%' }}>
                                <View style={{ alignSelf: 'auto' }}>
                                    <Text style={[Textstyles.normal, styles.heading]}>Project ID:</Text>
                                    <Text style={[Textstyles.bold, styles.detail]}>{props?.data?.internalid}</Text>
                                </View>
                                <View style={{ alignSelf: 'auto',  marginTop: 15 }}>
                                    <Text style={[Textstyles.normal, styles.heading]}>Billable</Text>
                                    <Text style={[Textstyles.bold, styles.detail]}>{props?.data?.billable}</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'column', width: '30%' }}>
                                <View style={{ alignSelf: 'auto' }}>
                                    <Text style={[Textstyles.normal, styles.heading]}>Status:</Text>
                                    <Text style={[Textstyles.bold, styles.detail]}>Active</Text>
                                </View>
                                <View style={{ alignSelf: 'auto', marginTop: 15 }}>
                                    <Text style={[Textstyles.normal, styles.heading]}>Note:</Text>
                                    <Text style={[Textstyles.bold, styles.detail]}>{props?.data?.note}</Text>
                                </View>
                            </View>


                            <View style={{ flexDirection: 'column', width: '30%' }}>
                                <View style={{ alignSelf: 'auto' }}>
                                    <Text style={[Textstyles.normal, styles.heading]}>Location</Text>
                                    <Text style={[Textstyles.bold, styles.detail]}>{props?.data?.location?.text}</Text>
                                </View>
                                <View style={{ alignSelf: 'auto', marginTop: 15 }}>
                                    <Text style={[Textstyles.normal, styles.heading]}>Notifications:</Text>
                                    <Text style={[Textstyles.bold, styles.detail]}>{props?.data?.notification}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default ProjectCard

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffff',
        width: '100%',
        justifyContent: 'center',
        height: 90
    },

    headerIcon: {
        justifyContent: 'center',
    },  
    detail: {
        fontSize: 15,
        textAlign: 'left',
        color: '#1b2041',
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
        marginBottom: '4%'
    },
    ContainerBox: {
        flexDirection: 'row',
        width: '100%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    DataEditText: {
        color: '#1b2041',
        fontSize: 14,
    },
    UpperCardContainer: {
        margin: '3%',
        width: '20%',
        flexDirection: 'column',
        alignSelf: 'center',
        backgroundColor:'#1b2041',
        borderRadius:20,
        height:30,
        justifyContent:'center',
        elevation:1,
        shadowColor:'gray',
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity:1
    },
    ExpandedContainer: {
        width: '100%',
        borderTopColor: 'transparent',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    ExpandedContainerInner: {
        flexDirection: "row",
        alignSelf: "center",
        width: '92%',
        // backgroundColor:'red',
        height: 100,
        marginTop: '2%'
    }
})
