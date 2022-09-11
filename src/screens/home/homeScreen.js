import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, FlatList, Modal, Image, BackHandler, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Footer from '../../../assets/footer/footer'
import HeaderMain from '../../../assets/headers/HeaderMain'
import HomeAccordian from '../../../assets/accordian/HomeAccordian'
import Textstyles from '../../../assets/text/texts'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getCompany, getEmployee, getManager, getProject, getProjectList, getProjectLocation, getProjectStatus, getTimeOff, getTimeSheet, getTimeSheetbyWeek } from '../../redux/actions/getAction'
import moment from 'moment'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import RNPickerSelect from 'react-native-picker-select';
import SoundPlayer from 'react-native-sound-player'

const homeScreen = (props) => {

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [employeeData, setEmployeeData] = useState('') //for storing employee data
    const [companyName, setCompanyName] = useState('') //for showing map
    const [lat, setLat] = useState('') //for storing latitude
    const [long, setLong] = useState('') //for storing longitude
    const [button, setButton] = useState('Start') //for showing start and stop button
    const [SaveConfig, setSaveConfig] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [timerCount, setTimer] = useState()
    const [take, getTake] = useState(false)

// console.log('GET NOTIFICATION', take);



// const runCountDown = () => {
//     timerCount -= 1;
//     renderTime();
  
//     // timeout on zero
//     if (timerCount === 0) {
//       stopTimer();
//       // Play alarm on timeout
//       timeoutAudio.play();
//       timerCount = defaultValue;
//     }
//   };


useEffect(() => {
    const backAction = () => {
        Alert.alert('Hold on!', "Are you sure you want to exit?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };
    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );

    return () => backHandler.remove();
}, []);



    useEffect(() => {
        let interval = setInterval(() => {
          setTimer(lastTimerCount => {
              lastTimerCount <= 1 && clearInterval(interval)
              return lastTimerCount - 1
          })
        }, 1000) //each count lasts for a second
        //cleanup the interval on complete
        return () => clearInterval(interval)
      }, []);


    const { project_List, employeeDetail, timeSheetData, all_project_list, getting_data, timeOffDetail } = useSelector((state) => ({
        project_List : state.EmployeeReducer.project_list,
        employeeDetail : state?.EmployeeReducer?.data,
        timeSheetData : state?.EmployeeReducer?.timesheet_list,
        all_project_list : state?.EmployeeReducer?.all_projects,
        getting_data : state?.EmployeeReducer?.project_data,
        timeOffDetail: state?.EmployeeReducer?.timeoff_list,
    }))

    const projectList = project_List !== undefined && project_List !== null && project_List !== '' && project_List !== {} && project_List !== [] && project_List !== "" && project_List
    const employee_data = employeeDetail !== undefined && employeeDetail !== null && employeeDetail !== [] && employeeDetail !== {} && employeeDetail !== "" && employeeDetail
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null
    const projects = all_project_list !== undefined && all_project_list !== null && all_project_list !== {} && all_project_list !== [] && all_project_list !== "" && all_project_list
    const get_data = getting_data !== undefined && getting_data !== null && getting_data !== {} && getting_data !== [] && getting_data !== ''

    // console.log("the project list length through home====>", projectList.length, "the project_list length is ===>", project_List.length, "the internal id of employeeDetail?.internalid=====>",employeeDetail?.internalid)
    //for calling getProjectList Api
    const update = useCallback(()=>{
        dispatch(getProjectList(employee_data?.internalid))
        dispatch(getTimeOff(employee_data?.internalid))
        dispatch(getTimeSheetbyWeek(employee_data?.internalid))
        dispatch(getProject(employee_data?.internalid))
        dispatch(getTimeSheet(null, employee_data?.internalid))

    },[])


    const SavePop = () => {
        setSaveConfig(true)
      }

    //   const getAudio = () =>{
    //         // play the file tone.mp3
    //         SoundPlayer.playSoundFile('tone', 'mp3')
    //         // or play from url
    //         SoundPlayer.playUrl('https://example.com/music.mp3')
    //   }


   

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          update();
        //   getAudio()
        });
        return unsubscribe;
      }, [navigation]);


    //for set employee detail into state
    const settingState = async()=> {
        if(employeeDetail !== '' && employeeDetail !== []){
            await setEmployeeData(employee_data)
        }
    }

    // for calling api's
    useEffect(()=>{
        settingState()
        dispatch(getCompany())
        dispatch(getManager())
        dispatch(getProjectStatus())
        dispatch(getProjectLocation())
    },[])

    // useEffect(()=>{
    //     if(employee_data?.internalid !== '' && employee_data?.internalid !== undefined){
    //         dispatch(getProject(employee_data?.internalid))
    //     }
    // },[employeeData])

    // const pull_data = async(data) => {
    //     console.log("the data in pull data func===>", data)
    //     await setCompanyName(data)
    // }

    useEffect(()=>{
        if(Object.keys(getting_data).length !== 0){
            setCompanyName(getting_data?.company?.text)
            setLat(getting_data?.lat)
            setLong(getting_data?.long)
        }
    },[getting_data])

    useEffect(()=>{
        if(employeeDetail === [] || employeeData?.firstname == '' ){
            alert("Something went wrong. Please login again")
            navigation.navigate("login")
        }
    },[])

    const start_stop = async(data) => {
        console.log("the button is pressed", data)
        await setButton(data)
        
        // SavePop()
        if (data === 'Stop') {
            getTake(false)
        }
    }

    const setTiming = (value) =>{
        setSaveConfig(!SaveConfig)
        setTimer(selectedLanguage)
        getTake(true)
        start_stop("Start")
    }


    return (

            <View style={{ flexDirection: 'column' }}>
                <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                    <HeaderMain name={`${employee_data?.firstname} ${employee_data?.lastname}`} projectLength={project_List?.length} timesheetLength={timeSheetData?.length} />
                    <ScrollView style={{ flexGrow: 1 }}>
                        <>
                        {companyName != '' ?(
                            <>
                                <MapView
                                    provider={PROVIDER_GOOGLE}
                                    style={{
                                        height: 200,
                                        width: '100%',
                                        alignSelf:'center',
                                        marginTop:'1%'
                                    }}
                                    region={{
                                        latitude: lat ? lat : 14.599512,
                                        longitude: long ? long : 120.984222,
                                        latitudeDelta: 0.015,
                                        longitudeDelta: 0.0121,
                                    }}
                                >
                                    <Marker coordinate={{ latitude : lat ? lat : 14.599512 , longitude : long ? long : 120.984222 }}></Marker>
                                </MapView>
                                <View style={styles.textView}>
                                    <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>{companyName ? companyName : null}</Text>
                                </View>

                                <View style={{ marginTop: '5%' }}>
                                {button == 'Start' ? (
                                    <TouchableOpacity  
                                    style={styles.greenBtnBg} onPress={()=>start_stop("Stop")}>
                                        <Text style={[Textstyles.bold, styles.BtnText]}>START</Text>
                                    </TouchableOpacity>
                                    ):(
                                    <TouchableOpacity style={styles.greenBtnBg} onPress={()=>start_stop("Start")}>
                                        <Text style={[Textstyles.bold, styles.BtnText]}>STOP</Text>
                                    </TouchableOpacity>
                                    )}
                                </View>

                                <View style={{ marginTop: '5%' }}>
                                    <TouchableOpacity onPress={() => SavePop()}
                                    style={styles.yellowBtnBg}>
                                        {take == false ? 
                                        <Text style={[Textstyles.bold, styles.BtnText]}>TAKE A BREAK</Text>
                                        :
                                        <Text style={[Textstyles.bold, styles.BtnText]}>{(parseFloat(timerCount/60).toFixed(2))} Sec Break</Text>
                                        }
                                    </TouchableOpacity>
                                </View>

                                {/* <View style={{marginTop:10, borderRadius:5, alignSelf:'center', padding:5  }}>
                                    <Text style={{alignSelf:'center'}}>{(parseFloat(timerCount/60).toFixed(2))} Sec</Text>
                                </View> */}
                            </>
                        ): null}

                        <View style={{ marginTop: '5%' }}>
                            <Text style={[Textstyles.bold, styles.ActivityText]}>ACTIVITY</Text>
                        </View>

                        <View style={styles.Line}></View>
                        <FlatList data={projects} renderItem={({item,index})=>{
                            let a = moment(item?.startdate, 'DD/MM/YYYY', true).format();
                            return(
                                <>
                                    <HomeAccordian backgroundColor='#73bf74' day={`${moment(a).format('DD')}`} month={`${moment(a).format('MMM')}`} company={item?.company?.text ? item?.company?.text : '-'} details={item?.description} item={item} />
                                    {/* <HomeAccordian backgroundColor='#73bf74' day={`${moment(a).format('DD')}`} month={`${moment(a).format('MMM')}`} company={item.companyname} details="Data Analysis Audit" item={item} func={pull_data} /> */}
                                </>
                            )
                        }}
                        />

                        <View style={{ marginTop: '5%', marginBottom:'5%' }}>
                        {employeeData?.isadmin === true ? (

                            <TouchableOpacity style={styles.redBtnBg}
                                onPress={() => navigation.navigate("Dashboard")}>
                                <Text style={[Textstyles.bold, styles.BtnText]}>Dashboard</Text>
                            </TouchableOpacity>
                        ):null}
                        </View>
                    </>

                    </ScrollView>

    {SaveConfig && (
            <>
              <Modal
                isVisible={SaveConfig}
                transparent={true}
                animationType={"fade"}
                onRequestClose={() => setSaveConfig(false)}>
                {/* <View style={styles.PopView}> */}
               
                <View style={styles.centeredView}>
                <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{borderColor:'black', borderWidth:2, overflow:'hidden', borderRadius:5}} >
                  <View style={styles.modalView}>
                    <View style={styles.PopView2}>
                      <View style={{ width: '90%', height: '100%', paddingTop: 10, marginTop: 10 }}>
                        <View style={{ justifyContent:'center',}}>
                            <Text style={[styles.PopView3,  Textstyles.bold , {color: '#1b2041'}]}>Select Break Duration</Text>
                        </View>
                        <View style={{backgroundColor:'white', borderRadius:5}}>
                        <RNPickerSelect
                                onValueChange={(value) => setSelectedLanguage(value)}
                                style={{ 
                                    inputIOSContainer:{
                                        color:'black',
                                        fontSize:14,
                                        width:100,
                                        // backgroundColor:'green',
                                        height:34,
                                        justifyContent:'center'
                                    },
                                    inputIOS:{
                                        color:'black',
                                        alignSelf:'center',
                                        justifyContent:'center'
                                    }
                                }}
                                placeholder = {{
                                    label: 'Select Break',
                                    // value: 'ztoa'
                                }}
                                items={[
                                    { label: '10 Minutes Break', value: '600' },
                                    { label: '15 Minutes Break', value: '900' },
                                    { label: '30 Minutes Break', value: '1800' },
                                ]}
                        />
                        </View>
                        <TouchableOpacity onPress={()=> setTiming()}
                         style={{ backgroundColor: "#73bf74", top:15, borderRadius:5, height:30, width:'40%', alignSelf:'flex-end', justifyContent:'center'}}>
                            <Text style={[ Textstyles.bold , {alignSelf:'center', fontSize:16 }]}>Submit</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ width: '10%', alignSelf: 'flex-start', top:-8, left:8 }}>
                        <TouchableOpacity onPress={() => setSaveConfig(!SaveConfig)} >
                          <Image style={{ height: 38, width: 28, resizeMode: 'contain' }} source={require('../../../assets/images/close.png')} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  </ImageBackground>
                </View>
           
              </Modal>
            </>
          )}

                    <Footer btnName="" btnNavigate="" projectLength = {project_List.length} timeOffLength = {timeOffDetail.length}/>

                </ImageBackground>
            </View>

    )
}

export default homeScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#1b2041',
        marginTop: '5%',
        textAlign: 'center',
    },
    PopView3: {
        fontSize: 22,
        paddingLeft: 2,
        color:'white',
        height: 40,
        justifyContent:'center',           
        fontWeight: '400',
        // backgroundColor:'green',
        alignItems:'center'
      },
    textView:{
        width: '95%',
        alignSelf:'center',
        // backgroundColor:'red',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:'5%'
    },

    textbottom: {
        fontSize: 15,
        color: '#1b2041',
        marginTop: '1%',
        textAlign: 'center',
    },

    textinput: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        width: "80%",
        alignSelf: 'center',
        marginTop: "5%",
        padding: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // elevation: 5,
        marginBottom: 35,
       
      },
      modalView: {
        margin: 13,
        width: '80%',
        borderRadius: 5,
        alignSelf: 'center',
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // elevation: 5,
        // borderWidth:1,
        // borderColor:'black',
        height:170,
        // backgroundColor: '#6495ED',
        borderRadius: 10,
        overflow:'hidden',
        paddingVertical: '2%',
        paddingHorizontal: '3%',
      },
      PopView2: {
        flexDirection: 'row',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        // backgroundColor:'#f15e64',
      },
    button: {
        alignSelf: 'center',
        backgroundColor: '#1b2041',
        borderRadius: 10,
        width: '80%',
        textAlignVertical: 'center',
        height: 45,
        paddingVertical: '2%',
        marginTop: '5%'
    },

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
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        backgroundColor: '#1b2041',
        justifyContent: 'center',
        paddingVertical: 5
    },

    title: {
        color: '#000',
        fontSize: 24,
        alignSelf: 'center',
    },

    titleBorder: {
        height: 4,
        width: 50,
        backgroundColor: '#000',
        borderRadius: 2,
        alignSelf: 'center',
        marginTop: 5
    },

    greenBtnBg: {
        backgroundColor: "#73bf74",
        width: '70%',
        height: 45,
        alignSelf: 'center',
        borderRadius: 100
    },

    BtnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        marginTop: 10
    },

    yellowBtnBg: {
        backgroundColor: "#d6a774",
        width: '50%',
        height: 45,
        alignSelf: 'center',
        borderRadius: 100
    },

    ActivityText: {
        color: '#1b2041',
        textAlign: 'left',
        left: '3%',
        fontSize: 20,
        textAlignVertical: 'center',
    },

    Line: {
        borderWidth: 1,
        width: '95%',
        alignSelf: 'center',
        borderColor: '#1b2041'
    },

    redBtnBg: {
        backgroundColor: '#1b2041',
        width: '50%',
        height: 45,
        alignSelf: 'center',
        borderRadius: 100
    }
})
