import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../../../assets/footer/footer'
import HeaderMain from '../../../assets/headers/HeaderMain'
import Textstyles from '../../../assets/text/texts'
import OAuth from 'oauth-1.0a'
import { useSelector } from 'react-redux'

// change the address for background image, footer and other images before using


const profileView = () => {

    const navigation = useNavigation();
    const [data, setData] = useState('')
    const [employeeData, setEmployeeData] = useState('')

    const {employeeDetail, project_List, timeSheetData, timeOffDetail} = useSelector((state)=>({
        employeeDetail : state?.EmployeeReducer?.data,
        project_List : state.EmployeeReducer.project_list,
        timeSheetData : state?.EmployeeReducer?.timesheet_list,
        timeOffDetail : state?.EmployeeReducer?.timeoff_list
    }))

    const employe = employeeDetail !== undefined && employeeDetail !== null
    const list_project = project_List !== undefined && project_List !== null && project_List !== []
    const timeSheet_data = timeSheetData !== undefined && timeSheetData !== null

    const settingState = async()=> {
        if(employeeDetail !== '' && employeeDetail !== []){
            setEmployeeData(employeeDetail)
        }
    }

    useEffect(()=>{
        settingState()
    },[])

    // console.log("the employee detailsss===>", employeeDetail)

    // var Account_id = '6991251_SB1'

    // var token = {
    // public: '909ed22eab801b44eccdc1ad64b26f587b710f86f2eb134980944405654a23eb',
    // secret: '0dfe5f1eb8e72da20b1ad8276157ad1879af8ae94d2d3b67a91b21c1d77677ff'
    // }

    // var consumer = {
    // public: 'ed2917dd0986577602a8d16f6bdf3e4e2f2de514013592555ab3aa55f65333d7',
    // secret: 'da881699f445e484fc43d03eb96ee08b3ab6bd84234eb425a6fd93dadfb308d5'
    // };

    // var restlet_url = 'https://6991251-sb1.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=570&deploy=1';

    // var oauth = OAuth({
    //     consumer: consumer,
    //     signature_method: 'HMAC-SHA256'         //you can also use HMAC-SHA1 but HMAC-SHA256 is more secure (supposedly)
    // });

    // var request_data = {
    //     url: restlet_url,
    //     method: 'POST',
    // };

    // var authorization = oauth.authorize(request_data, token);
    // var header = oauth.toHeader(authorization);
    // header.Authorization += ', realm="' + Account_id + '"';
    // header['content-type'] = 'application/json';

    // const GET_EMPLOYEE = async() => {
    //     console.log("the get employee api hit")
    //     const data = JSON.stringify({
    //         "method": "postemployee",
    //         "internalid": "1400",
    //         "mobilephone": "213 4568",
    //         "email": "mayankvashistha@elitemindz.co",
    //         "location": "Manila, Philippines",
    //         "notifications": "true",
    //         "gpstracking": "true"
    //     })
    //     await fetch(request_data.url,{
    //         method: request_data.method,
    //         headers: header,
    //         body:data
    //     }).then((res)=> { return res.json()}).then(async(result)=>{
    //         console.log("the result of the api ====>", result)
    //         // return result;
    //         // await setData(result)
    //     })
    //     .catch((err)=>console.log("the error of request===>", err))
    // }

    // useEffect(()=>{
    //     GET_EMPLOYEE()
    // },[])

    // console.log("the data from profile page=====>", data)


    return (
        <View style={{ flexDirection: 'column' }}>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>

                <HeaderMain name="Profile Settings" projectLength={project_List.length}  timesheetLength={timeSheetData.length} />

                <ScrollView style={{ flexGrow: 1 }}>
                <Image  source={employeeData.employeeimage ? {uri:employeeData.employeeimage} : require('../../../assets/images/beard.jpg')} style={styles.ImageSimple} resizeMode='cover' />
                    {/* <Image source={require('../../../assets/images/beard.jpg')} style={{ height: 100, width: 100, borderRadius: 100, alignSelf: 'center', marginTop: "5%" }} /> */}
                    <TouchableOpacity onPress={() => navigation.navigate('profileEdit', {data:employeeDetail})}>
                        <Text style={[Textstyles.normal, { textAlign: 'center', color: '#1b2041', marginTop: "2%", fontSize: 15 }]}>Edit</Text>
                    </TouchableOpacity>

                    <View style={{ width: "95%", alignSelf: "center", flexDirection: 'row', marginTop: '2%' }}>
                        <View style={{ width: "23%", flexDirection: 'column', left:'5%' }}>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "left" }]}>Full Name</Text>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "left" }]}>ID#</Text>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "left" }]}>Email</Text>
                            <Text style={[styles.Text, Textstyles.normal, { textAlign: "left" }]}>Phone</Text>
                        </View>

                        <View style={{ width: "72%", flexDirection: 'column' }}>
                            <Text style={[styles.Text, Textstyles.bold, { textAlign: 'right' }]}>{employeeData.firstname} {employeeData.lastname}</Text>
                            <Text style={[styles.Text, Textstyles.bold, { textAlign: 'right' }]}>{employeeData.internalid}</Text>
                            <Text style={[styles.Text, Textstyles.bold, { textAlign: 'right' }]}>{employeeData.email}</Text>
                            <Text style={[styles.Text, Textstyles.bold, { textAlign: 'right' }]}>{employeeData.mobilephone != '' ? employeeData.mobilephone : 'Not Available'}</Text>
                        </View>

                        <View style={{ width: "5%", flexDirection: 'column' }}>
                            <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, alignSelf: 'flex-end',  }} size={22}/>
                            <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, alignSelf: 'flex-end',  }} size={22}/>
                            <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, alignSelf: 'flex-end',  }} size={22}/>
                            <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, alignSelf: 'flex-end' }} size={22}/>
                        </View>
                    </View>

                </ScrollView>
                <Footer btnName="" projectLength={project_List.length} timeOffLength = {timeOffDetail.length}/>
            </ImageBackground>
        </View>
    )
}

export default profileView

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
    Text: {
        marginTop: 2,
        color: '#1b2041',
        textAlign: 'left',
        fontSize: 18
    },
    ImageSimple: {
        height: 100, 
        width: 100, 
        borderRadius: 100, 
        alignSelf: 'center', 
        marginTop: "5%"
    }
})
