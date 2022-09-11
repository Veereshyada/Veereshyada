import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, View, ScrollView, FlatList, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import CustomCalendar from '../../../assets/calendar/customcalendartest'
import AccordianTimeOff from '../../../assets/accordian/AccordianTimeOff'
import HeaderMain from '../../../assets/headers/HeaderMain'
import Footer from '../../../assets/footer/footer'
import { useDispatch, useSelector } from 'react-redux'
import { getTimeOff } from '../../redux/actions/getAction'
import moment from 'moment'
import Textstyles from '../../../assets/text/texts'
// change the address for background image, footer and other images before using

const timeOffCalendar = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const [timeData, setTimeData] = useState('')
    const [emplData, setEmplData] = useState('')

    const {timeOffData, employeeDetail, project_List, timeSheetData, timeOffDetail} = useSelector((state)=>({
        // timeOffData : state?.EmployeeReducer?.timeoff_list,
        employeeDetail : state?.EmployeeReducer?.data,
        project_List : state.EmployeeReducer.project_list,
        timeSheetData : state?.EmployeeReducer?.timesheet_list,
        timeOffDetail : state?.EmployeeReducer?.timeoff_list
    }))

    const time_Data = timeOffDetail !== undefined && timeOffDetail !== null && timeOffDetail !== []
    const empl_Data = employeeDetail !== undefined && employeeDetail !== null && employeeDetail !== []
    const projectList = project_List !== undefined && project_List !== null && project_List !== ''
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null

    // console.log("the time off data===>", timeOffDetail)

    const settingData = async() => {
        if(empl_Data === true && time_Data === true){
            await setEmplData(employeeDetail)
            await setTimeData(timeOffDetail)
        }
    }

    useEffect(()=>{
        settingData()
    },[timeOffDetail,employeeDetail])


    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <HeaderMain name="Time Off" projectLength={project_List?.length} timesheetLength={timeOffDetail.length}/>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View style={{ marginTop: 10 }}>
                        <View>
                            <CustomCalendar />
                        </View>

                        <View style={{ marginTop: '2%' }}>
                            {timeOffDetail == '' ? (
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>No record found</Text>
                                </View>
                            ) : (
                            <FlatList data={timeOffDetail} renderItem={({item,index})=>{
                                let itemStartDate = moment(item.startdate, 'DD/MM/YYYY', true).format();
                                let itemEndDate = moment(item.enddate, 'DD/MM/YYYY', true).format()
                                // let a = moment(item.startdate,"DD").subtract(2, 'months').format('MM/DD');
                                // let b = moment(item.enddate).format("DD/MM");
                                // let c = moment(item.startdate, "DD").format("DD")
                                // let d = moment(item.startdate,"DD").subtract(2, 'months').format('MMM');
                                // console.log("the vlue of a===>",a, "the value of b===>", b)
                                return(
                                    <AccordianTimeOff backgroundColor="#73bf74" date={`${moment(itemStartDate).format('DD')}`} month={`${moment(itemStartDate).format('MMM')}`} companyName={`${emplData.firstname} ${emplData.lastname}`} projectTimings={`${moment(itemStartDate).format('DD/MM')}-${moment(itemEndDate).format('DD/MM')}`} />
                                )
                            }}/>
                            )}
                            {/* <AccordianTimeOff backgroundColor="#73bf74" date="14" month="July" companyName="Employee Name" projectTimings="Time Off Duration" />
                            <AccordianTimeOff backgroundColor="#d6a744" date="26" month="July" companyName="Employee Name" projectTimings="Time Off Duration" />
                            <AccordianTimeOff backgroundColor="#b53535" date="27" month="July" companyName="Employee Name" projectTimings="Time Off Duration" /> */}
                        </View>
                    </View>
                </ScrollView>

                {/* <FooterDashboard /> */}
                <Footer btnName=""  projectLength={project_List?.length} timeOffLength = {timeOffDetail.length} />

            </ImageBackground>
        </View>
    )
}

export default timeOffCalendar

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
