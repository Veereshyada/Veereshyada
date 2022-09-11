import React from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../../../assets/footer/footer'
import HeaderMain from '../../../assets/headers/HeaderMain'
import TeamAccordian from '../../../assets/accordian/dashboard/TeamAccordian'
import Projects from '../../../assets/accordian/dashboard/Projects'
import TimeSheets from '../../../assets/accordian/dashboard/TimeSheets'
import { useSelector } from 'react-redux'
// change the address for background image, footer and other images before using

const Dashboard = () => {

    const navigation = useNavigation();
    const {employeeDetail, project_List, timeSheetData, timeOffDetail} = useSelector((state)=>({
        employeeDetail : state?.EmployeeReducer?.data,
        project_List : state.EmployeeReducer.project_list,
        timeSheetData : state?.EmployeeReducer?.timesheet_list,
        timeOffDetail : state?.EmployeeReducer?.timeoff_list
    }))

    const employe = employeeDetail !== undefined && employeeDetail !== null
    const list_project = project_List !== undefined && project_List !== null && project_List !== []
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null

    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <HeaderMain name="Dashboard"  projectLength={project_List.length}  timesheetLength={timeSheetData.length} />
                <ScrollView style={{ flexGrow: 1 }}>
                    <View style={{ marginTop: "2%" }}>
                        <TeamAccordian backgroundColor='#1b2041' />
                    </View>
                    <View>
                        <Projects backgroundColor='#1b2041' />
                    </View>
                    <View>
                        <TimeSheets backgroundColor='#1b2041' />
                    </View>
                </ScrollView>
                {/* <FooterDashboard /> */}
                <Footer btnName="" projectLength={project_List.length} timeOffLength = {timeOffDetail.length}/>
            </ImageBackground>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffff',
        width: '100%',
        justifyContent: 'center',
        height: 90
    },

    headerIcon: {
        justifyContent: 'center',
    }
})
