import React, { useState , useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../../../assets/footer/footer'
import Accordian from '../../../assets/accordian/Accordian'
import HeaderMain from '../../../assets/headers/HeaderMain'
import { useSelector, useDispatch } from 'react-redux'
import { getTimesheetByProject } from '../../redux/actions/getAction'


const projectTimings = ({route}) => {
    let allData = {}
        allData = route.params?.employeeId
    // let allData = props
    console.log('getttttinggg valueeee', allData)

    let timeSheetBkp = [ {
        "internalid": "403",
        "backgroundColor": "#73bf74",
        "projectTimings": "40",
        "time": "13/06/2022",
        "status": "Approved",
        "companyName": "Company",
        "subData": [
            {
                "date": "13/06/2022",
                "hours": 8,
                "type": "Activity",
                "task": "Test!"
            },
            {
                "date": "14/06/2022",
                "hours": 10,
                "type": "Activity",
                "task": "Test2"
            }
        ]
        }]

    const navigation = useNavigation();
    const [timeSheetRecord, settimeSheetRecord] = useState(timeSheetBkp)
    const [timeData, setTimeData] = useState('')
    const dispatch = useDispatch()

    const { isloading, project_List, employeeDetail, timeSheetData, timeOffDetail, sheeetbyProject } = useSelector((state) => ({
        isloading: state?.CommonReducer?.loading,
        project_List : state.EmployeeReducer.project_list,
        employeeDetail : state?.EmployeeReducer?.data,
        timeSheetData : state?.EmployeeReducer?.timesheet_list,
        timeOffDetail : state?.EmployeeReducer?.timeoff_list,
        sheeetbyProject: state?.EmployeeReducer?.timeSheetbyProject
    }))

    const projectList = project_List !== undefined && project_List !== null && project_List !== ''
    const employee_data = employeeDetail !== undefined && employeeDetail !== null
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null


    useEffect(() => {
        dispatch(getTimesheetByProject(employeeDetail?.internalid))
    }, [])

    useEffect(()=>{
        settingData()
    },[sheeetbyProject])

    const settingData = async() => {
        // if(emp_detail === true && time_detail === true){
            await setTimeData(sheeetbyProject)
        // }
    }

    console.log('----------------', timeData)

    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <HeaderMain name="Time Sheet" projectLength={project_List.length} timesheetLength={timeSheetData.length} />
                <ScrollView style={{ flexGrow: 1 }}>
                <FlatList data={timeData} renderItem={({item,index, i})=>{
                    return(
                    <View style={{ marginTop: 10 }}>
                        {/* {timeSheetRecord.map((item, i) => ( */}
                            <Accordian 
                            data={item?.rows} 
                            dataBkp={item}
                             index={i} 
                             />
                        {/* ))} */}
                    </View>
                    )
                    }} />

                </ScrollView>
                <Footer btnName=""  projectLength={project_List.length} timeOffLength = {timeOffDetail.length}/>
            </ImageBackground>
        </View>
    )
}

export default projectTimings

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

    headerTitle: {
        top: '22%',
        right: "-10%",
        color: '#1b2041',
        textAlign: 'center',
        fontSize: 20,
        width: '60%',
        textAlignVertical: 'center',
    },

    detailSide: {
        width: "25%",
        textAlign: 'center',
        color: '#1b2041'
    },

    detailMid: {
        width: "50%",
        textAlign: "center",
        color: '#1b2041'
    },
})
