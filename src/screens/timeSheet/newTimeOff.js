import React, {useEffect, useState} from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../../../assets/footer/footer'
import HeaderTimeOff from '../../../assets/headers/headerTimeOff'
// import Calendar from '../../../assets/calendar/Calendar'
// import { TimePicker } from '../../../assets/calendar/TimePicker'
// import TextStyles from '../../../assets/text/texts'
import Textstyles from '../../../assets/text/texts'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import RNPickerSelect from 'react-native-picker-select'
import Loader from '../../../assets/loader'
import { getPolicy } from '../../redux/actions/getAction'
import { addNewTimeOff, resetTimeOff } from '../../redux/actions/postAction'

const newTimeOff = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false)
    const [endDate, setEndDate] = useState(''); //state of end date
    const [startDate, setStartDate] = useState(''); //state of start date
    const [startTime, setStartTime] = useState(''); //state of start time
    const [endTime, setEndTime] = useState(''); //state of end time
    const [startDateShow, setStartDateShow] = useState(false); //for start date picker
    const [endDateShow, setEndDateShow] = useState(false); //for end date picker
    const [startTimeShow, setStartTimeShow] = useState(false); //for start time picker
    const [endTimeShow, setEndTimeShow] = useState(false); //for end time picker
    const [calendar, setCalendar] = useState(''); //state calendar picker
    const [showCalendar, setShowCalendar] = useState(false); //for show calendar
    const [selectedPolicy, setSelectedPolicy] = useState("") 
    const [selectedTimeOffType, setSelectedTimeOffType] = useState("")
    const [selectedPriority, setSelectedPriority] = useState("")
    const [desc, setDesc] = useState('');
    var listPolicy = []
    var listTimeOffType = {"label":"Test", "value": 1}
    var listPriority = {"label": "Low", "value": 1}

    useEffect(()=>{
        dispatch(getPolicy())
    },[])

    const { project_List, employeeDetail, timeSheetData, timeOffDetail, timeOffDatas, policy_lists,  } = useSelector((state) => ({
        project_List : state.EmployeeReducer.project_list,
        employeeDetail : state?.EmployeeReducer?.data,
        timeSheetData : state?.EmployeeReducer?.timesheet_list,
        timeOffDetail : state?.EmployeeReducer?.timeoff_list,
        timeOffDatas : state?.postReducer?.timeOffData,
        policy_lists : state?.EmployeeReducer?.policy_list,
        
    }))

    const projectList = project_List !== undefined && project_List !== null && project_List !== ''
    const employee_data = employeeDetail !== undefined && employeeDetail !== null && employeeDetail
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null
    const policy_data = policy_lists !== undefined && policy_lists !== null && policy_lists
    const dataSet = timeOffDatas !== undefined && timeOffDatas !== null && timeOffDatas !== '' && timeOffDatas !== [] && timeOffDatas !== {} && timeOffDatas
    


    const policyList = policy_data && policy_data?.map((item,key)=>{
        var policyArr = {}
            Object.assign(policyArr,{"label":item?.name, "value":item?.internalid});
            if(policyArr?.label !== undefined){
                listPolicy.push({"label":item?.name, "value":item?.internalid})
            }else{
                console.log("HELL YEAH POLICY LIST")
            }
    })

    
    useEffect(() => {
        // console.log(Object.keys(timeOffDatas).length)
        if(Object.keys(timeOffDatas).length > 0){
            clearState()
            dispatch(resetTimeOff())
            setIsLoading(false)
        }
    }, [timeOffDatas])





    //PICKER of Start date
    const onStartChange = async(event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        const fullDate = await `${moment(currentDate).format('L')}`
        setStartDate(fullDate);
        setStartDateShow(false)
    };
    //PICKER of End date
    const onEndChange = async(event, selectedDate) => {
        const currentDate = selectedDate || endDate;
        const fullDate = await `${moment(currentDate).format('L')}`
        setEndDate(fullDate);
        setEndDateShow(false)
    };

    //PICKER of Start time
    const onStartTime = async(event, selectedTime) => {
        // console.log("the selectd time===>", selectedTime)
        const currentTime = selectedTime || startTime;
        setStartTimeShow(Platform.OS === 'ios' ? false : false);
        // console.log("the current time===>", `${moment(currentTime).format('hh:mm A')}`)
        // const fullTime = await `${moment(currentTime).format('hh:mm A')}`
        const fullTime = await `${moment(currentTime).subtract(3, 'hh').format('hh:mm A')}`
        await setStartTime(fullTime);
        // setStartTimeShow(false)
    }

    //PICKER of End time
    const onEndTime = async(event, selectedTime) => {
        const currentTime = selectedTime || endTime;
        setEndTimeShow(Platform.OS === 'ios' ? false : false);
        // const fullTime = await `${moment(currentTime).format('hh:mm A')}`
        const fullTime = await `${moment(currentTime).subtract(3, 'hh').format('hh:mm A')}`
        setEndTime(fullTime);
        // setEndTimeShow(false)
    }

    //PICKER of calendar in respond
    const onRespond = async(event, selectedDate) => {
        const currentDate = selectedDate || calendar;
        // const fullDate = await `${moment(currentDate).format('L')}`
        const fullDate = await `${moment(currentDate).format('L')}`
        setCalendar(fullDate);
        setShowCalendar(false)
    };


    //clear state values 
    const clearState = () => {
    setEndDate('');
    setStartDate('');
    setStartTime('');
    setEndTime('');
    setStartDateShow(false);
    setEndDateShow(false);
    setStartTimeShow(false);
    setEndTimeShow(false);
    setCalendar('');
    setShowCalendar(false); 
    setSelectedPolicy("") 
    setSelectedTimeOffType("")
    setSelectedPriority("")
    setDesc('')
    }

    //Calculate Time diff in Hrs
    const diff_hours = (dt2, dt1) => {
     var diff =(dt2.getTime() - dt1.getTime()) / 1000;
     diff /= (60 * 60);
     return Math.abs(Math.round(diff));
     
    }

    //On Submit Time off data
    const handleSubmit = async() => {
        if(startDate != '' && startTime != ''){
            if(endDate != '' && endTime != ''){
              if(endDate >= startDate){
                if(selectedPolicy != '' && selectedPolicy != null){
                  if(selectedTimeOffType != '' && selectedTimeOffType != null){
                    if(selectedPriority != '' && selectedPriority != null){
                    if(desc != ''){
                        if(calendar != ''){
                            console.log("the value of set policy code is ===>", selectedPolicy, startDate, endDate, calendar, desc)
                            const body = 
                            {
                                "method": "posttimeoff",
                                "internalid": "",
                                "employee": employee_data?.internalid,
                                "startdate": startDate,
                                "enddate": endDate,
                                "respondby": calendar,
                                "policycode": selectedPolicy,
                                "notes": desc,
                                "duration": diff_hours(new Date(`${endDate} ${endTime}`), new Date(`${startDate} ${startTime}`)),
                                "timeofftype": selectedTimeOffType,
                                "priority": selectedPriority,
                            }

                            console.log("the body is ====>", body)
                            setIsLoading(true)
                            dispatch(addNewTimeOff(body))
                        }else{
                            alert("Please enter respond date")
                        }
                    }else{
                        alert("Please enter description details")
                    }
                  }else{
                    alert("Please choose priority")
                  }
                  }else{
                    alert("Please choose time off type")
                  }
                }else{
                    alert("Please choose policy")
                }
              }
              else{
                alert("End Date should be greater than or equal to start date")
            }
            }else{
                alert("Please select end date and time")
            }
        }else{
            alert("Please select start date and time")
        }
    }

    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <HeaderTimeOff title="TIME OFF" projectLength={project_List.length} timesheetLength={timeSheetData.length} />
                <ScrollView style={{ flexGrow: 1 }}>
                {isLoading === true ? <Loader/> : (
                    <>
                    <View>
                        <View style={{ flexDirection: "row", marginTop: '5%' }}>
                            <Text style={[Textstyles.bold, styles.projectHeading]}>ENTER NEW TIME OFF REQUEST</Text>
                        </View>
                        <View style={styles.divider}/>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row',  marginStart: '2.5%', marginTop: '5%' }}>
                            <Text style={[Textstyles.bold, { width: "40%", color: '#1b2041', fontSize: 20 }]}>START</Text>
                                <TouchableOpacity onPress={()=>setStartDateShow(true)} style={styles.dateSection}>
                                        {startDate ? (<Text style={[Textstyles.normal, styles.dateTimeText]}>{startDate}</Text>)
                                        : (<Text style={[Textstyles.normal, styles.dateTimeText]}>MM/DD/YYYY</Text>)}
                                        <Icon style={{marginTop:3}} name='calendar' size={20} color='#1b2041' />
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={()=>setStartTimeShow(true)} style={styles.timeSection}>
                                        {startTime ? (<Text style={[Textstyles.normal, styles.dateTimeText]}>{startTime}</Text>)
                                        : (<Text style={[Textstyles.normal, styles.dateTimeText]}>HH:MM</Text>)}
                                </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', marginStart: '2.5%', marginTop: '5%' }}>
                            <Text style={[Textstyles.bold, { width: "40%", color: '#1b2041', fontSize: 20 }]}>END</Text>
                                <TouchableOpacity onPress={()=>setEndDateShow(true)} style={styles.dateSection}>
                                        {endDate ? (<Text style={[Textstyles.normal, styles.dateTimeText]}>{endDate}</Text>)
                                        :(<Text style={[Textstyles.normal, styles.dateTimeText]}>MM/DD/YYYY</Text>)}
                                        <Icon style={{marginTop:3}} name='calendar' size={20} color='#1b2041' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>setEndTimeShow(true)} style={styles.timeSection}>
                                        {endTime ? (<Text style={[Textstyles.normal, styles.dateTimeText]}>{endTime}</Text>)
                                        :(<Text style={[Textstyles.normal, styles.dateTimeText]}>HH:MM</Text>)}
                                </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ borderWidth: 1, width: '95%', alignSelf: 'center', borderColor: '#1b2041', marginTop: '5%' }}></View>

                    <View style={{ flexDirection: "row", margin: '2%', width: '100%' }}>
                        <Text style={[Textstyles.normal, { width: "30%", color: '#1b2041' }]}>Duration#</Text>
                        <Text style={[Textstyles.normal, { width: "30%", textAlign: 'center', color: '#1b2041' }]}>#Days</Text>
                        <Text style={[Textstyles.normal, { width: "30%", textAlign: 'right', color: '#1b2041' }]}>#Hours</Text>
                    </View>

                    <View style={{flexDirection:'row', margin:'2%', width:'100%'}}>
                    <Text style={[Textstyles.bold, { width: "60%", color: '#1b2041', textAlignVertical:'center' }]}>Policy Code:</Text>
                    <View style={{ width:'35%'}}>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Select Policy',
                            value: null
                        }}
                        value={selectedPolicy}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedPolicy(itemValue)
                            // setText(listPolicy[itemIndex - 1].label)
                        }}
                        items={listPolicy}
                        useNativeAndroidPickerStyle ={false}
                        Icon={()=>{
                            return <Icon name="chevron-down" underlayColor="transparent" size={20} style={{top:5, right:5}} />
                        }}
                        style={{
                            inputAndroidContainer:{
                                backgroundColor: "#fff", 
                                width: '100%', 
                                height: Platform.OS === 'ios' ? 30 : 35, 
                                borderRadius: 10, 
                                borderColor: "#1b2041", 
                                borderWidth: 1, 
                                shadowColor: "gray", 
                            },
                            inputIOSContainer:{
                                backgroundColor:'#fff',
                                width:'100%',
                                hieght:40,
                                padding:6,
                                borderRadius: 10,
                                borderColor:'#1b2041',
                                borderWidth:1,
                                shadowColor:'gray'
                            },

                            inputIOS:{
                                color:'black'
                            },
                            
                            inputAndroid:{
                                color:'black',
                                paddingTop:1,
                                paddingLeft:10,
                                paddingBottom:0,
                                paddingRight:0
                            },
                            placeholder:{
                                color:'black'
                            },
                        }}
                    />
                    </View>
                    </View>

                    <View style={{flexDirection:'row', margin:'2%', width:'100%'}}>
                    <Text style={[Textstyles.bold, { width: "60%", color: '#1b2041', textAlignVertical:'center' }]}>Time Off Type:</Text>
                    <View style={{ width:'35%'}}>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Select Type',
                            value: null
                        }}
                        value={selectedTimeOffType}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedTimeOffType(itemValue)
                        }}
                        items={listTimeOffType}
                        useNativeAndroidPickerStyle ={false}
                        Icon={()=>{
                            return <Icon name="chevron-down" underlayColor="transparent" size={20} style={{top:5, right:5}} />
                        }}
                        style={{
                            inputAndroidContainer:{
                                backgroundColor: "#fff", 
                                width: '100%', 
                                height: Platform.OS === 'ios' ? 30 : 35, 
                                borderRadius: 10, 
                                borderColor: "#1b2041", 
                                borderWidth: 1, 
                                shadowColor: "gray", 
                            },
                            inputIOSContainer:{
                                backgroundColor:'#fff',
                                width:'100%',
                                hieght:40,
                                padding:6,
                                borderRadius: 10,
                                borderColor:'#1b2041',
                                borderWidth:1,
                                shadowColor:'gray'
                            },

                            inputIOS:{
                                color:'black'
                            },
                            
                            inputAndroid:{
                                color:'black',
                                paddingTop:1,
                                paddingLeft:10,
                                paddingBottom:0,
                                paddingRight:0
                            },
                            placeholder:{
                                color:'black'
                            },
                        }}
                    />
                    </View>
                    </View>

                    <View style={{flexDirection:'row', margin:'2%', width:'100%'}}>
                    <Text style={[Textstyles.bold, { width: "60%", color: '#1b2041', textAlignVertical:'center' }]}>Priority:</Text>
                    <View style={{ width:'35%'}}>
                    <RNPickerSelect
                        placeholder={{
                            label: 'Select Priority',
                            value: null
                        }}
                        value={selectedPriority}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedPriority(itemValue)
                        }}
                        items={listPriority}
                        useNativeAndroidPickerStyle ={false}
                        Icon={()=>{
                            return <Icon name="chevron-down" underlayColor="transparent" size={20} style={{top:5, right:5}} />
                        }}
                        style={{
                            inputAndroidContainer:{
                                backgroundColor: "#fff", 
                                width: '100%', 
                                height: Platform.OS === 'ios' ? 30 : 35, 
                                borderRadius: 10, 
                                borderColor: "#1b2041", 
                                borderWidth: 1, 
                                shadowColor: "gray", 
                            },
                            inputIOSContainer:{
                                backgroundColor:'#fff',
                                width:'100%',
                                hieght:40,
                                padding:6,
                                borderRadius: 10,
                                borderColor:'#1b2041',
                                borderWidth:1,
                                shadowColor:'gray'
                            },

                            inputIOS:{
                                color:'black'
                            },
                            
                            inputAndroid:{
                                color:'black',
                                paddingTop:1,
                                paddingLeft:10,
                                paddingBottom:0,
                                paddingRight:0
                            },
                            placeholder:{
                                color:'black'
                            },
                        }}
                    />
                    </View>
                    </View>

                    <View style={styles.descView}>
                        <TextInput numberOfLines={3} placeholder='Company Description' placeholderTextColor="gray" style={styles.descInput} value={desc} onChangeText={(text)=>setDesc(text)} />
                    </View>

                    <View style={{ flexDirection: "row", margin: '2%', width: '100%' }}>
                        <Text style={[Textstyles.normal, { width: "60%", color: '#1b2041', marginTop:5 }]}>Please Respond By:</Text>
                        <TouchableOpacity onPress={()=>setShowCalendar(true)} style={styles.dateSection}>
                        {calendar ? (<Text style={[Textstyles.normal, styles.dateTimeText]}>{calendar}</Text>)
                        : (<Text style={[Textstyles.normal, styles.dateTimeText]}>DD/MM/YYYY</Text>)}
                        <Icon style={{marginTop:3}} name='calendar' size={20} color='#1b2041' />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity onPress={()=> navigation.goBack('requestActivity')} style={{ backgroundColor: 'transparent', borderRadius: 10, height: 50, width: '80%', alignSelf: "center", marginTop: '17%', borderColor: '#1b2041', borderWidth: 1 }}>
                                <Text style={[Textstyles.bold, { color: '#1b2041', textAlign: "center", fontSize: 22, top: "20%" }]}>CANCEL</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={{ backgroundColor: '#1b2041', borderRadius: 10, height: 50, width: '80%', alignSelf: "center", marginTop: '17%', shadowColor: "gray", elevation: 1 }}
                                onPress={() => handleSubmit()}>
                                {/* onPress={() => navigation.navigate("requestActivity")}> */}
                                <Text style={[Textstyles.bold, { color: "#fff", textAlign: "center", fontSize: 22, top: '20%' }]}>SUBMIT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </>
                     )}
                </ScrollView>
                {/* start date picker */}
                {startDateShow && (
                    <DateTimePicker style={styles.datePicker} mode='date' value={new Date()} display='spinner' onChange={onStartChange} />
                )}

                {/* end date picker */}
                {endDateShow && (
                    <DateTimePicker style={styles.datePicker} mode='date' value={new Date()} display='spinner' onChange={onEndChange} />
                )}

                {/* start time picker */}
                {startTimeShow && (
                    <DateTimePicker style={styles.datePicker} timeZoneOffsetInMinutes={Platform.OS==='ios' ? 3030 : null} mode='time' value={new Date()} display='spinner' onChange={onStartTime} />
                )}

                {/* end time picker */}
                {endTimeShow && (
                    <DateTimePicker style={styles.datePicker} timeZoneOffsetInMinutes={Platform.OS==='ios' ? 3030 : null} mode='time' value={new Date()} display='spinner' onChange={onEndTime} />
                )}

                {/* respond calendar picker */}
                {showCalendar && (
                    <DateTimePicker style={styles.datePicker} mode='date' value={new Date()} display='spinner' onChange={onRespond} />
                )}
                <Footer btnName="" btnNavigation="" projectLength = {project_List.length} timeOffLength = {timeOffDetail.length}/>

            </ImageBackground>
        </View>
    )
}

export default newTimeOff

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

    divider: {
        borderWidth: 1, 
        width: '95%', 
        alignSelf: 'center', 
        borderColor: '#1b2041', 
        top: '2%' 
    },

    descView: {
        backgroundColor: '#fff', 
        alignSelf: 'center', 
        width: '95%', 
        borderRadius: 10, 
        marginTop: "2%",
        marginBottom:"2%",
        elevation:2, 
        shadowOffset:{width:0, height:2}, 
        shadowColor:'grey', 
        shadowOpacity:1
    },

    descInput: {
        bottom: '30%', 
        margin: 5, 
        color: "#1b2041",
        height:60
    },

    projectHeading: {
        width: "70%",
        color: '#1b2041',
        fontSize: 18,
        marginStart: '2.5%',
        marginBottom:10
    },

    projectTime: {
        width: "50%",
        textAlign: 'center',
        color: '#1b2041',
        fontSize: 20,
    },

    datePicker: {
        backgroundColor:'#fff', 
        elevation:1
    },

    dateSection: {
        backgroundColor: "#fff", 
        width: '33%', 
        height: 30, 
        borderRadius: 10, 
        borderColor: "#1b2041", 
        borderWidth: 1, 
        flexDirection: "row", 
        shadowColor: "gray", 
        elevation: 2,
        shadowOffset:{width:0, height:2},
        shadowOpacity:2,
    },

    timeSection: {
        backgroundColor: "#fff", 
        width: '24%', 
        height: 30, 
        borderRadius: 10, 
        borderColor: "#1b2041", 
        borderWidth: 1, 
        flexDirection: "row", 
        shadowColor: "gray", 
        elevation: 2,
        shadowOffset:{width:0, height:2},
        shadowOpacity:2,
        marginLeft:5,
        paddingLeft:5
    },

    dateTimeText: {
        alignSelf: 'center', 
        color: '#1b2041', 
        textAlign: 'center', 
        width: '80%'
    }
})
