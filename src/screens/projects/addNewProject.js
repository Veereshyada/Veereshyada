import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../../../assets/footer/footer'
import HeaderMain from '../../../assets/headers/HeaderMain'
import ProjectDetail from '../../../assets/accordian/ProjectDetail'
import ProjectCard from '../../../assets/cards/ProjectCard'
import Textstyles from '../../../assets/text/texts'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectTaskList, getTimeSheet } from '../../redux/actions/getAction'
import moment from 'moment'


const addNewProject = (props, data) => {

    const item = props?.route?.params?.data
    console.log("-------the item is----------", item)

    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [timesheetData, setTimesheetData] = useState([]) //for storing data of time sheet

    const { project_task, project_List, timeSheetData, timeOffDetail } = useSelector((state) => ({
        project_task: state.EmployeeReducer.project_task_list,
        project_List: state.EmployeeReducer.project_list,
        timeSheetData: state?.EmployeeReducer?.timesheet_list,
        timeOffDetail : state?.EmployeeReducer?.timeoff_list
    }))

    const list_project = project_List !== undefined && project_List !== null && project_List !== []
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null

    //For hitting get time sheet api
    useEffect(() => {
        if (item?.employee?.value !== '' && item?.internalid !== '') {
            // console.log("the use efect and if condition is work")
            dispatch(getTimeSheet(item?.internalid, item?.employee?.value))
        }
    }, [item?.employee?.value, item?.internalid])

    //function for storing time sheet data in state
    // const setDataTimeSheet = async () => {
    //     if (timeSheetData !== [] && timeSheetData !== {}) {
    //         let data = timeSheetData.filter((i)=> {return i.approvalstatus.text == "Pending Approval"})
    //         await setTimesheetData(data)
    //     }
    // }

    //for calling function to storing data in state
    // useEffect(() => {
    //     setDataTimeSheet()
    // }, [timeSheetData])


    

    //for calling getTimeSheet Api
    // const update = useCallback(()=>{
    //     if(item?.internalid !== '' && item?.jobresource !== ''){
    //     dispatch(getTimeSheet(item?.internalid, item?.jobresource))
    //     }
    // },[])

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       update();
    //     });
    //     return unsubscribe;
    //   }, [navigation]);

    // useEffect(async()=>{
    //     let data = await props.route.params.data;
    //     let convertData = await JSON.parse(data)
    //     console.log('the convert data===>',convertData)
    // },[])

    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <HeaderMain name="Project Details" projectLength={project_List?.length} timesheetLength={timeSheetData.length} />
                <ScrollView style={{ flexGrow: 1 }} >
                    <View style={{ marginTop: 10 }} >

                        <ProjectCard data={item} />

                        <View style={{ flexDirection: 'row',  width: '95%', alignSelf: 'center' }}>
                        <FlatList keyExtractor={(item,index)=> index} numColumns={2} data={timeSheetData} renderItem={({ item, index }) => {
                            let a = moment(item?.date, 'DD/MM/YYYY', true).format();
                            // console.log("the item of data is ====>", item)
                            return (
                                
                                    <ProjectDetail backgroundColor="#73bf74" date={`${moment(a).format('DD')}`} month={`${moment(a).format('MMM')}`} time={`${item?.hours} h`} projectStatus={`${item?.project?.text}`} notes={`${item?.notes}`} status={`${item?.approvalstatus?.text}`} tracking={`${item?.tracking}`} item={item} />
                                
                            )
                        }} />
                        {/* <ProjectDetail backgroundColor="#73bf74" date='14' month='June' time='8:43 h' projectStatus='Reporting' notes='3 Entries' status='Approved' tracking='Automatic' /> */}
                        {/* <ProjectDetail backgroundColor="#73bf74" date='13' month='June' time='3:27 h' projectStatus='Download' notes='1 Entries' status='Approved' tracking='Manual' />
                            <ProjectDetail backgroundColor="#73bf74" date='09' month='June' time='8:43 h' projectStatus='Reporting' notes='3 Entries' status='Approved' tracking='Automatic' />
                            <ProjectDetail backgroundColor="#73bf74" date='14' month='June' time='3:27 h' projectStatus='Download' notes='1 Entries' status='Approved' tracking='Manual' />
                            <ProjectDetail backgroundColor="#73bf74" date='02' month='June' time='8:27 h' projectStatus='Reporting' notes='3 Entries' status='Approved' tracking='Automatic' />
                            <ProjectDetail backgroundColor="#73bf74" date='14' month='June' time='8:39 h' projectStatus='Download' notes='1 Entries' status='Approved' tracking='Manual' /> */}

</View>
                    </View>
                </ScrollView>

                {/* <TouchableOpacity style={{ width: 300, height: 50, borderRadius: 10, backgroundColor: "#1b2041", position: 'absolute', bottom: 80, alignSelf: 'center' }}
                    onPress={() => navigation.navigate("addNewEntry")}>
                    <Text style={[Textstyles.bold, { color: '#fff', textAlign: 'center', fontSize: 27, marginTop: 10 }]}>ADD NEW ENTRY</Text>
                </TouchableOpacity> */}

                <View style={{bottom:0, width:'100%', alignSelf:'center', position:'absolute'}}>
                <Footer 
                 btnName="ADD NEW ENTRY" 
                btnNavigation="addNewEntry" projectLength={project_List.length} timeOffLength = {timeOffDetail.length} 
                />
                </View>
            </ImageBackground>
        </View>
    )
}

export default addNewProject

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffff',
        width: '100%',
        justifyContent: 'center',
        height: 90
    },

    headerIcon: {
        justifyContent: 'center',
    }, detail: {
        fontSize: 15,
        textAlign: 'left',
        color: '#1b2041'
    },

    heading: {
        fontSize: 15,
        textAlign: 'left',
        color: '#1b2041'
    },
})
