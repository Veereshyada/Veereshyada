import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Textstyles from '../../../assets/text/texts'
import { useSelector } from 'react-redux'

const welcome = () => {

    const navigation = useNavigation()
    const [data, setData] = useState('')

    // const splash = () => {
    //     setTimeout(() => {
    //         navigation.navigate("homeScreen")
    //     }, 2000)
    // }

    // splash();

    const {employeeDetail} = useSelector((state)=>({
        employeeDetail : state?.EmployeeReducer?.data
    }))

    const employee_data = employeeDetail !== undefined && employeeDetail !== null && employeeDetail !== [] && employeeDetail !== {} && employeeDetail !== "" && employeeDetail

    // console.log("the employee data is ====>", employee_data)

    const settingState = async()=> {
        if(employee_data !== '' && employee_data !== [] && employee_data !== {}){
            await setData(employee_data)
        }
    }

    // console.log("the data is ====>", data, "& the typeof data is ===>", typeof(data))

    useEffect(()=>{
        settingState()
        if(employee_data !== {} && employee_data !== [] && employee_data !== ''){
            setTimeout(()=>
            {
                navigation.navigate("homeScreen")
            },2000)
        }else{
            alert("Something went wrong. Please login again")
            navigation.navigate("login")
        }
    },[employee_data])

    return (
        <View>
            <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                <Image source={employee_data?.companylogo ? {uri: employee_data?.companylogo} : require('../../../assets/images/logo2.png')} style={employee_data?.companylogo ? styles.logoImage : styles.imageBox} resizeMode='contain' />
                {/* <Image source={data.companylogo ? {uri: data.companylogo} : require('../../../assets/images/logo2.png')} style={styles.imageBox} resizeMode='contain' /> */}
                <View style={{ alignSelf: 'center', top: '40%' }}>
                    <Text style={[Textstyles.bold, styles.text]}>Hello, {employee_data?.firstname}</Text>
                    <Text style={[Textstyles.bold, styles.text]}>Welcome back!</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default welcome

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: "#1b2041"
    },
    imageBox: {
        height: '20%',
        width: "40%",
        borderRadius: 100,
        alignSelf: "center",
        top: "20%",
    },
    logoImage: {
        height: '20%',
        width: "40%",
        borderRadius: Platform.OS === 'ios' ? 100 : null,
        alignSelf: "center",
        top: "20%",
    }
})
