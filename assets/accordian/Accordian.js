import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import DateTimePicker from '@react-native-community/datetimepicker';
import Textstyles from '../text/texts'
import { useNavigation } from '@react-navigation/core'
import Loader from '../loader'
import { useSelector, useDispatch } from 'react-redux'
import { addNewTimeSheet, resetTimeSheet} from '../../src/redux/actions/postAction'
import moment from 'moment'
const Accordian = (props) => {
// console.log('GETTING STAUCKKKK IN FIELD OF THERE', props)
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [Expand, setExpand] = useState(false)
    const [isEdit, setIsEdit] = useState('') //for edit 
    const [dateShow, setDateShow] = useState('') //for edit 
    const [isLoading, setIsLoading] = useState(false)
    const [propsVal, setPropsVal] = useState(props.data)

    const { employeeDetail, timeSheetResponse } = useSelector((state) => ({
        employeeDetail : state?.EmployeeReducer?.data,
        timeSheetResponse : state?.postReducer?.timeSheetResp,
    }))

    const employee_data = employeeDetail !== undefined && employeeDetail !== null && employeeDetail

    useEffect(() => {
        if(Object.keys(timeSheetResponse).length > 0){
            dispatch(resetTimeSheet())
            setIsLoading(false)
        }
    }, [timeSheetResponse])


    const toggleExpand = () => {
        setExpand(!Expand)

        console.log("TOGGLE HIT")
    }


    const addIndex = (i) => {   
        let val = {...propsVal}
        val.subData.push({"date": "", "hours": "", "task": "", "type": ""})
        setPropsVal(val)
    }

    const cancelEdit = () => {
        let newArr = {...propsVal}
        newArr.subData = props.dataBkp
        console.log(props.dataBkp)
        setPropsVal(newArr)
        setIsEdit('')
    }

    const onDateSelect = async(event, selectedDate) => {
        const currentDate = selectedDate;
        const fullDate = await `${moment(currentDate).format('L')}`

        let newArr = {...propsVal}
    	newArr.subData[dateShow] = Object.assign({}, {hours:  newArr && newArr.subData[dateShow] ? newArr.subData[dateShow].hours : ''},
                                                      {date:  fullDate},
                                                      {type:  newArr && newArr.subData[dateShow] ? newArr.subData[dateShow].type : ''},
										              {task:  newArr && newArr.subData[dateShow] ? newArr.subData[dateShow].task : ''});
    	setPropsVal(newArr);
        setDateShow('')
    };

    const updateFieldChangedHours = (item, i) => {
    	let newArr = {...propsVal}
    	newArr.subData[i] = Object.assign({}, {hours: Number(item)},
                                           {date:  newArr && newArr.subData[i] ? newArr.subData[i].date : ''},
                                           {type:  newArr && newArr.subData[i] ? newArr.subData[i].type : ''},
										   {task:  newArr && newArr.subData[i] ? newArr.subData[i].task : ''});
    	setPropsVal(newArr);
     }

     const updateFieldChangedTask = (item, i) => {
    	let newArr = {...propsVal}
    	newArr.subData[i] = Object.assign({}, {task: item},
                                           {date:  newArr && newArr.subData[i] ? newArr.subData[i].date : ''},
                                           {type:  newArr && newArr.subData[i] ? newArr.subData[i].type : ''},
										   {hours:  newArr && newArr.subData[i] ? newArr.subData[i].hours : ''});
    	setPropsVal(newArr);
     }

     const updateFieldChangedType = (item, i) => {
    	let newArr = {...propsVal}
    	newArr.subData[i] = Object.assign({}, {type: item},
                                           {date:  newArr && newArr.subData[i] ? newArr.subData[i].date : ''},
                                           {task:  newArr && newArr.subData[i] ? newArr.subData[i].task : ''},
										   {hours:  newArr && newArr.subData[i] ? newArr.subData[i].hours : ''});
    	setPropsVal(newArr);
     }

     const validateFields = () => {
            for(let c=0; c < propsVal.subData.length; c++){
                if(propsVal.subData[c]){
                    if(!propsVal.subData[c].date){
                        alert("Choose the date")
                        return false;
                    }
                    else if (!propsVal.subData[c].type) {
                        alert("Enter the type")
                        return false;
                    }
                    else if (!propsVal.subData[c].hours) {
                        alert("Enter the hours")
                        return false;
                    }
                    else if (!propsVal.subData[c].task) {
                        alert("Enter the task")
                        return false;
                    }
                    else {
                        if(c == propsVal.subData.length - 1){
                            setIsEdit('')
                        }
                    }
                }
            }
            }

            const handleSubmit = (item) => {
                const body = 
                {
                    "method": "posttimeoff",
                    "internalid": "",
                    "employee": employee_data?.internalid,
                    "internalid": "403",
                    "project_name": item.project_name,
                    "totalHrs": item.totalHrs,
                    "startdate": item.startdate,
                    "enddate": item.enddate,
                    "comany_name": item.comany_name,
                    "subData": item.subData
                }
        
                console.log("the body is ====>", body)
                setIsLoading(true)
                dispatch(addNewTimeSheet(body))
            }
let color1 =  props.dataBkp?.status?.value 

    return (
        <>
            <View style={styles.Container}>
                {color1 != 'Unbilled' ?
                <View  style={{ 
                   backgroundColor: 'green', 
                    height: 40, width: 3.5, margin: '2%', left: '5%' }}></View>
                    :
                    <View  style={{ 
                        backgroundColor: 'red', 
                         height: 40, width: 3.5, margin: '2%', left: '5%' }}></View>
                    }

                <View style={{ width: '55%', flexDirection: 'column', left: '2%', alignSelf: 'center', left: '15%' }}>
                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 18 }]}>
                        {props?.dataBkp?.employee?.text}
                        </Text>
                    <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 15 }]}>
                        {props?.dataBkp?.startdate}
                        </Text>
                </View>

                <View style={{ width: '30%', height:48, flexDirection: 'column', alignSelf: 'center' }}>
                   { props?.dataBkp?.status?.value === 'Billed' ?
                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 19, textAlign:'right' }]}>
                        {/* {props?.dataBkp?.status?.value} */}
                        Approved
                        </Text>
                        : props?.dataBkp?.status?.value === 'Unbilled' ?
                        <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 19, textAlign:'right' }]}>
                        {/* {props?.dataBkp?.status?.value} */}
                        Pending 
                        </Text>
                        : 
                        <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 19, flex:1, textAlign:'right' }]}>
                        {/* {props?.dataBkp?.status?.value} */}
                        Pending Due
                        </Text>
                    }
                    <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 15, textAlign:'right' }]}>
                    {props?.dataBkp?.totalhours} Hrs
                        </Text>
                </View>
                    {console.log('GETTING STATUSSSS------', props?.dataBkp?.status?.value)}
                <TouchableOpacity style={{ width: '10%', left: '5%', alignSelf: 'center' }} onPress={() => toggleExpand()}>
                    <Icon size={36} name={Expand ? "chevron-down" : "chevron-right"} style={{ color: '#1b2041' }} />
                </TouchableOpacity>
            </View>
            {/* {console.log('GETTINGG EXPANDDD VALUEWWWW', props?.data)} */}
            {
                Expand &&

                <View style={{borderBottomRightRadius:10, top:-15, borderBottomLeftRadius:10, borderTopColor: 'transparent', borderColor: 'gray', borderWidth: 1, width:'90%', alignSelf:'center'}}>
                    {
                         props?.dataBkp.rows.map((item) => (
                                                    <View style={styles.detailContainer}>
                                                        {console.log('yyyyyyyyyyyyyyy', item)}
                                                        <Text style={[Textstyles.normal, styles.detailSideTop]}>
                                                            {item?.date.substring(0, 5)} 
                                                            :</Text>
                                                        {/* <Text style={[Textstyles.normal, styles.detailSideActivity]}>
                                                           
                                                          heet  </Text> */}
                                                        <Text style={[Textstyles.normal, styles.detailSideMid]}>
                                                            {item?.duration} 
                                                            Hrs</Text>
                                                        <Text style={[Textstyles.normal, styles.detailSideBottom]}>
                                                            {item?.task?.text}
                                                            </Text>
                                                    </View>
                                                    ))
                                                    
                    }
                </View>
                
                // <View style={styles.ExpandContainer}>
                //       {isEdit !== '' ? 
                //                     props?.dataBkp.rows.map((itr, i) => (
                //                         <View style={{ flexDirection: "row", marginTop: '2%', alignSelf: "center" }}>
                //                              <TouchableOpacity onPress={()=>setDateShow(i)} style={styles.dateSection}>
                //                                     {itr.date ? (<Text style={[Textstyles.normal, styles.dateTimeText]}>{itr.date.substring(0, 5)}</Text>)
                //                                     :(<Text style={[Textstyles.normal, styles.dateTimeText]}>MM/DD</Text>)}
                //                                     <Icon style={{marginTop:10}} name='calendar' size={15} color='#1b2041' />
                //                             </TouchableOpacity>

                //                             <View style={styles.dateSection}>
                //                                 <TextInput placeholder='Task' placeholderTextColor="black" style={styles.descInput} value={itr.type.toString()} onChangeText={(text)=>updateFieldChangedType(text, i)} />
                //                             </View>

                //                             <View style={styles.numSectionn}>
                //                                 <TextInput keyboardType={"number-pad"} placeholder='Hours' placeholderTextColor="black" style={styles.descInput} value={itr.hours.toString()} onChangeText={(text)=>updateFieldChangedHours(text, i)} />
                //                             </View>

                //                             <View style={styles.dateSection}>
                //                                 <TextInput placeholder='Task' placeholderTextColor="black" style={styles.descInput} value={itr.task.toString()} onChangeText={(text)=>updateFieldChangedTask(text, i)} />
                //                             </View>

                //                             {i == 0 ?
                //                             <TouchableOpacity  style={{width:'5%'}} onPress={()=>addIndex(i)} >
                //                                     <Icon style={{marginTop:10}} name='plus' size={20} color='#1b2041' />
                //                             </TouchableOpacity>
                //                             :
                //                             <View style={{width:'5%'}} />
                //                             }

                //                         </View>
                //                         ))
                //                         :
                //                         props?.dataBkp.rows.map((itr) => (
                //                         <View style={styles.detailContainer}>
                //                             <Text style={[Textstyles.normal, styles.detailSideTop]}>{itr?.date.substring(0, 5)} :</Text>
                //                             <Text style={[Textstyles.normal, styles.detailSideActivity]}>{itr?.type}</Text>
                //                             <Text style={[Textstyles.normal, styles.detailSideMid]}>{itr?.hours} Hours</Text>
                //                             <Text style={[Textstyles.normal, styles.detailSideBottom]}>{itr?.task}</Text>
                //                         </View>
                //                         ))
                //                         }


                //     {isEdit !== '' ? 
                //      <View style={{ flexDirection: 'row', width: '100%', margin: 10 }}>
                //      <TouchableOpacity onPress={()=> cancelEdit() }  style={styles.editButton}>
                //          <Text style={[Textstyles.normal, styles.editBtnText]}>CANCEL</Text>
                //      </TouchableOpacity>

                //      <TouchableOpacity onPress={()=> validateFields()} style={styles.submitButton}>
                //          <Text style={[Textstyles.normal, { textAlign: "center", color: "#fff", textAlignVertical: 'center', marginTop: '2.5%' }]}>CONFIRM</Text>
                //      </TouchableOpacity>
                //  </View>
                //  :

                //     <View style={{ flexDirection: 'row', width: '100%', margin: 10 }}>
                //         <TouchableOpacity onPress={()=> setIsEdit(propsVal.index) } style={styles.editButton}>
                //             <Text style={[Textstyles.normal, styles.editBtnText]}>EDIT</Text>
                //         </TouchableOpacity>

                //         <TouchableOpacity style={styles.submitButton}>
                //             <Text style={[Textstyles.normal, { textAlign: "center", color: "#fff", textAlignVertical: 'center', marginTop: '2.5%' }]}>SUBMIT</Text>
                //         </TouchableOpacity>
                //     </View>
                //     }
                // </View>
            }


                {dateShow !== '' && (
                    <DateTimePicker style={styles.datePicker} mode='date' value={new Date()} display='spinner' onChange={onDateSelect} />
                )}
        </>
    )
}

export default Accordian

const styles = StyleSheet.create({
    detailContainer: {
        width: '100%', 
        flexDirection: "row", 
        marginTop: '2%', 
        alignSelf: "center",
        borderColor:'grey',
        
    },

    detailSideTop: {
        width: '20%',
        textAlign: 'center',
        color: '#1b2041'
    },

    detailSideActivity: {
        width:'15%',
        textAlign:'center',
        color:'#1b2041'
    },

    detailSideMid: {
        width: '35%',
        textAlign: 'center',
        color: '#1b2041'
    },
    detailSideBottom: {
        width: '35%',
        textAlign: 'center',
        color: '#1b2041'
    },
    submitButton: {
        backgroundColor: '#1b2041',
        width: '40%',
        borderRadius: 10,
        height: 25,
        marginLeft: '13%'
    },
    editButton: {
        width: "40%",
        borderRadius: 10,
        height: 25,
        borderColor: '#1b2041',
        borderRadius: 10,
        borderWidth: 1,
    },
    editBtnText: {
        textAlign: "center",
        borderColor: '#1b2041',
        textAlignVertical: 'center',
        marginTop: '2.5%',
        color: '#1b2041'
    },
    Container: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        width: '95%',
        height: 55,
        // marginTop:10
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: '4%',
        flex: 1,
        opacity: 0.9,
    },
    ExpandContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '100%',
        alignSelf: 'center',
        borderTopColor: 'transparent',
        // borderRadius: 10,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        // bottom:'5%',
        // marginTop:10
    },
    datePicker: {
        backgroundColor:'#fff', 
        elevation:1
    },
    dateTimeText: {
        alignSelf: 'center', 
        color: '#1b2041', 
        textAlign: 'center', 
        width: '80%'
    },
    dateSection: {
        backgroundColor: "#fff", 
        width: '24%',
        margin: 2, 
        height: 40, 
        borderRadius: 10, 
        borderColor: "#1b2041", 
        borderWidth: 1, 
        flexDirection: "row", 
        shadowColor: "gray", 
        elevation: 2,
        shadowOffset:{width:0, height:2},
        shadowOpacity:2,
    },

    numSectionn: {
        backgroundColor: "#fff", 
        width: '10%',
        margin: 2, 
        height: 40, 
        borderRadius: 10, 
        borderColor: "#1b2041", 
        borderWidth: 1, 
        flexDirection: "row", 
        shadowColor: "gray", 
        elevation: 2,
        shadowOffset:{width:0, height:2},
        shadowOpacity:2,
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
        color: "#1b2041",
        width: '100%'
    },
})
