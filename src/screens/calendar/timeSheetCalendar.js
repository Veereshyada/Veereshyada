import React, { useCallback, useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import CustomCalendar from '../../../assets/calendar/customcalendartest'
import AccordianPicTimeSheet from '../../../assets/accordian/AccordianPicTimeSheet'
import HeaderMain from '../../../assets/headers/HeaderMain'
import Footer from '../../../assets/footer/footer'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectList, getTimeSheet } from '../../redux/actions/getAction'
import moment from 'moment'
import Textstyles from '../../../assets/text/texts'

// change the address for background image, footer and other images before using

const timeSheetCalendar = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [timeData, setTimeData] = useState('')
    const [emplData, setEmplData] = useState('')

    const {timeSheetData, employeeDetail, project_List, timeOffDetail} = useSelector((state)=>({
        timeSheetData : state?.EmployeeReducer?.timesheet_list,
        employeeDetail : state?.EmployeeReducer?.data,
        project_List : state?.EmployeeReducer?.project_list,
        timeOffDetail : state?.EmployeeReducer?.timeoff_list
    }))

    const emp_detail = employeeDetail !== undefined && employeeDetail !== null
    const time_detail = timeSheetData !== undefined && timeSheetData !== null
    const projectList = project_List !== undefined && project_List !== null && project_List !== ''

    // console.log("the employee details are===>", employeeDetail)
    // console.log("the emp_details are===>", emp_detail)

    useEffect(()=>{
        dispatch(getTimeSheet(null, employeeDetail?.internalid))
    },[])

    useEffect(()=>{
        settingData()
    },[timeSheetData,employeeDetail])

    const settingData = async() => {
        if(emp_detail === true && time_detail === true){
            await setEmplData(employeeDetail)
            await setTimeData(timeSheetData)
        }
    }

    // const hittingAPI = async() => {
    //     // console.log("the employee detail id ===>", employeeDetail.internalid)
    //     if(employeeDetail?.internalid != ''){
    //         dispatch(getTimeSheet(employeeDetail.internalid))
    //     }
    // }

    // useEffect(()=>{
    //     // dispatch(getTimeSheet())
    //     // dispatch(getProjectList())
    //     hittingAPI()
    // },[])


    // console.log("The time sheet data====>", timeSheetData)
    // console.log("The employee detail====>", timeData)

    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <HeaderMain name="Time Sheet" projectLength={project_List?.length} timesheetLength={timeSheetData.length}/>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View style={{ marginTop: 10 }}>
                        <CustomCalendar />

                        <View style={{ marginTop: '2%'}}>
                        {timeData != '' ? (
                            <FlatList data={timeData} renderItem={({item,index})=>{
                                // console.log("the item in time calendar===>", item)
                                // let a = moment(item.startdate,"DD").format("MM/DD");
                                // let b = moment(item.enddate).format("DD/MM");
                                // let c = moment(item.date).format()
                                // console.log("the value of c====>", c, "the item date=====>", item.date)
                                // console.log("the vlue of a===>",a, "the value of b===>", b)
                                return(
                                    <AccordianPicTimeSheet backgroundColor="#b53535" 
                                    // Name={`${item?.project?.text}`} 
                                    Name={`${emplData.firstname} ${emplData.lastname}`} 
                                    date={`${item.date}`} 
                                    empData ={emplData}
                                    // date={`${a}-${b}`} 
                                    time={`${item.hours} hours`} />
                                )
                            }} />
                            ):(
                                <View style={{alignItems:'center'}}>
                                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>No record found</Text>
                                </View>
                            )}
                            {/* <AccordianPicTimeSheet backgroundColor="#b53535" Name="Employee Name" date="07/11-07/17" time="40 hours" />
                            <AccordianPicTimeSheet backgroundColor="#d6a744" Name="Employee Name" date="07/11-07/17" time="40 hours" />
                            <AccordianPicTimeSheet backgroundColor="#73bf74" Name="Employee Name" date="07/11-07/17" time="40 hours" /> */}
                        </View>
                    </View>


                </ScrollView>
                {/* <FooterDashboard /> */}
                <Footer btnName="" projectLength={project_List?.length} timeOffLength = {timeOffDetail.length}/>
            </ImageBackground>
        </View>
    )
}

export default timeSheetCalendar

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
