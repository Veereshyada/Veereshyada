import React, { useState, useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../../../assets/footer/footer'
import HeaderMain from '../../../assets/headers/HeaderMain'
import ProjectAccordian from '../../../assets/accordian/projectAccordian'
import Textstyles from '../../../assets/text/texts'
import OAuth from 'oauth-1.0a'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectTaskList } from '../../redux/actions/getAction'
import moment from 'moment'



const projectList = (props) => {

    // const prop = props.route.params.data
    const [visible, setVisible] = useState(false)
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    // console.log("the props through homeaccordian in projectList=====>", prop)


    const {project_task, project_List, timeSheetData, timeOffDetail} = useSelector((state)=>({
        // project_task : state.EmployeeReducer.project_task_list,
        project_List : state.EmployeeReducer.project_list,
        timeSheetData : state?.EmployeeReducer?.timesheet_list,
        timeOffDetail : state?.EmployeeReducer?.timeoff_list

    }))

    const task_project = project_task !== undefined && project_task !== null && project_task !== []
    const list_project = project_List !== undefined && project_List !== null && project_List !== []
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null

    // console.log("the project task list====>", project_task)

    // useEffect(()=>{
    //     dispatch(getProjectTaskList())
    // },[])

    

    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>

                <HeaderMain name="Projects" projectLength={project_List?.length} timesheetLength={timeSheetData.length}  />

                <ScrollView style={{ flexGrow: 1, }}>

                    <View style={{ marginTop: 12 }}>
                        <FlatList data={project_List} renderItem={({item,index})=>{
                            // console.log("the item===>", item)
                            // let a = moment(item.startdate,"MMM, DD YYYY").format("MMMM, DD YYYY");
                            let a = moment(item.startdate, 'DD/MM/YYYY', true).format();
                            return(
                                <ProjectAccordian backgroundColor="#73bf74" date={`${moment(a).format('DD')}`} month={`${moment(a).format('MMM')}`} companyName={item.companyname} project="Data Analysis Audit" item={item} />
                            )
                        }}
                        />
                        {/* <ProjectAccordian backgroundColor="#73bf74" date="14" month='June' companyName="XYZ Parts Inc." project="Data Analysis Audit" />
                        <ProjectAccordian backgroundColor="#d6a744" date="06" month='June' companyName="Best Venture Partners" project="Client On-Boarding" />
                        <ProjectAccordian backgroundColor="#b53535" date="27" month='May' companyName="Westvleteren" project="Research and Development" />
                        <ProjectAccordian backgroundColor="#d6a744" date="06" month='June' companyName="Best Venture Partners" project="Client On-Boarding" />
                        <ProjectAccordian backgroundColor="#b53535" date="27" month='May' companyName="Westvleteren" project="Research and Development" />
                        <ProjectAccordian backgroundColor="#73bf74" date="14" month='June' companyName="XYZ Parts Inc." project="Data Analysis" />
                        <ProjectAccordian backgroundColor="#d6a744" date="06" month='June' companyName="Best Venture Partners" project="Client On-Boarding" />
                        <ProjectAccordian backgroundColor="#b53535" date="27" month='May' companyName="Westvleteren" project="Research and Development" />
                        <ProjectAccordian backgroundColor="#73bf74" date="14" month='June' companyName="XYZ Parts Inc." project="Data Analysis" />
                        <ProjectAccordian backgroundColor="#d6a744" date="06" month='June' companyName="Best Venture Partners" project="Client On-Boarding" /> */}
                    </View>

                </ScrollView>

                <Footer 
                // btnName="ADD NEW PROJECT" 
                btnName=''
                btnNavigation="addNewProject" projectLength={project_List.length} timeOffLength = {timeOffDetail.length}
                />
            </ImageBackground>
        </View>
    )
}

export default projectList

const styles = StyleSheet.create({})
