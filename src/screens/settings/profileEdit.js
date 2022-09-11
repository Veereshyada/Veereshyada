import React from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../../../assets/footer/footer'
import HeaderMain from '../../../assets/headers/HeaderMain'
import Textstyles from '../../../assets/text/texts'
import { useSelector } from 'react-redux'

// change the address for background image, footer and other images before using

const profileEdit = (props) => {

    const item = props.route.params.data

    const navigation = useNavigation();
    
    const {employeeDetail, project_List, timeSheetData, timeOffDetail} = useSelector((state)=>({
        employeeDetail : state?.EmployeeReducer?.data,
        project_List : state?.EmployeeReducer?.project_list,
        timeSheetData : state?.EmployeeReducer?.timesheet_list,
        timeOffDetail : state?.EmployeeReducer?.timeoff_list
    }))

    const employe = employeeDetail !== undefined && employeeDetail !== null
    const list_project = project_List !== undefined && project_List !== null && project_List !== []
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null

    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>

                <HeaderMain name="Profile Settings" projectLength={project_List.length}  timesheetLength={timeSheetData.length} />

                <ScrollView style={{ flexGrow: 1 }}>

                    <Image source={item.employeeimage ? {uri:item.employeeimage} :require('../../../assets/images/beard.jpg')} style={{ height: 100, width: 100, borderRadius: 100, alignSelf: 'center', marginTop: "5%" }} />
                    {/* <TouchableOpacity>
                        <Text style={[Textstyles.normal, { textAlign: 'center', color: '#1b2041', marginTop: "2%", fontSize: 15 }]}>Edit</Text>
                    </TouchableOpacity> */}

                    <View style={{ width: "95%", alignSelf: "center", flexDirection: 'row', marginTop: '2%' }}>
                        <View style={{ width: "28%", flexDirection: 'column', left:'5%' }}>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "left" }]}>Full Name</Text>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "left" }]}>ID#</Text>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "left" }]}>Email</Text>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "left" }]}>Phone</Text>
                        </View>

                        <View style={{ width: "72%", flexDirection: 'column', right:'3%' }}>
                            <Text style={[styles.Text, Textstyles.bold, { textAlign: 'right' }]}>{item.firstname} {item.lastname}</Text>
                            <Text style={[styles.Text, Textstyles.bold, { textAlign: 'right' }]}>{item.internalid}</Text>
                            <Text style={[styles.Text, Textstyles.bold, { textAlign: 'right' }]}>{item.email}</Text>
                            <Text style={[styles.Text, Textstyles.bold, { textAlign: 'right' }]}>{item.mobilephone != '' ? item.mobilephone : 'Not Available'}</Text>
                        </View>
                    </View>
                    {/* <View style={{ marginTop: '15%' }}>
                            <TouchableOpacity style={styles.redBtnBg}
                                onPress={() => navigation.goBack('profileView')}>
                                <Text style={[Textstyles.bold, styles.BtnText]}>Update</Text>
                            </TouchableOpacity>
                    </View> */}
                </ScrollView>
                <Footer btnName="" projectLength={project_List.length} timeOffLength = {timeOffDetail.length}/>
            </ImageBackground>
        </View>
    )
}

export default profileEdit

const styles = StyleSheet.create({
    BtnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        marginTop: 10
    },
    redBtnBg: {
        backgroundColor: '#1b2041',
        width: '50%',
        height: 45,
        alignSelf: 'center',
        borderRadius: 100
    },
    header: {
        backgroundColor: '#ffff',
        width: '100%',
        justifyContent: 'center',
        height: 90
    },

    headerIcon: {
        justifyContent: 'center',
    },
    Text: {
        marginTop: 2,
        color: '#1b2041',
        textAlign: 'left',
        fontSize: 18
    },
})
