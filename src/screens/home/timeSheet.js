import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, Platform, FlatList, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../../../assets/footer/footer'
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select'
import { useNavigation } from '@react-navigation/core'
import HeaderMain from '../../../assets/headers/HeaderMain'
import Textstyles from '../../../assets/text/texts'
import Loader from '../../../assets/loader'
import { useSelector, useDispatch } from 'react-redux'
import { addNewTimeSheet, resetTimeSheet } from '../../redux/actions/postAction'
import { getTimeSheetbyWeek } from '../../redux/actions/getAction'
import moment from 'moment'
// import Icon from 'react-native-vector-icons/Feather'

const timeSheet = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [isEdit, setIsEdit] = useState('') //for edit
    const [dateShow, setDateShow] = useState('') //for edit
    const [taskShow, setTaskShow] = useState('') //for edit
    const [isLoading, setIsLoading] = useState(false)
    const [timeSheetRecord, settimeSheetRecord] = useState([])

    var listTimeOffType = [{ "label": "Development (Project Task)", "value": 1053 }, {
        "value": 1575,
        "label": "Development (RCCS) (Project Task)"
    }]

    const { isloading, project_List, employeeDetail, timeSheetData, timeSheetDataByWeek, timeOffDetail, timeSheetResponse } = useSelector((state) => ({
        isloading: state?.CommonReducer?.loading,
        project_List: state.EmployeeReducer.project_list,
        employeeDetail: state?.EmployeeReducer?.data,
        timeSheetData: state?.EmployeeReducer?.timesheet_list,
        timeSheetDataByWeek: state?.EmployeeReducer?.timesheet_list_by_week,
        timeOffDetail: state?.EmployeeReducer?.timeoff_list,
        timeSheetResponse: state?.postReducer?.timeSheetResp,
    }))

    const projectList = project_List !== undefined && project_List !== null && project_List !== ''
    const employee_data = employeeDetail !== undefined && employeeDetail !== null && employeeDetail
    const timeSheetDataByWeekData = timeSheetDataByWeek !== undefined && timeSheetDataByWeek !== null && timeSheetDataByWeek
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null

    useEffect(() => {
        settimeSheetRecord(timeSheetDataByWeekData)
        console.log(timeSheetDataByWeekData)
    }, [timeSheetDataByWeekData])

    useEffect(() => {
        if (Object.keys(timeSheetResponse).length > 0) {
            dispatch(resetTimeSheet())
            setIsLoading(false)
        }
    }, [timeSheetResponse])
    //timeSheetResponse

    const addIndex = () => {
        let val = [...timeSheetRecord]
        val[isEdit].rows .push({ "date": "", "duration": "", "task": { "text": "", "value": "" } })
        settimeSheetRecord(val)
    }

    const cancelEdit = () => {
        settimeSheetRecord(timeSheetDataByWeekData)
        setIsEdit('')
    }

    const onDateSelect = async (event, selectedDate) => {

        const currentDate = selectedDate;
        console.log(currentDate, "current-")
        const fullDate = await `${moment(currentDate).format("MM/DD/YYYY").toString()}`
        console.log(await `${moment(currentDate).format("MM/DD/YYYY").toString()}`)

        let newArr = [...timeSheetRecord];
        newArr[isEdit].rows[dateShow] = Object.assign({}, { duration: newArr[isEdit].rows[dateShow] ? newArr[isEdit].rows[dateShow].duration : '' },
            { date: fullDate },
            { task: newArr[isEdit].rows[dateShow] ? newArr[isEdit].rows[dateShow].task : '' }
        );
        // settimeSheetRecord(newArr)

        setDateShow('')
    };

    const updateFieldChangedHours = (item, i) => {
        console.log('ELITEMINDZZZZZZZZZZZ,', item, i, item);
        let newArr = [...timeSheetRecord];
        newArr[isEdit].rows[i] = Object.assign({}, { duration: item },
            { date: newArr[isEdit] && newArr[isEdit].rows[i] ? newArr[isEdit].rows[i].date : '' },
            { task: newArr[isEdit] && newArr[isEdit].rows[i] ? newArr[isEdit].rows[i].task : '' });
        //  console.log('++++++++++++++++++++++++++++', newArr)
        settimeSheetRecord(newArr)
    }

    const updateFieldChangedTask = (itemValue, i) => {
        let result = listTimeOffType.filter(obj => { return obj.value === itemValue })
        let newArr = [...timeSheetRecord];
        newArr[isEdit].rows[i] = Object.assign({}, { task: { value: itemValue, text: result[0] && result[0].label } },
            { date: newArr[isEdit] && newArr[isEdit].rows[i] ? newArr[isEdit].rows[i].date : '' },
            { duration: newArr[isEdit] && newArr[isEdit].rows[i] ? newArr[isEdit].rows[i].duration : '' });
        settimeSheetRecord(newArr);
    }

    const validateFields = () => {
        for (let c = 0; c < timeSheetRecord[isEdit].rows.length; c++) {
            if (timeSheetRecord[isEdit].rows[c]) {
                if (!timeSheetRecord[isEdit].rows[c].date) {
                    alert("Choose the date")
                    return false;
                }
                // else if (timeSheetRecord[isEdit].rows[c].duration) {
                //     console.log('----------------timeSheetRecord[isEdit----------', timeSheetRecord[isEdit].rows[c])
                //     alert("Enter the duration")
                //     return true;
                // }
                else if (!timeSheetRecord[isEdit].rows[c].task.value) {
                    alert("Enter the task")
                    return false;
                }
                else {
                    if (c == timeSheetRecord[isEdit].rows.length - 1) {
                        setIsEdit('')
                    }
                }
            }
        }
    }

    const handleSubmit = (item) => {
        console.log('GETTING ITEM IN HANDLE SUBMIT', item)
        const body =
        {
            "method": "posttimeoff",
            "internalid": "",
            "employee": employee_data?.internalid,
            "internalid": "403",
            "project_name": item.project_name,
            "totalhours": item.totalhours,
            "startdate": item.startdate,
            "enddate": item.enddate,
            "rows": item.rows
        }

        console.log("the body is ====>", body)
        setIsLoading(true)
        dispatch(addNewTimeSheet(body))
    }

    const goTosheet = (id) => {
        console.log('IDDDDDDDDDDDDDDDD', id)
        navigation.navigate('projectTimings', { employeeId: id })
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <HeaderMain name='  Time Sheet' projectLength={project_List?.length} timesheetLength={timeSheetData.length} />
                <ScrollView style={{ flexGrow: 1 }}>
                    {isLoading === true ? <Loader /> : (
                        <FlatList data={timeSheetRecord} renderItem={({ item, index }) => {
                            return (
                                <View style={{ borderWidth: 1, marginTop: 10, borderColor: 'grey', borderRadius: 10, width: '95%', alignSelf: 'center' }}>
                                    <View>
                                        <TouchableOpacity onPress={() => navigation.goBack()} >
                                            <Icon style={{ marginTop: 10, marginLeft: 10 }} name='arrow-left' size={20} color='#1b2041' />

                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: 'center', borderBottomWidth: 2, borderColor: '#1b2041', width: '97%', }}>
                                        <Text style={[Textstyles.bold, styles.projectHeading]}>{item.employee.text}</Text>
                                        <Text style={[Textstyles.bold, styles.projectTime]}>{item.totalhours} HOURS</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", marginTop: '2%' }}>
                                        <Text style={[Textstyles.normal, styles.weekHeading]}>Week of</Text>
                                        <Text style={[Textstyles.normal, styles.weekDate]}>{item.startdate.substring(0, 5)} - {item.enddate.substring(0, 5)}</Text>
                                    </View>

                                    {isEdit === index ?
                                        item.rows.map((itr, i) => (
                                            <View style={{ flexDirection: "row", width: '100%', marginTop: '2%', alignSelf: "center" }}>
                                                <TouchableOpacity onPress={() => setDateShow(i)} style={styles.dateSection}>
                                                    {itr.date ? (<Text style={[Textstyles.normal, styles.dateTimeText]}>{itr.date}</Text>)
                                                        : (<Text style={[Textstyles.normal, styles.dateTimeText]}>MM/DD/YYYY</Text>)}
                                                    <Icon style={{ marginTop: 10 }} name='calendar' size={20} color='#1b2041' />
                                                </TouchableOpacity>
                                                {/* {console.log('-----------------------', itr.duration.toString())} */}
                                                <View style={styles.numSectionn}>
                                                    <TextInput placeholder='Hours' placeholderTextColor="black" style={styles.descInput} value={itr.duration} onChangeText={(text) => updateFieldChangedHours(text, i)} />
                                                    {/* stoString() */}
                                                </View>

                                                <View style={{ flex: 1 }}>
                                                    <RNPickerSelect
                                                        placeholder={{
                                                            label: itr?.task?.text?.substring(0, 22),
                                                            value: null
                                                        }}
                                                        value={itr.task.value}
                                                        onValueChange={(itemValue) => {
                                                            updateFieldChangedTask(itemValue, i)
                                                        }}
                                                        items={listTimeOffType}
                                                        useNativeAndroidPickerStyle={false}
                                                        Icon={() => {
                                                            return <Icon name="chevron-down" underlayColor="transparent" size={18} style={{ right: 5 }} />
                                                        }}
                                                        style={{
                                                            inputAndroidContainer: {
                                                                // width: '100%',
                                                                fontSize: 9,
                                                                justifyContent: 'center',
                                                                height: Platform.OS === 'ios' ? 40 : 40,
                                                                borderRadius: 10,
                                                                borderColor: "#1b2041",
                                                                borderWidth: 1,
                                                                paddingBottom: 3,
                                                                shadowColor: "gray",
                                                                marginTop: 5
                                                            },
                                                            inputIOSContainer: {
                                                                backgroundColor: '#fff',
                                                                fontSize: 9,
                                                                // width: 150,
                                                                // height: 40,
                                                                // padding:6,
                                                                borderRadius: 10,
                                                                borderColor: '#1b2041',
                                                                borderWidth: 1,
                                                                shadowColor: 'gray'
                                                            },

                                                            inputIOS: {
                                                                color: 'black',
                                                                fontSize: 9,
                                                            },

                                                            inputAndroid: {
                                                                color: 'black',
                                                                paddingTop: 1,
                                                                paddingLeft: 10,
                                                                fontSize: 9,
                                                                paddingRight: 10,
                                                                // width:'100%',
                                                                // height:'100%',
                                                                flex: 1,
                                                                paddingBottom: 0,
                                                                paddingRight: 0,
                                                            },
                                                            placeholder: {
                                                                color: 'black'
                                                            },
                                                        }}
                                                    />
                                                </View>


                                                {i == 0 ?
                                                    <TouchableOpacity style={{ width: '5%' }} onPress={() => addIndex()} >
                                                        <Icon style={{ marginTop: 13 }} name='plus' size={20} color='#1b2041' />
                                                    </TouchableOpacity>
                                                    :
                                                    <View style={{ width: '5%' }} />
                                                }

                                            </View>
                                        ))
                                        :
                                        item.rows.map((itr) => (
                                            <View style={{ flexDirection: "row", width: '100%', flex: 1, marginTop: '3%', }}>
                                                <Text style={[Textstyles.normal, styles.detailSide]}>{itr.date} :</Text>
                                                <Text style={[Textstyles.normal, styles.detailMid]}>{itr.duration} Hours </Text>
                                                <Text style={[Textstyles.normal, styles.detailSide1]}>{itr.task.text}</Text>
                                            </View>
                                        ))
                                    }
                                    {isEdit === index ?
                                        <View style={{ flexDirection: 'row', marginTop: "4%", marginBottom: 10 }}>
                                            <View style={{ width: '50%', }}>
                                                <TouchableOpacity onPress={() => cancelEdit()} style={{ width: '75%', borderColor: '#1b2041', borderWidth: 2, borderRadius: 10, alignSelf: "center" }}>
                                                    <Text style={[Textstyles.bold, styles.editButton]}>CANCEL</Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={{ width: "50%" }}>
                                                <TouchableOpacity onPress={() => validateFields()} style={{ width: '75%', alignSelf: 'center', borderRadius: 10, backgroundColor: '#1b2041', padding: Platform.OS === 'ios' ? '1.3%' : '1.3%' }} >
                                                    <Text style={[Textstyles.bold, styles.submitButton]}>CONFIRM</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        :
                                        <View style={{ flexDirection: 'row', marginTop: "4%", marginBottom: 10 }}>
                                            <View style={{ width: '50%', }}>
                                                <TouchableOpacity onPress={() => setIsEdit(index)} style={{ width: '75%', borderColor: '#1b2041', borderWidth: 2, borderRadius: 10, alignSelf: "center" }}>
                                                    <Text style={[Textstyles.bold, styles.editButton]}>EDIT</Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={{ width: "50%" }}>
                                                <TouchableOpacity style={{ width: '75%', alignSelf: 'center', borderRadius: 10, backgroundColor: '#1b2041', padding: Platform.OS === 'ios' ? '1.3%' : '1.3%' }}
                                                    onPress={() => goTosheet(item?.employee?.value)}
                                                >
                                                    {/* {console.log('GETING EMOLOYEEE VALUEEEE HERE------', item)} */}
                                                    <Text style={[Textstyles.bold, styles.submitButton]}>SUBMIT</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    }

                                </View>
                            )
                        }}
                        />
                    )}
                </ScrollView>


                {dateShow !== '' && (
                    <DateTimePicker style={styles.datePicker} mode='date' value={new Date()} display='spinner' onChange={onDateSelect} />
                )}

                {taskShow !== '' && (
                    <DateTimePicker style={styles.datePicker} mode='date' value={new Date()} display='spinner' onChange={onDateSelect} />
                )}

                <Footer btnName="" projectLength={project_List?.length} timeOffLength={timeOffDetail.length} />

            </ImageBackground>
        </View>
    )
}

export default timeSheet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },

    header: {
        backgroundColor: '#ffff',
        width: '100%',
        justifyContent: 'center',
        height: 90,
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

    title: {
        color: '#000',
        fontSize: 24,
        alignSelf: 'center',
    },

    detailSide: {
        width: "30%",
        textAlign: 'center',
        // backgroundColor:'green',
        color: '#1b2041'
    },
    detailSide1: {
        width: "40%",
        // textAlign: 'center',
        color: '#1b2041',
        // backgroundColor:'yellow'
    },
    detailMid: {
        width: "30%",
        textAlign: "center",
        // backgroundColor:'pink',
        color: '#1b2041'
    },

    projectHeading: {
        width: "59%",
        color: '#1b2041',
        fontSize: 18,
        // marginStart: '2.5%',
    },

    projectTime: {
        width: "50%",
        textAlign: 'center',
        color: '#1b2041',
        fontSize: 18,
    },

    submitButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    },

    editButton: {
        textAlign: 'center',
        color: '#1b2041',
        fontSize: 20,
    },

    weekHeading: {
        width: "59%",
        color: '#1b2041',
        fontSize: 16,
        fontWeight: '600',
        marginStart: '2.5%',
        textDecorationLine: 'underline'
    },

    weekDate: {
        width: "59%",
        color: '#1b2041',
        fontSize: 16,
        marginStart: '9%',
        fontWeight: '600',
        textDecorationLine: 'underline'
    },
    datePicker: {
        backgroundColor: '#fff',
        elevation: 1
    },
    dateTimeText: {
        alignSelf: 'center',
        color: '#1b2041',
        textAlign: 'center',
        width: '80%'
    },
    dateSection: {
        backgroundColor: "#fff",
        width: '32%',
        margin: 5,
        height: 40,
        borderRadius: 10,
        borderColor: "#1b2041",
        borderWidth: 1,
        flexDirection: "row",
        shadowColor: "gray",
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2,
    },

    numSectionn: {
        backgroundColor: "#fff",
        width: '15%',
        margin: 5,
        height: 40,
        borderRadius: 10,
        borderColor: "#1b2041",
        borderWidth: 1,
        flexDirection: "row",
        shadowColor: "gray",
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2,
    },

    descView: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        width: '95%',
        borderRadius: 10,
        marginTop: "2%",
        marginBottom: "2%",
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'grey',
        shadowOpacity: 1
    },

    descInput: {
        color: "#1b2041",
        width: '100%',
        fontSize: 12,
        alignSelf: 'center',
        textAlign: 'center'
    },

})





// return (
//     <View style={styles.container}>
//         <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
//             <HeaderMain name='  Time Sheet' />
//             <ScrollView style={{ flexGrow: 1 }}>
//             {timeSheetData != '' ? (
//                 <>
//                 <FlatList data={timeSheetData} renderItem={({item,index})=>{
//                     console.log("the item===>", item)
//                     return(
//                     <View>
//                         <View style={{ flexDirection: "row", marginTop: '2%' }}>
//                             <Text style={[Textstyles.bold, styles.projectHeading]}>{item?.project?.text}</Text>
//                             <Text style={[Textstyles.bold, styles.projectTime]}>{`${item?.duration} Hours`}</Text>
//                         </View>

//                         <View style={{ borderWidth: 1, width: '95%', alignSelf: 'center', borderColor: '#1b2041', top: '2%' }} />

//                         <View style={{ flexDirection: "row", marginTop: '2%' }}>
//                             <Text style={[Textstyles.normal, styles.weekHeading]}>Week of:</Text>
//                             <Text style={[Textstyles.normal, styles.weekDate]}>06/06-06/12</Text>
//                         </View>

//                         <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                             <Text style={[Textstyles.normal, styles.detailSide]}>06/07:</Text>
//                             <Text style={[Textstyles.normal, styles.detailMid]}>8 Hours</Text>
//                             <Text style={[Textstyles.normal, styles.detailSide]}>Regular</Text>
//                         </View>

//                         <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                             <Text style={[Textstyles.normal, styles.detailSide]}>06/08:</Text>
//                             <Text style={[Textstyles.normal, styles.detailMid]}>10 Hours</Text>
//                             <Text style={[Textstyles.normal, styles.detailSide]}>Regular</Text>
//                         </View>

//                         <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                             <Text style={[Textstyles.normal, styles.detailSide]}>06/09:</Text>
//                             <Text style={[Textstyles.normal, styles.detailMid]}>8 Hours</Text>
//                             <Text style={[Textstyles.normal, styles.detailSide]}>PTO</Text>
//                         </View>

//                         <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                             <Text style={[Textstyles.normal, styles.detailSide]}>06/10:</Text>
//                             <Text style={[Textstyles.normal, styles.detailMid]}>6 Hours</Text>
//                             <Text style={[Textstyles.normal, styles.detailSide]}>Regular</Text>
//                         </View>

//                         <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                             <Text style={[Textstyles.normal, styles.detailSide]}>06/11:</Text>
//                             <Text style={[Textstyles.normal, styles.detailMid]}>8 Hours</Text>
//                             <Text style={[Textstyles.normal, styles.detailSide]}>Regular</Text>
//                         </View>

//                         <View style={{ flexDirection: 'row', marginTop: "2%" }}>
//                             <View style={{ width: '50%', }}>
//                                 <TouchableOpacity style={{ width: '75%', borderColor: '#1b2041', borderWidth: 2, borderRadius: 10, alignSelf: "center" }}>
//                                     <Text style={[Textstyles.bold, styles.editButton]}>EDIT</Text>
//                                 </TouchableOpacity>
//                             </View>

//                             <View style={{ width: "50%" }}>
//                                 <TouchableOpacity style={{ width: '75%', alignSelf: 'center', borderRadius:10, backgroundColor: '#1b2041', padding: Platform.OS === 'ios' ? '1.3%' : '1.3%' }} onPress={() => navigation.navigate('projectTimings')}>
//                                     <Text style={[Textstyles.bold, styles.submitButton]}>SUBMIT</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                     )
//                 }} />
//                 {/* <View>
//                     <View style={{ flexDirection: "row", marginTop: '2%' }}>
//                         <Text style={[Textstyles.bold, styles.projectHeading]}>XYZ Parts Inc.</Text>
//                         <Text style={[Textstyles.bold, styles.projectTime]}>40 HOURS</Text>
//                     </View>

//                     <View style={{ borderWidth: 1, width: '95%', alignSelf: 'center', borderColor: '#1b2041', top: '2%' }}></View>

//                     <View style={{ flexDirection: "row", marginTop: '2%' }}>
//                         <Text style={[Textstyles.normal, styles.weekHeading]}>Week of:</Text>
//                         <Text style={[Textstyles.normal, styles.weekDate]}>06/06-06/12</Text>
//                     </View>

//                     <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>06/07:</Text>
//                         <Text style={[Textstyles.normal, styles.detailMid]}>8 Hours</Text>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>Regular</Text>
//                     </View>
//                     <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>06/08:</Text>
//                         <Text style={[Textstyles.normal, styles.detailMid]}>10 Hours</Text>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>Regular</Text>
//                     </View>
//                     <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>06/09:</Text>
//                         <Text style={[Textstyles.normal, styles.detailMid]}>8 Hours</Text>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>PTO</Text>
//                     </View>
//                     <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>06/10:</Text>
//                         <Text style={[Textstyles.normal, styles.detailMid]}>6 Hours</Text>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>Regular</Text>
//                     </View>
//                     <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>06/10:</Text>
//                         <Text style={[Textstyles.normal, styles.detailMid]}>8 Hours</Text>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>Regular</Text>
//                     </View>

//                     <View style={{ flexDirection: 'row', marginTop: "2%" }}>
//                         <View style={{ width: '50%', }}>
//                             <TouchableOpacity style={{ width: '75%', borderColor: '#1b2041', borderWidth: 2, borderRadius: 10, alignSelf: "center" }}>
//                                 <Text style={[Textstyles.bold, styles.editButton]}>EDIT</Text>
//                             </TouchableOpacity>
//                         </View>

//                         <View style={{ width: "50%" }}>
//                             <TouchableOpacity style={{ width: '75%', alignSelf: 'center', borderRadius:10, backgroundColor: '#1b2041', padding: Platform.OS === 'ios' ? '1.3%' : '1.3%' }} onPress={() => navigation.navigate('projectTimings')}>
//                                 <Text style={[Textstyles.bold, styles.submitButton]}>SUBMIT</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </View>

//                 <View>
//                     <View style={{ flexDirection: "row", marginTop: '10%' }}>
//                         <Text style={[Textstyles.bold, styles.projectHeading]}>XYZ Parts Inc.</Text>
//                         <Text style={[Textstyles.bold, styles.projectTime]}>40 HOURS</Text>
//                     </View>

//                     <View style={{ borderWidth: 1, width: '95%', alignSelf: 'center', borderColor: '#1b2041', top: '2%' }}></View>

//                     <View style={{ flexDirection: "row", marginTop: '2%' }}>
//                         <Text style={[Textstyles.normal, styles.weekHeading]}>Week of:</Text>
//                         <Text style={[Textstyles.normal, styles.weekDate]}>06/06-06/12</Text>
//                     </View>

//                     <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>06/07:</Text>
//                         <Text style={[Textstyles.normal, styles.detailMid]}>8 Hours</Text>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>Regular</Text>
//                     </View>
//                     <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>06/08:</Text>
//                         <Text style={[Textstyles.normal, styles.detailMid]}>10 Hours</Text>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>Regular</Text>
//                     </View>
//                     <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>06/09:</Text>
//                         <Text style={[Textstyles.normal, styles.detailMid]}>8 Hours</Text>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>PTO</Text>
//                     </View>
//                     <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>06/10:</Text>
//                         <Text style={[Textstyles.normal, styles.detailMid]}>6 Hours</Text>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>Regular</Text>
//                     </View>
//                     <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>06/10:</Text>
//                         <Text style={[Textstyles.normal, styles.detailMid]}>8 Hours</Text>
//                         <Text style={[Textstyles.normal, styles.detailSide]}>Regular</Text>
//                     </View>

//                     <View style={{ flexDirection: 'row', marginTop: "2%" }}>
//                         <View style={{ width: '50%', }}>
//                             <TouchableOpacity style={{ width: '75%', borderColor: '#1b2041', borderWidth: 2, borderRadius: 10, alignSelf: "center" }}>
//                                 <Text style={[Textstyles.bold, styles.editButton]}>EDIT</Text>
//                             </TouchableOpacity>
//                         </View>

//                         <View style={{ width: "50%" }}>
//                             <TouchableOpacity style={{ width: '75%', alignSelf: 'center', borderRadius:10, backgroundColor: '#1b2041', padding: Platform.OS === 'ios' ? '1.3%' : '1.3%' }}>
//                                 <Text style={[Textstyles.bold, styles.submitButton]}>SUBMIT</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </View> */}
//                 </>
//                 ):(
//                     <View style={{alignItems:'center', marginTop:'10%'}}>
//                         <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>No record found</Text>
//                     </View>
//                 )}
//             </ScrollView>
//             <Footer btnName=""/>

//         </ImageBackground>
//     </View>
// )
