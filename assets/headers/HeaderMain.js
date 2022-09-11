import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Textstyles from '../text/texts'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { postEmployee } from '../../src/redux/actions/postAction'
import { getEmployee } from '../../src/redux/actions/getAction'
import CustomModal from '../modal'

const HeaderMain = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [menuClick, setMenuClick] = useState(false)
    const [picClick, setPicClick] = useState(false)
    const [gps, setGPS] = useState(false)
    const [noti, seTNoti] = useState(false)
    const [viewGPS, setViewGPS] = useState(false)
    const [employeeData, setEmployeeData] = useState('') //for storing employee data
    const [email, setEmail] = useState('') //for storing email id of the user
    const [modalVisible, setModalVisible] = useState(false) //for open logout modal

    const gettingData = async() => {
        let email = await AsyncStorage.getItem('userEmail')
        await setEmail(email)
    }

    const picClicked = () => {
        // console.log("CLICK PIC HIT", picClick)
        setPicClick(!picClick)
        setMenuClick(false)
        setViewGPS(false)
        // true for notifications & false for settings
    }

    const menuClicked = () => {
        // console.log("CLICK MENU HIT", menuClick)
        setMenuClick(!menuClick)
        setPicClick(false)
        setViewGPS(false)
        // true for notifications & false for settings
    }

    const GPS = () => {
        // console.log("GPS True", viewGPS)
        setViewGPS(true)
        setMenuClick(false)
    }

    const handleNavigation = (Screen) => {
        setMenuClick(false)
        setPicClick(false)
        setViewGPS(false)
        navigation.navigate(Screen)
    }

    const {employeeDetail, employeePost} = useSelector((state)=>({
        employeeDetail : state?.EmployeeReducer?.data,
        employeePost : state?.postReducer?.employeeData,
    }))

    const employee_data = employeeDetail !== undefined && employeeDetail !== null && employeeDetail !== []  && employeeDetail !== {} && employeeDetail !== "" && employeeDetail

    // console.log("the employee data through header is =====>", employee_data)
    // console.log("the data through employee through header===>", employeeDetail, "the typeof is===>", typeof(employeeDetail))
    // console.log("the data is through header ===>", employeeData.firstname, "the typeof is ====>", typeof(employeeData.firstname))


    // console.log("the employee details is ===>", employeeDetail?.isadmin)

    const settingState = async()=> {
        if(employeeDetail !== '' && employeeDetail !== [] && employee_data == true){
            await setEmployeeData(employee_data)
        }
    }

    useEffect(()=>{
        settingState()
        gettingData()
    },[])


    const settingGps1 = async() => {
        if(employee_data?.isgpstracking == true){
            setGPS(true)
        }else{
            setGPS(false)
        }

        if(employee_data?.isnotifications == true){
            seTNoti(true)
        }else{
            seTNoti(false)
        }
        
    }

    useEffect(()=>{
        settingGps1()
    },[employee_data])

    const gpsClick = async(a)=>{
        // console.log("the data fof gps===>", a)
        let gpsData = await a
        let notiData = noti.toString()
        // console.log("The gps after await ===>", gpsData)
        

        const body = 
        {
            "method": "postemployee",
            "internalid": employee_data?.internalid,
            "mobilephone": employee_data?.mobilephone,
            "email": email,
            "location": "Manila, Philippines",
            "notifications": notiData,
            "gpstracking": gpsData.toString()
        }
        // console.log("the body data===>", body)
        dispatch(postEmployee(body))
        await setGPS(gpsData)
    }


    const notiClick = async(n)=>{
        console.log("the data fof noti===>", n)
        let notiData = await n
        let gpsData = gps.toString()
        const body = 
        {
            "method": "postemployee",
            "internalid": employee_data?.internalid,
            "mobilephone": employee_data?.mobilephone,
            "email": email,
            "location": "Manila, Philippines",
            "notifications": notiData.toString(),
            "gpstracking": gpsData
        }
        // console.log("the body data===>", body)
        dispatch(postEmployee(body))
        await seTNoti(notiData)
    }

    const modal_visible = async() => {
        console.log("the modal visible function call")
        setModalVisible(true)
        setMenuClick(false)
        setPicClick(false)
    }
        // console.log("the employee detail in header main page====>", employeeDetail)

    return (
        <View style={styles.Parent}>
            <View style={styles.Container}>
                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity style={[styles.imgContainer]}
                        onPress={() => picClicked()}>
                        <View style={picClick ? styles.photoNotification : styles.photoSetting}>
                            <Image  source={employee_data?.employeeimage ? {uri:employee_data?.employeeimage} : require('../../assets/images/beard.jpg')} style={styles.ImageSimple} resizeMode='cover' />
                            {/* <Image source={require('../../assets/images/beard.jpg')} style={styles.ImageSimple} resizeMode='cover' /> */}
                            {picClick &&
                                <Text style={[Textstyles.bold, styles.picNumber]}>100</Text>}
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: "60%", justifyContent:'center', paddingRight:45, paddingTop:10 }}>
                        <Text style={[Textstyles.bold, styles.mainHeading]}>{picClick ? "Notifications" : props?.name && !menuClick ? props?.name : "Settings"}</Text>
                    </View>
                    <TouchableOpacity style={{ width: "8%", justifyContent:'center' }} onPress={() => menuClicked()}>
                        <Icon name='menu' style={styles.Icon} size={30} />
                    </TouchableOpacity>

                </View>
                {picClick && (
                    <View style={styles.notificationContainer}>
                        <TouchableOpacity style={styles.menuItemContainer} onPress={()=>handleNavigation("homeScreen")}>
                            <Text style={[Textstyles.bold, styles.menuItemHeading]}>Home</Text>
                            <View style={{ height: '100%', width: '10%', borderRadius: 100 }}>
                                <Text style={[Textstyles.bold, styles.menuNumber]}></Text>
                            </View>
                            <Icon name="chevron-right" style={styles.menuIcon} size={20}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItemContainer} onPress={() => handleNavigation("projectListExpandable")}>
                            <Text style={[Textstyles.bold, styles.menuItemHeading]}>Projects</Text>
                            {props?.projectLength != 0 ? (
                            <View style={{ backgroundColor: "#b53535", height: '100%', width: '10%', borderRadius: 100 }}>
                                <Text style={[Textstyles.bold, styles.menuNumber]}>{props?.projectLength}</Text>
                            </View>
                            ):(
                                <View style={[{backgroundColor:'transparent', height: '100%', width: '10%', borderRadius: 100}]}/>
                            )}
                            <Icon name="chevron-right" style={styles.menuIcon} size={20}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItemContainer} onPress={() => handleNavigation("timeSheetCalendar")}>
                            <Text style={[Textstyles.bold, styles.menuItemHeading]}>Timesheets</Text>
                            {props?.timesheetLength != 0 ? (
                            <View style={{ backgroundColor: "#b53535", height: '100%', width: '10%', borderRadius: 100 }}>
                                <Text style={[Textstyles.bold, styles.menuNumber]}>{props?.timesheetLength}</Text>
                            </View>
                            ):(
                                <View style={[{backgroundColor:'transparent', height: '100%', width: '10%', borderRadius: 100}]}/>
                            )}
                            <Icon name="chevron-right" style={styles.menuIcon} size={20}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItemContainer} onPress={() => handleNavigation("timeOffCalendar")}>
                            <Text style={[Textstyles.bold, styles.menuItemHeading]}>Time Off</Text>
                            <View style={{ height: '100%', width: '10%', borderRadius: 100 }}>
                                <Text style={[Textstyles.bold, styles.menuNumber]}></Text>
                            </View>
                            <Icon name="chevron-right" style={styles.menuIcon} size={20}></Icon>
                        </TouchableOpacity>

                        {/* <TouchableOpacity style={styles.menuItemContainer}>
                            <Text style={[Textstyles.bold, styles.menuItemHeading]}>Messages</Text>
                            <View style={{ height: '100%', width: '10%', borderRadius: 100 }}>
                                <Text style={[Textstyles.bold, styles.menuNumber]}>9</Text>
                            </View>
                            <Icon name="chevron-right" style={styles.menuIcon} size={20}></Icon>
                        </TouchableOpacity> */}

                        <TouchableOpacity onPress={() => setPicClick(false)}>
                            <Icon name='chevrons-up' size={36} style={{ alignSelf: 'center' }} color="#1b2041" />
                        </TouchableOpacity>
                    </View>
                )}

                {menuClick &&
                    <View style={styles.notificationContainer}>

                        <TouchableOpacity style={styles.menuItemContainer} onPress={() => handleNavigation('profileView')}>
                            <Text style={[Textstyles.bold, styles.menuText]}>Profile</Text>
                            <Icon name="chevron-right" style={styles.settingsIcon} size={20}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItemContainer} onPress={() => handleNavigation("account")}>
                            <Text style={[Textstyles.bold, styles.menuText]}>Current Role</Text>
                            <Icon name="chevron-right" style={styles.settingsIcon} size={20}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItemContainer} onPress={() => GPS()}>
                            <Text style={[Textstyles.bold, styles.menuText]}>Location</Text>
                            <Icon name="chevron-right" style={styles.settingsIcon} size={20}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItemContainer} onPress={() => GPS()}>
                            <Text style={[Textstyles.bold, styles.menuText]}>Notifications</Text>
                            <Icon name="chevron-right" style={styles.settingsIcon} size={20}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItemContainer} onPress={() => handleNavigation('Dashboard')} disabled={true}>
                            <Text style={[Textstyles.bold, styles.menuText]}>Alerts</Text>
                            <Icon name="chevron-right" style={styles.settingsIcon} size={20}></Icon>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.menuItemContainer} onPress={() => modal_visible()}>
                            <Text style={[Textstyles.bold, styles.menuText]}>Logout</Text>
                            <Icon name="chevron-right" style={styles.settingsIcon} size={20}></Icon>
                        </TouchableOpacity>

                        {/* <TouchableOpacity style={styles.menuItemContainer}>
                            <Text style={[Textstyles.bold, styles.menuText]}>Messages</Text>
                            <Icon name="chevron-right" style={styles.settingsIcon} size={20}></Icon>
                        </TouchableOpacity> */}

                        <TouchableOpacity onPress={() => setMenuClick(false)}>
                            <Icon name='chevrons-up' size={36} style={{ alignSelf: 'center' }} color="#1b2041" />
                        </TouchableOpacity>
                    </View>

                }
                {modalVisible && (
                    <CustomModal 
                    isVisible={true}
                    onClose={()=>setModalVisible(false)}
                    />
                )}

                {viewGPS &&
                    <View style={styles.gpsContainer}>

                        <View style={styles.gpsContainerInner}>

                            <View style={styles.switchStrip}>
                                <View style={!gps ? styles.stripWhite : styles.stripGreen} />
                            </View>

                            <View style={styles.toggle}>
                                <Text style={[Textstyles.bold, styles.switchHeading]}>GPS Tracking</Text>
                                <Text style={[Textstyles.normal, styles.onOff]}>{gps ? "On" : "Off"}</Text>
                            </View>

                            <View style={[styles.toggle, { left: '50%' }]}>
                                <TouchableOpacity style={gps ? styles.bgTrue : styles.bgFalse}
                                    // onPress={() => setGPS(!gps)}
                                    onPress={()=>gpsClick(!gps)}
                                    >
                                    {gps &&
                                        <View style={styles.toggleEnd}></View>}

                                    {!gps &&
                                        <View style={styles.toggleStart}></View>}
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={[styles.gpsContainerInner, { marginTop: '2%', marginBottom: '4%' }]}>

                            <View style={styles.switchStrip}>
                                <View style={!noti ? styles.stripWhite : styles.stripGreen} />
                            </View>

                            <View style={styles.toggle}>
                                <Text style={[Textstyles.bold, styles.switchHeading]}>Notifications</Text>
                                <Text style={[Textstyles.normal, styles.onOff]}>{noti ? "On" : "Off"}</Text>
                            </View>

                            <View style={[styles.toggle, { left: '50%' }]}>
                                <TouchableOpacity style={noti ? styles.bgTrue : styles.bgFalse}
                                    onPress={() => notiClick(!noti)}
                                    // onPress={()=>settingNoti()}
                                    >
                                    {noti &&
                                        <View style={styles.toggleEnd}></View>}

                                    {!noti &&
                                        <View style={styles.toggleStart}></View>}
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => setViewGPS(false)}>
                            <Icon name='chevrons-up' size={36} style={{ alignSelf: 'center' }} color="#1b2041" />
                        </TouchableOpacity>

                    </View>
                }
            </View>
        </View>
    )
}

export default HeaderMain

const styles = StyleSheet.create({
    Parent: {
        backgroundColor: "#fff",
        elevation: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
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
    ImageSimple: {
        height: 65,
        width: 65,
        borderRadius: 100,
        alignSelf: 'flex-start',
    },
    photoNotification: {
        backgroundColor: "#b53535",
        width: '90%',
        height: 65,
        alignSelf: 'center',
        borderRadius: 100,
        marginStart: '5%',
        flexDirection: 'row'
    },
    photoSetting: {
        backgroundColor: "#FFF",
        width: '90%',
        height: 65,
        alignSelf: 'center',
        borderRadius: 100,
        marginStart: '5%',
        flexDirection: 'row'
    },
    bgTrue: {
        alignSelf: 'center',
        width: '40%',
        backgroundColor: "green",
        height: '50%',
        borderRadius: 100
    },
    bgFalse: {
        alignSelf: 'center',
        width: '40%',
        backgroundColor: '#E8E8E8',
        height: '50%',
        borderRadius: 100
    },
    stripWhite: {
        backgroundColor: '#E8E8E8',
        width: '10%',
        height: '80%',
        alignSelf: 'center'
    },

    stripGreen: {
        backgroundColor: 'green',
        width: '10%',
        height: '80%',
        alignSelf: 'center'
    },
    Container: {
        flexDirection: 'column',
        // marginTop: '5%'
    },
    picNumber: {
        color: "#fff",
        fontSize: 18,
        textAlignVertical: 'center',
        marginStart: Platform.OS === 'ios' ? '0%' : '5%',
        // marginStart: '5%',
        marginTop: Platform.OS === 'ios' ? "19%" : '0%'
    },
    mainHeading: {
        color: "#1b2041",
        textAlign: "center",
        fontSize: 22,
        // marginTop: '20%',
    },
    Icon: {
        alignSelf: 'center',
        marginTop: '30%',
        // left: "40%",
        color: '#1b2041',
        fontWeight: 'bold'
    },
    imgContainer: {
        height: 90,
        width: '30%',
        flexDirection: "row",
        marginTop: '1%'
    },
    notificationContainer: {
        flexDirection: 'column',
        width: '100%',
        alignSelf: 'center',
        marginTop: '4%'
    },
    menuItemContainer: {
        margin: "1%",
        width: '100%',
        flexDirection: 'row'
    },
    menuItemHeading: {
        color: "#1b2041",
        fontSize: 16,
        width: '80%'
    },
    menuNumberContainer: {
        backgroundColor: "#b53535",
        height: '100%',
        width: '7.5%',
        borderRadius: 100
    },
    menuNumber: {
        color: "#fff",
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        marginTop: Platform.OS === 'ios' ? '2%' : '0%'
    },
    menuIcon: {
        color: '#1b2041',
        marginStart: 5
    },
    menuText: {
        color: "#1b2041",
        fontSize: 16,
        width: '90%'
    },
    settingsIcon: {
        color: '#1b2041',
        marginTop: 2,
        marginStart: 5
    },
    gpsContainer: {
        backgroundColor: "#fff",
        flexDirection: 'column',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 5
    },
    gpsContainerInner: {
        width: "90%",
        height: 60,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 100,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    switchStrip: {
        width: "15%",
        alignSelf: 'center',
        borderRadius: 10
    },
    switchHeading: {
        textAlign: 'left',
        color: "#1b2041",
        fontSize: 18,
    },
    onOff: {
        textAlign: 'left',
        color: "#1b2041",
        fontSize: 18,
    },
    toggleEnd: {
        backgroundColor: '#fff',
        height: '95%',
        width: '50%',
        borderRadius: 100,
        elevation: 10,
        alignSelf: 'flex-end'
    },
    toggleStart: {
        backgroundColor: '#fff',
        height: '95%',
        width: '50%',
        borderRadius: 100,
        elevation: 10,
        alignSelf: 'flex-start'
    },
    toggle: {
        width: "40%",
        alignSelf: 'center'
    }
})
