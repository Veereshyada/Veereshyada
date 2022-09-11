import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Footer from '../../../assets/footer/footer'
import AccordianDate from '../../../assets/accordian/AccordianDate'
import HeaderTimeOff from '../../../assets/headers/headerTimeOff'
import Textstyles from '../../../assets/text/texts'
import { useSelector } from 'react-redux'
import moment from 'moment'

const requestActivity = () => {

    const navigation = useNavigation();
    const [timeData, setTimeData] = useState('')

    const { timeOffDetail, project_List, timeSheetData } = useSelector((state) => ({
        timeOffDetail: state?.EmployeeReducer?.timeoff_list,
        project_List: state.EmployeeReducer.project_list,
        timeSheetData: state?.EmployeeReducer?.timesheet_list,
    }))

    console.log('gettingggg valueeee', timeOffDetail)
    const timeOff = timeOffDetail !== undefined && timeOffDetail !== null && timeOffDetail !== []
    const projectList = project_List !== undefined && project_List !== null && project_List !== ''
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null

    const settingData = async () => {
        if (timeOff === true) {
            await setTimeData(timeOffDetail)
        }
    }

    useEffect(() => {
        settingData()
    }, [timeOffDetail])

    return (
        <View style={{ flexDirection: 'column', }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <HeaderTimeOff title='Time Off' projectLength={project_List.length} timesheetLength={timeSheetData.length} />
                <ScrollView style={{ flexGrow: 1 }}>
                    <View>
                        <View style={{ flexDirection: "row", marginTop: '5%' }}>
                            <Text style={[Textstyles.bold, styles.projectHeading]}>REQUEST ACTIVITY</Text>
                        </View>
                        <View style={{ borderWidth: 1, width: '95%', alignSelf: 'center', borderColor: '#1b2041', top: '2%' }}></View>
                    </View>

                    <View style={{ marginTop: 20}}>
                        {timeOffDetail != '' ? (
                            <FlatList data={timeOffDetail} renderItem={({ item, index }) => {
                                let a = moment(item.startdate, 'DD/MM/YYYY', true).format();
                                // let c = moment(item.startdate, "DD").format("DD")
                                // let d = moment(item.startdate,"DD").subtract(2, 'months').format('MMM');
                                // console.log("the value of c is====>", c, "the value of d is ====>", d, "the value of item startdate====>", item.startdate, "the value of a is ====>", a)
                                var start = moment(item.startdate, 'DD-MM-YYYY');
                                var end = moment(item.enddate, 'DD-MM-YYYY');
                                var days = end.diff(start, 'week');

                                // console.log("the days between===>", days)
                                return (
                                    <AccordianDate
                                        date={`${moment(a).format('DD')}`}
                                        month={`${moment(a).format('MMM')}`}
                                        companyName={item.notes}
                                        projectTimings={`${days} week`}
                                        backgroundColor='#73bf74'
                                    />
                                )
                            }} />
                        ) : (
                            <View style={{ alignItems: 'center' }}>
                                <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>No record found</Text>
                            </View>
                        )}
                        {/* <AccordianDate date='14' month='June' companyName="Personal Leave" projectTimings="2 Weeks" backgroundColor='#73bf74' />
                        <AccordianDate date='6' month='June' companyName="Jury Duty" projectTimings="3 Days" backgroundColor="#d6a774" />
                        <AccordianDate date='27' month='May' companyName="Leave for Absence" projectTimings="1 Month" backgroundColor="#b53535" />
                        <AccordianDate date='27' month='May' companyName="Bank Holiday" projectTimings="1 Month" backgroundColor="gray" /> */}
                    </View>

                    {/* <TouchableOpacity style={{ backgroundColor: '#1b2041', borderRadius: 10, height: 50, width: '80%', alignSelf: "center", marginTop: '30%', }} onPress={() => navigation.navigate('newTimeOff')}>
                        <Text style={[Textstyles.bold, { color: "#fff", textAlign: "center", fontSize: 22, top: '25%' }]}>REQUEST TIME OFF</Text>
                    </TouchableOpacity> */}

                </ScrollView>
                <Footer btnName="REQUEST TIME OFF" btnNavigation="newTimeOff" projectLength={project_List.length} timeOffLength = {timeOffDetail.length} />
            </ImageBackground>
        </View>
    )
}

export default requestActivity

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffff',
        width: '100%',
        justifyContent: 'center',
        height: 120,
        borderRadius: 10,
        elevation: 1
    },

    headerIcon: {
        justifyContent: 'center',
        width: '20%',
        right: '4%'
    },

    projectHeading: {
        width: "59%",
        color: '#1b2041',
        fontSize: 18,
        marginStart: '2.5%',
    },

    projectTime: {
        width: "50%",
        textAlign: 'center',
        color: '#1b2041',
        fontSize: 20,
    },
})
