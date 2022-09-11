import React from 'react';
import { View, Text, SafeAreaView,FlatList,Platform} from 'react-native';
import CustomHeader from '../../components/header';
import COLORS from '../../Constants/color';
import CustomCalendar from '../../components/customcalendartest';
import { useTranslation } from "react-i18next";

const Phistory = ({ navigation }) => {
    const {t} =useTranslation();
    const ListData = [{
        id: '1',
    },
    {
        id: '2',
    },    
    ]
    const GetData = ({ items }) => {
        
        return (
            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center', alignItems: 'center', width: '90%', alignSelf: 'center', backgroundColor: COLORS.green, marginTop: 10, borderRadius: 15 }}>
                <View style={{ padding: 5, width: '12%', height: 70, borderRadius: 60, justifyContent: "center", alignItems: 'center', backgroundColor: 'white' }}>
                    <Text style={{ color: 'green', fontSize: 14, fontWeight: '500' }}>01</Text>
                    <Text style={{ color: 'green', fontSize: 12 }}>APR</Text>
                    <Text style={{ color: 'green', fontSize: 12 }}>22</Text>
                </View>
                <View style={{ width: '45%', paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: '600',padding:4,color:COLORS.white }}>Abba Batteries</Text>
                    <Text style={{ fontSize: 14,color:COLORS.white,paddingLeft:4,fontWeight:'500' }}>09:35AM</Text>
                </View>
                <View style={{ width: '40%', }}>
                    <Text style={{ fontSize: 14,color:COLORS.white,padding:4,fontWeight:'500' }}>Topup- 2 Swaps</Text>
                    <Text style={{ marginLeft: '64%', color: 'green', fontSize: 17,color:COLORS.white,fontWeight:'700' }}>₹160</Text>
                </View>
            </View>
        )
    }
    const Back=()=>{
        navigation.navigate("Home1")
    }
    const Settings=()=>{
        navigation.navigate("Settings")
    }
    const Notification=()=>{
        navigation.navigate("Notification")
    }
    const GoHome=()=>{
        navigation.navigate("Home1")
    }
    return (
        <SafeAreaView style={{backgroundColor:COLORS.white,flex:1}}>
           <CustomHeader 
                    Icons={{setting: 'settings', home: 'home', back: 'arrow-back', refresh: 'refresh-sharp', notification: 'notifications'}}
                    onPressBack={Back}
                    onPressNotification={Notification}
                    onPressHome={GoHome}
                    onPressSetting={Settings}
                    HeadingName={t("Purchase_History_header")}
                    imageSize={{bgWidth:Platform.OS=='ios'?'105%': '106%', bgHeight: 40, lineWidth: "30%", lineHeight: 35, viewHeight: 2.5, viewWidth: '33%', marginLeft: '-22%',MainImgWidth:0,MianImageHeight:0,VimageHeight:0,VimageWidth:0 }}
                />
            <View style={{flex:1,backgroundColor:COLORS.skyblue}}>
            <CustomCalendar/>
            <Text style={{alignSelf:'center',color:'white',fontSize:18,fontWeight:'700',marginTop:60}}>{t("noHistory")}</Text>
                {/* <FlatList
                    data={ListData}
                    renderItem={GetData}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                /> */}
            </View>
        </SafeAreaView>
    )
}
export default Phistory;

