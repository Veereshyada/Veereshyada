import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../../../assets/footer/footer'
import HeaderMain from '../../../assets/headers/HeaderMain'
import Textstyles from '../../../assets/text/texts'
import { useSelector } from 'react-redux'

// change the address for background image, footer and other images before using

const account = () => {

    const navigation = useNavigation();
    const [data, setData]= useState('')

    const {employeeDetail, project_List, timeSheetData, timeOffDetail} = useSelector((state)=>({
        employeeDetail : state?.EmployeeReducer?.data,
        project_List : state.EmployeeReducer.project_list,
        timeSheetData : state?.EmployeeReducer?.timesheet_list,
        timeOffDetail : state?.EmployeeReducer?.timeoff_list
    }))

    const details = employeeDetail !== undefined && employeeDetail !== null && employeeDetail !== []
    const projectList = project_List !== undefined && project_List !== null && project_List !== ''
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null

    const settingState = async() => {
        if(details === true){
            setData(employeeDetail)
        }
    }

    useEffect(()=>{
        settingState()
    },[employeeDetail])

    // console.log("the data getting from response===>", data)

    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>

                <HeaderMain name="Account Settings" projectLength={project_List?.length} timesheetLength={timeSheetData.length} />

                <ScrollView style={{ flexGrow: 1 }}>
                <View style={{width:'95%', alignSelf:'center', borderRadius:5, top:5, padding:5, borderColor:'grey', paddingBottom:'2%', borderWidth:1}}>
                    <View style={{ width: "90%", alignSelf: "center", flexDirection: 'row', marginTop: '2%'}}>
                        <View style={{ width: "50%", flexDirection: 'column' }}>
                            <Text style={[styles.Text, Textstyles.medium, { textAlign: "left" }]}>Full Name</Text>
                            <Text style={[styles.Text, Textstyles.medium, { textAlign: "left" }]}>Current Role</Text>
                            <Text style={[styles.Text, Textstyles.medium, { textAlign: "left" }]}>Location</Text>
                        </View>

                        <View style={{ width: "50%", flexDirection: 'column' }}>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "right", top:2}]}>{`${data?.firstname} ${data?.lastname}`}</Text>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "right",top:3 }]}>{data?.title}</Text>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "right", top:4 }]}>{data?.location}</Text>
                        </View>
                    </View>

                    <View style={styles.Line}></View>

                    <View style={{ width: "90%", alignSelf: "center", flexDirection: 'row', marginTop: '2%' }}>
                        <View style={{ width: "50%", flexDirection: 'column' }}>
                            <Text style={[styles.Text, Textstyles.medium, { textAlign: "left" }]}>Current Project:</Text>
                            <Text style={[styles.Text, Textstyles.medium, { textAlign: "left" }]}>Status:</Text>
                            <Text style={[styles.Text, Textstyles.medium, { textAlign: "left" }]}>Billable:</Text>
                        </View>

                        <View style={{ width: "50%", flexDirection: 'column' }}>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "right" }]}>{data?.currentproject?.text ? data?.currentproject?.text : '-'}</Text>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "right" }]}>{data?.employeestatus?.text ? data?.employeestatus?.text : '-'}</Text>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "right" }]}>{data?.totalbillable ? data?.totalbillable : '-'}</Text>
                        </View>
                    </View>

                    <View style={styles.Line}></View>

                    <View style={{ width: "90%", alignSelf: "center", flexDirection: 'row', marginTop: '2%' }}>
                        <View style={{ width: "50%", flexDirection: 'column' }}>
                            <Text style={[styles.Text, Textstyles.medium, { textAlign: "left" }]}>Billable:</Text>
                            <Text style={[styles.Text, Textstyles.medium, { textAlign: "left" }]}>PTO Balance:</Text>
                        </View>

                        <View style={{ width: "50%", flexDirection: 'column' }}>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "right" }]}>{`${data?.billable ? data?.billable : '-'} Hours`}</Text>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "right" }]}>{`${data?.pto ? data?.pto : '-'} Hours`}</Text>
                        </View>
                    </View>
                </View>
                </ScrollView>
                <Footer  projectLength={project_List?.length} timeOffLength = {timeOffDetail.length} />
            </ImageBackground>
        </View>
    )
}

export default account

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
    Line: {
        borderWidth: 1,
        width: '94%',
        borderColor: '#1b2041',
        marginTop: '3%',
        alignSelf: 'center'
    },
    Text: {
        color: '#1b2041',
        textAlign: 'left',
        fontSize:16
    },
})
