import React, {useState, useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, Platform, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../../../assets/footer/footer'
import HeaderMain from '../../../assets/headers/HeaderMain'
import Textstyles from '../../../assets/text/texts'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addNewProject } from '../../redux/actions/postAction'
import Loader from '../../../assets/loader'
// change the address for background image, footer and other images before using

const addNewEntry = () => {

    const [desc, setDesc] = useState(''); //for description
    const [gps, setGps] = useState('manual') //for gps tracking
    const [endDate, setEndDate] = useState(''); //state of end date
    const [startDate, setStartDate] = useState(''); //state of start date
    const [startTime, setStartTime] = useState(''); //state of start time
    const [endTime, setEndTime] = useState(''); //state of end time
    const [startDateShow, setStartDateShow] = useState(false); //for start date picker
    const [endDateShow, setEndDateShow] = useState(false); //for end date picker
    const [startTimeShow, setStartTimeShow] = useState(false); //for start time picker
    const [endTimeShow, setEndTimeShow] = useState(false); //for end time picker
    const [selectedCompany, setSelectedCompany] = useState(''); //for selected company dropdown
    const [text, setText] = useState("") //for saving label of the company
    const [selectedStatus, setSelectedStatus] = useState(''); //for selected status dropdown
    const [selectedLocation, setSelectedLocation] = useState(''); //for selected Location dropdown
    const [selectedManager, setSelectedManager] = useState(''); //for selected Manager dropdown
    const [isLoading, setIsLoading] = useState(false)

    const [diffDays, setDiffDays] = useState('');
    const [diffHour, setDiffHour] = useState('');
    var listCompany = [];
    var listStatus = [];
    var listLocation = [];
    var listManager = [];

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const {company_data, status_data, location_data, manager_data, employeeDetail, addingProject, project_List, timeSheetData, isloading, timeOffDetail} = useSelector((state)=>({
        company_data : state?.EmployeeReducer?.company_list,
        status_data : state?.EmployeeReducer?.project_status_list,
        location_data : state?.EmployeeReducer?.project_location_list,
        manager_data : state?.EmployeeReducer?.manager_list,
        employeeDetail : state?.EmployeeReducer?.data,
        addingProject : state?.postReducer?.projectData,
        project_List : state.EmployeeReducer.project_list,
        timeSheetData : state?.EmployeeReducer?.timesheet_list,
        isloading : state?.commonReducer?.loading,
        timeOffDetail : state?.EmployeeReducer?.timeoff_list
    }))

    var arr = company_data!=="" && company_data!==undefined &&  company_data
    var arr1 = status_data !== '' && status_data !== undefined && status_data
    var arr2 = location_data !== '' && location_data !== undefined && location_data
    var arr3 = manager_data !== '' && manager_data !== undefined && manager_data
    var arr4 = employeeDetail !== '' && employeeDetail !== undefined && employeeDetail
    const list_project = project_List !== undefined && project_List !== null && project_List !== []
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null

    // console.log("the adding project api res in add new entry=====>", addingProject)
    // console.log("the loading in add new entry page ===>", isloading)

    //for getting company
    const companyList = arr && arr?.map((item, key)=>{
        var branchArr = {}
            Object.assign(branchArr,{"label":item?.name, "value": item?.internalid})
            if(branchArr.label!==undefined){
            listCompany.push({"label":item?.name, "value":item?.internalid})
            }
            else{
            console.log('HELL YEAH COMPANY LIST')
            }
        })

    const changeSelectedCompany = async (e) => {
        setSelectedCompany(e)
    }

    //for getting status
    const statusList = arr1 && arr1?.map((item, key)=>{
        var statusArr = {}
            Object.assign(statusArr,{"label":item?.name, "value": item?.internalid})
            if(statusArr.label!==undefined){
                listStatus.push({"label":item?.name, "value":item?.internalid})
            }
            else{
            console.log('HELL YEAH STATUS LIST')
            }
        })

    const changeSelectedStatus = async (e) => {
        setSelectedStatus(e)
    }

    //for getting LOCATION
    const locationList = arr2 && arr2?.map((item, key)=>{
        var locationArr = {}
            Object.assign(locationArr,{"label":item?.name, "value": item?.internalid})
            if(locationArr.label!==undefined){
                listLocation.push({"label":item?.name, "value":item?.internalid})
            }
            else{
            console.log('HELL YEAH LOCATION LIST')
            }
        })

    const changeSelectedLocation = async (e) => {
        setSelectedLocation(e)
    }

    //for getting MANAGER
    const managerList = arr3 && arr3?.map((item, key)=>{
        var managerArr = {}
            Object.assign(managerArr,{"label":item?.name, "value": item?.internalid})
            if(managerArr.label!==undefined){
                listManager.push({"label":item?.name, "value":item?.internalid})
            }
            else{
            console.log('HELL YEAH LOCATION LIST')
            }
        })

    const changeSelectedManager = async (e) => {
        setSelectedManager(e)
    }

    

    //PICKER of Start date
    const onStartChange = async(event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        const fullDate = await `${moment(currentDate).format('L')}`
        // const fullDate = await `${moment(currentDate).date()}-${moment(currentDate).month()+1}-${moment(currentDate).year()}`;
        setStartDate(fullDate);
        setStartDateShow(false)
    };
    //PICKER of End date
    const onEndChange = async(event, selectedDate) => {
        const currentDate = selectedDate || endDate;
        const fullDate = await `${moment(currentDate).format('L')}`
        // const fullDate = await `${moment(currentDate).date()}-${moment(currentDate).month()+1}-${moment(currentDate).year()}`;
        setEndDate(fullDate);
        setEndDateShow(false)
    };

    //PICKER of Start time
    const onStartTime = async(event, selectedTime) => {
        const currentTime = selectedTime || startTime;
        setStartTimeShow(Platform.OS === 'ios' ? false : false);
        // const fullTime = await `${moment(currentTime).format('hh:mm A')}`
        const fullTime = await `${moment(currentTime).subtract(3, 'hh').format('hh:mm A')}`
        setStartTime(fullTime);
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

    const handleSubmit = async() => {
        if(selectedCompany != ''){
            if(desc != ''){
                if(selectedStatus != ''){
                    if(selectedLocation != ''){
                        if(selectedManager != ''){
                            if(startDate != ''){
                                if(endDate != ''){
                                    setIsLoading(true)
                                    const body = 
                                        {
                                            "method": "postproject",
                                            "internalid": "",
                                            "projectexpensetype": "",
                                            "companyname": text,
                                            "subsidiary": employeeDetail?.subsidiary?.value,
                                            "jobresources": 
                                            [
                                            {
                                                "jobresource": employeeDetail?.internalid,
                                                "role": "-3"
                                            }
                                            ],
                                            "description": desc,
                                            "companyid": selectedCompany,
                                            "status": selectedStatus,
                                            "location": selectedLocation,
                                            "gpstracking": gps,
                                            "projectmanager": selectedManager,
                                            "startdate": startDate,
                                            "enddate": endDate
                                    }
                                    // console.log("the body data=====>", body)
                                    dispatch(addNewProject(body))
                                    // setIsLoading(false)
                                }else{
                                    alert('Please select end date')
                                }
                            }else{
                                alert("Please select start date")
                            }
                        }else{
                            alert("Please select manager")
                        }
                    }else{
                        alert("Please select location")
                    }
                }else{
                    alert("Please select status")
                }
            }else{
                alert("Please select company description")
            }
        }else{
            alert("Please select company name")
        }
    }

    useEffect(()=>{
        if(addingProject?.title === "Request Processed."){
            setIsLoading(false)
            navigation.navigate("homeScreen")
        }else{
             navigation.navigate("homeScreen")
        }
    },[addingProject])

    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <HeaderMain name="Add New Project" projectLength={project_List?.length} timesheetLength={timeSheetData.length}  />
                <ScrollView style={{ flexGrow: 1 }}>
                {/* {isLoading === true ? <Loader/> : ( */}
                    <>
                    <View>
                        <View style={{ flexDirection: "row", marginTop: '5%' }}>
                            <Text style={[Textstyles.bold, styles.projectHeading]}>ENTER NEW PROJECT</Text>
                        </View>
                        <View style={styles.Line}></View>
                    </View>



                    <View style={styles.companyPickerContainer}>
                        <View style={{  marginTop: Platform.OS === 'ios' ? '0.5%' : '1.5%', alignSelf: 'flex-start', flexDirection: 'row', width: '40%' }}>
                            <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 18, }]}>Company:</Text>
                        </View>
                        <View style={{ width: '60%', left:'25%', }}>
                                <RNPickerSelect
                                    value={selectedCompany}
                                    Icon={()=>{
                                        return <Icon name="chevron-down" underlayColor="transparent" size={20} style={{top:5, right:5}} />
                                    }}
                                    placeholder={{
                                            label: 'Company Name',
                                            value: null,
                                        }}
                                    onValueChange={(itemValue, itemIndex) => {
                                        setSelectedCompany(itemValue)
                                        setText(listCompany[itemIndex - 1].label)

                                    }}
                                    // onValueChange={(itemValue, itemIndex) => changeSelectedCompany(itemValue)}
                                    items={listCompany}
                                    useNativeAndroidPickerStyle ={false}
                                    style={{
                                        inputAndroidContainer:{
                                            backgroundColor: "#fff", 
                                            width: '100%', 
                                            height: 40, 
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
                                            shadowColor:'gray',
                                        },

                                        inputIOS:{
                                            color:'black'
                                        },
                                        
                                        inputAndroid:{
                                            color:'black'
                                        },
                                        placeholder:{
                                            color:'black'
                                        },
                                    }}
                                />
                        </View>
                    </View>

                    <View style={styles.descView}>
                        <TextInput numberOfLines={3} placeholder='Company Description' placeholderTextColor="gray" style={styles.descInput} value={desc} onChangeText={(e)=>setDesc(e)} />
                    </View>

                    <View style={{ width: '90%', alignSelf: 'center', marginTop: '5%', flexDirection: 'row' }}>
                        <View style={{ width: '55%' }}>
                            <View style={{ flexDirection: 'row', flex: 1, top:'4%' }}>
                                <Text style={[Textstyles.normal, styles.detailText, { alignSelf: 'flex-start' }]}>Client ID:</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, top:'4%' }}>
                                <Text style={[Textstyles.normal, styles.detailText, { alignSelf: 'flex-start' }]}>Status:</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, top:'4%' }}>
                                <Text style={[Textstyles.normal, styles.detailText, { alignSelf: 'flex-start' }]}>Location:</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, top:'4%' }}>
                                <Text style={[Textstyles.normal, styles.detailText, { alignSelf: 'flex-start' }]}>GPS Tracking:</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, top:'4%' }}>
                                <Text style={[Textstyles.normal, styles.detailText, { alignSelf: 'flex-start' }]}>Manager:</Text>
                            </View>
                        </View>
                        <View style={{ width:'45%' }}>
                            <View style={{ 
                                flex: 1, 
                                alignSelf: 'flex-end',
                                backgroundColor: "#fff", 
                                width: '100%', 
                                height: Platform.OS === 'ios' ? 30 : 40, 
                                borderRadius: 10, 
                                borderColor: "#1b2041", 
                                borderWidth: 1, 
                                shadowColor: "gray",
                                marginBottom:'5%',
                                left:'5%'
                                }}>
                                <Text style={[Textstyles.normal, styles.detailText, { left:Platform.OS === 'ios' ? '4%' : '3%', top: Platform.OS === 'ios' ? '15%' : '20%' }]}>{arr4.internalid}</Text>
                            </View>
                            <View style={{ flex: 1, marginBottom:'5%',left:'5%' }}>
                                <RNPickerSelect
                                    value={selectedStatus}
                                    placeholder={{
                                            label: 'Select Status',
                                            value: null,
                                        }}
                                    onValueChange={(itemValue, itemIndex) => changeSelectedStatus(itemValue)}
                                    items={listStatus}
                                    useNativeAndroidPickerStyle ={false}
                                    Icon={()=>{
                                        return <Icon name="chevron-down" underlayColor="transparent" size={20} style={{top:5, right:5}} />
                                    }}
                                    style={{
                                        inputAndroidContainer:{
                                            backgroundColor: "#fff", 
                                            width: '100%', 
                                            height: Platform.OS === 'ios' ? 30 : 40, 
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
                                            color:'black'
                                        },
                                        placeholder:{
                                            color:'black'
                                        },
                                    }}
                                />
                            </View>
                            <View style={{ flex: 1, marginBottom:'5%', left:'5%' }}>
                                <RNPickerSelect
                                    value={selectedLocation}
                                    placeholder={{
                                            label: 'Select Location',
                                            value: null,
                                        }}
                                    onValueChange={(itemValue, itemIndex) => changeSelectedLocation(itemValue)}
                                    items={listLocation}
                                    useNativeAndroidPickerStyle ={false}
                                    Icon={()=>{
                                        return <Icon name="chevron-down" underlayColor="transparent" size={20} style={{top:5, right:5}} />
                                    }}
                                    style={{
                                        inputAndroidContainer:{
                                            backgroundColor: "#fff", 
                                            width: '100%', 
                                            height: Platform.OS === 'ios' ? 30 : 40, 
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
                                            color:'black'
                                        },
                                        placeholder:{
                                            color:'black'
                                        },
                                    }}
                                />
                            </View>
                            <View style={{ 
                                flex: 1, 
                                alignSelf: 'flex-end',
                                backgroundColor: "#fff", 
                                width: '100%', 
                                height: Platform.OS === 'ios' ? 30 : 40, 
                                borderRadius: 10, 
                                borderColor: "#1b2041", 
                                borderWidth: 1, 
                                shadowColor: "gray",
                                marginBottom:'5%',
                                left:'5%'
                                }}>
                                <Text style={[Textstyles.normal, styles.detailText, { left: Platform.OS === 'ios' ? '4%' : '3%', top: Platform.OS === 'ios' ? '15%' : '20%' }]}>Manual</Text>
                            </View>
                            <View style={{ flex: 1, marginBottom:'5%', left:'5%'}}>
                                <RNPickerSelect
                                    value={selectedManager}
                                    placeholder={{
                                            label: 'Select Manager',
                                            value: null,
                                        }}
                                    onValueChange={(itemValue, itemIndex) => changeSelectedManager(itemValue)}
                                    items={listManager}
                                    useNativeAndroidPickerStyle ={false}
                                    Icon={()=>{
                                        return <Icon name="chevron-down" underlayColor="transparent" size={20} style={{top:5, right:5}} />
                                    }}
                                    style={{
                                        placeholder:{
                                            color:'black'
                                        },
                                        inputAndroidContainer:{
                                            backgroundColor: "#fff", 
                                            width: '100%', 
                                            height: Platform.OS === 'ios' ? 30 : 40, 
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
                                            color:'black'
                                        }
                                    }}
                                />
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={{ flexDirection: "row", marginTop: '5%' }}>
                            <Text style={[Textstyles.bold, styles.projectHeading]}>PROJECT TIMELINE</Text>
                        </View>
                        <View style={{ borderWidth: 1, width: '95%', alignSelf: 'center', borderColor: '#1b2041', top: '2%' }}></View>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', marginStart: '2.5%', marginTop: '5%' }}>
                            <Text style={[Textstyles.bold, { width: "40%", color: '#1b2041', fontSize: 20 }]}>START</Text>
                            <TouchableOpacity 
                                onPress={()=>setStartDateShow(true)}
                                style={styles.dateSection}>
                                        {startDate ? (<Text style={[Textstyles.normal, styles.dateSelectionText]}>{startDate}</Text>)
                                        : (<Text style={[Textstyles.normal, styles.dateSelectionText]}>MM/DD/YYYY</Text>)}
                                        <Icon style={{marginTop:3}} name='calendar' size={20} color='#1b2041' />
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={()=>setStartTimeShow(true)} style={styles.timeSection}>
                                        {startTime ? (<Text style={[Textstyles.normal, styles.timeSelectionText]}>{startTime}</Text>)
                                        : (<Text style={[Textstyles.normal, styles.timeSelectionText]}>HH:MM</Text>)}
                                </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', marginStart: '2.5%', marginTop: '5%' }}>
                            <Text style={[Textstyles.bold, { width: "40%", color: '#1b2041', fontSize: 20 }]}>END</Text>
                            <TouchableOpacity onPress={()=>setEndDateShow(true)} style={styles.dateSection}>
                                        {endDate ? (<Text style={[Textstyles.normal, styles.dateSelectionText]}>{endDate}</Text>)
                                        :(<Text style={[Textstyles.normal, styles.dateSelectionText]}>MM/DD/YYYY</Text>)}
                                        <Icon style={{marginTop:3}} name='calendar' size={20} color='#1b2041' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>setEndTimeShow(true)} style={styles.timeSection}>
                                        {endTime ? (<Text style={[Textstyles.normal, styles.timeSelectionText]}>{endTime}</Text>)
                                        :(<Text style={[Textstyles.normal, styles.timeSelectionText]}>HH:MM</Text>)}
                                </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", margin: '2%', width: '100%' }}>
                        <Text style={[Textstyles.normal, { width: "30%", color: '#1b2041', fontSize:16 }]}>Billable:</Text>
                        <Text style={[Textstyles.normal, { width: "30%", textAlign: 'center', color: '#1b2041', fontSize:16, marginLeft:15 }]}>#Days</Text>
                        {/* <Text style={[Textstyles.normal, { width: "30%", textAlign: 'center', color: '#1b2041', fontSize:16, marginLeft:15 }]}>{`${diffDays} Days`}</Text> */}
                        <Text style={[Textstyles.normal, { width: "26%", textAlign: 'right', color: '#1b2041', fontSize:16 }]}>#Hours</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '10%' }}>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity onPress={()=>navigation.goBack('addNewProject')} style={styles.cancelButton}>
                                <Text style={[Textstyles.bold, { color: '#1b2041', textAlign: "center", fontSize: 22, top: "20%" }]}>CANCEL</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '50%' }}>
                            <TouchableOpacity style={styles.submitButton}
                                onPress={()=>handleSubmit()} >
                                <Text style={[Textstyles.bold, { color: "#fff", textAlign: "center", fontSize: 22, top: '20%' }]}>SUBMIT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </>
                    {/* )} */}
                </ScrollView>
                 {/* start date picker */}
                 {startDateShow && (
                    <DateTimePicker style={styles.datePicker} mode='date' value={new Date()} display='spinner' onChange={onStartChange} minimumDate={new Date()} textColor='black' />
                )}

                {/* end date picker */}
                {endDateShow && (
                    <DateTimePicker style={styles.datePicker} mode='date' value={new Date()} display='spinner' onChange={onEndChange} minimumDate={new Date()} textColor='black' />
                )}

                {/* start time picker */}
                {startTimeShow && (
                    <DateTimePicker style={styles.datePicker} timeZoneOffsetInMinutes={Platform.OS==='ios' ? 3030 : null} mode='time' value={new Date()} display='spinner' onChange={onStartTime} textColor='black' />
                )}

                {/* end time picker */}
                {endTimeShow && (
                    <DateTimePicker style={styles.datePicker} timeZoneOffsetInMinutes={Platform.OS==='ios' ? 3030 : null} mode='time' value={new Date()} display='spinner' onChange={onEndTime} textColor='black' />
                )}

                <Footer btnName='' projectLength = {project_List.length} timeOffLength = {timeOffDetail.length} />
            </ImageBackground>
        </View>
    )
}

export default addNewEntry

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
    projectHeading: {
        width: "59%",
        color: '#1b2041',
        fontSize: 20,
        marginStart: '2.5%',
    },
    Line: {
        borderWidth: 1,
        width: '95%',
        alignSelf: 'center',
        borderColor: '#1b2041',
        top: '2%'
    },
    companyPickerContainer: {
        width: '90%',
        marginTop: '3%',
        alignSelf: 'center',
        flexDirection: "row"
    },
    detailText: {
        color: '#1b2041',
        fontSize: 16,
    },

    datePicker: {
        backgroundColor:'#fff', 
        elevation:1,
    },

    descView: {
        backgroundColor: '#fff', 
        alignSelf: 'center', 
        width: '95%', 
        borderRadius: 10, 
        marginTop: "5%", 
        elevation:2, 
        shadowOffset:{width:0, height:2}, 
        shadowColor:'grey', 
        shadowOpacity:1,
        borderRadius: 10, 
        borderColor: "#1b2041", 
        borderWidth: 1,
    },

    descInput: {
        bottom: '30%', 
        margin: 5, 
        color: "#1b2041",
        height:60
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
        shadowOpacity:2
    },

    dateSelectionText: {
        alignSelf: 'center', 
        color: '#1b2041', 
        textAlign: 'center', 
        width: '80%'
    },

    timeSection: {
        backgroundColor: "#fff", 
        width: '23%', 
        height: 30, 
        borderRadius: 10, 
        borderColor: "#1b2041", 
        borderWidth: 1, 
        flexDirection: "row", 
        shadowColor: "gray", 
        elevation: 1, 
        marginLeft:5,
        paddingLeft:5,
        shadowOpacity:2,
        shadowOffset:{width:0, height:2}
    },

    timeSelectionText: {
        alignSelf: 'center', 
        color: '#1b2041', 
        textAlign: 'center', 
        width: '80%'
    },
    submitButton: {
        backgroundColor: '#1b2041', 
        borderRadius: 10, 
        height: 50, 
        width: '80%', 
        alignSelf: "center", 
        marginTop: '10%', 
        shadowColor: "gray", 
        elevation: 1
    },
    cancelButton: {
        backgroundColor: 'transparent', 
        borderRadius: 10, 
        height: 50, 
        width: '80%', 
        alignSelf: "center", 
        marginTop: '10%', 
        borderColor: '#1b2041', 
        borderWidth: 1, 
        marginBottom:'5%'
    }

})
