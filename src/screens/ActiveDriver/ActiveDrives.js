import React, { useEffect } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Platform, Linking, Image } from 'react-native';
import Header from "../../components/header";
import COLORS from "../../constant/color";
import Icon from 'react-native-vector-icons/Feather'
//import { getInitialProps } from "react-i18next";

const SrStatus = ({ navigation }) => {

    const getIotdata = async () => {

        var details = {
            'grant_type':'client_credentials',
            'client_id':'33OkryzDZsJaXWvFyHkQ2luIdgsoRaGsrwQuUpcZI4hvSvuv7f0KtCsJ2-YjT8B4lA3_0k5GsshAtwsZr71QyA==',
            'client_secret':'lrFxI-iSEg8QI16SDWIwTd_-INO4GzBx1TPj2bOPi2ye443z-bXtUSVrJQ5ZOzst279jUhv-WfBquu9CeKl-yTgJcUfMaTb2'
        };
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
            const result = await fetch('https://outpost.mapmyindia.com/api/security/oauth/token',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                body:formBody
                }).then((response) => response.json())
                .then((responseJson) => {
                  console.log("New post is called",responseJson);
                  // return responseJson.movies;
                })
                .catch((error) => {
                console.error('this is error',error);
                })
            console.log(result,"result2");
    }

    useEffect(() => {
        getIotdata();
    }, [])







    const DbInfo = [
        {
            id: '1',
            Date: '01 Apr 2022',
            SRno: 'BSS 5',
            SrFor: 'Battery'
        },
        {
            id: '2',
            Date: '03 Apr 2021',
            SRno: 'BSS 6',
            SrFor: 'Financial'
        },
        {
            id: '3',
            Date: '07 Apr 2020',
            SRno: 'BSS 5',
            SrFor: 'Transaction'
        },
        {
            id: '4',
            Date: '10 Apr 2022',
            SRno: 'BSS 5',
            SrFor: 'Battery'
        }
    ]
    const GetData = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => { navigation.navigate('SrDetails', { Date: item.Date, SrNo: item.SRno, SrFor: item.SrFor }) }}
                style={{ flexDirection: 'row', padding: 5, justifyContent: 'center', alignItems: 'center', width: '90%', alignSelf: 'center', backgroundColor: COLORS.Litesilver, marginTop: 10, borderRadius: 15 }}>
                <View style={{ width: '24%' }}>
                    <Text style={{ fontSize: Platform.OS == 'android' ? 20.5 : 14, paddingVertical: 7, fontWeight: '500', color: 'black' }}>srno</Text>
                    <Text style={{ fontSize: Platform.OS == 'android' ? 20 : 16, fontWeight: '600', color: 'black' }}>sr 283</Text>
                </View>
                <View style={{ width: '26%', }}>
                    <Text style={{ fontSize: Platform.OS == 'android' ? 20.5 : 14, paddingVertical: 7, fontWeight: '500', color: 'black' }}>Related</Text>
                    <Text style={{ fontSize: Platform.OS == 'android' ? 20 : 16, fontWeight: '600', color: 'black' }}>Sbattery</Text>
                </View>
                <View style={{ width: '24%', }}>
                    <Text style={{ fontSize: Platform.OS == 'android' ? 20.5 : 14, paddingVertical: 7, fontWeight: '500', color: 'black' }}>Status</Text>
                    <Text style={{ color: 'green', fontSize: Platform.OS == 'android' ? 20 : 16, fontWeight: '600', color: 'black' }}>Resloved</Text>
                </View>
                <TouchableOpacity
                    onPress={() => { Linking.openURL(`tel:${18001230181}`) }}
                    style={{ width: '14%', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="arrow-up-right" size={40} color="green" />

                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    const Back = () => {
        navigation.navigate("Home1")
    }
    const Settings = () => {
        navigation.navigate("Settings")
    }
    const Notification = () => {
        navigation.navigate("Notifications")
    }
    const GoHome = () => {
        navigation.navigate("Home1")
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
            <Header
                onPressNotification={Notification}
                onPressHome={GoHome}
                onPressSetting={Settings}
                onPressBack={Back}
                Icons={{ goBack: 'arrow-back', goSettings: 'settings', goNotifications: 'notifications', goHome: 'home' }}
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={require('../../assets/imgs/activedriverimg.jpg')} />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={DbInfo}
                renderItem={GetData}
                keyExtractor={item => item.id}
                style={{ marginTop: 20 }}
            />
        </SafeAreaView>
    )
}

export default SrStatus;