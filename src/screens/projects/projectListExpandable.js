import React from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import ProjectAcordianID from '../../../assets/accordian/ProjectAccordianID'
import HeaderMain from '../../../assets/headers/HeaderMain'
import Footer from '../../../assets/footer/footer'
import moment from 'moment'
import { useSelector } from 'react-redux'
// change the address for background image, footer and other images before using

const projectListExpandable = () => {

    const navigation = useNavigation();

    const {project_task, project_List, timeSheetData, timeOffDetail} = useSelector((state)=>({
        project_List : state.EmployeeReducer.project_list,
        timeSheetData : state?.EmployeeReducer?.timesheet_list,
        timeOffDetail : state?.EmployeeReducer?.timeoff_list
    }))

    const list_project = project_List !== undefined && project_List !== null && project_List !== []
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null

    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <HeaderMain name="Projects" projectLength={project_List?.length} timesheetLength={timeSheetData.length}/>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View style={{ marginTop: '5%' }}>
                        <FlatList data={project_List} renderItem={({item,index})=>{
                            // let a = moment(item.startdate,"MMM, DD YYYY").format("MMMM, DD YYYY");
                            let a = moment(item.startdate, 'DD/MM/YYYY', true).format();
                            return(
                                <ProjectAcordianID backgroundColor='#73bf74' month={`${moment(a).format('MMM')}`} date={`${moment(a).format('DD')}`} companyName={item.companyname} projectID={`ID: ${item.internalid}`} item={item} />
                            )
                        }}/>
                        {/* <ProjectAcordianID backgroundColor='#73bf74' month="July" date='01' companyName='Widgets R Us' projectID='ID: WID555' />
                        <ProjectAcordianID backgroundColor='#73bf74' month="July" date='14' companyName='XYZ Parts Inc.' projectID='ID: XYZ144' />
                        <ProjectAcordianID backgroundColor='#d6a744' month="June" date='06' companyName='Best Venture Partners' projectID='ID: BVP623' />
                        <ProjectAcordianID backgroundColor='#b53535' month="May" date='27' companyName='Westvleteren' projectID='ID: WES120' /> */}
                    </View>
                </ScrollView>


                {/* <FooterDashboard /> */}
                <Footer btnName="ADD NEW PROJECT" btnNavigation="addNewEntry"  projectLength={project_List?.length} timeOffLength = {timeOffDetail.length}/>
            </ImageBackground>
        </View>
    )
}

export default projectListExpandable

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
