import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import COLORS from '../../constant/color';
import Header from '../../components/header';
import BackgrounImg from '../../components/BackgroundImg';
import DriverSwapCard from '../../components/DriverSwapCard';
import Button from '../../components/button';
import Plans from '../../components/plans';
import AntDesign from "react-native-vector-icons/AntDesign";
import Images from '../../constant/imgurls';
import Battery from '../../components/Battery';
import option from '../../constant/options';
import ImagePicker from 'react-native-image-picker';
const DoSwapTransaction = ({ navigation }) => {


    const  battery1 = () => {
        const options= option;
     
      ImagePicker.showImagePicker(options, (response) => {
          if (response.uri) {
            setPhoto({Driver_Phot:response.fileName});
          }
        });
      };
     

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
    const gotoPay = () => {
        navigation.navigate("DriverOnBoardingRegister")
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
                <Header
                    onPressNotification={Notification}
                    onPressHome={GoHome}
                    onPressSetting={Settings}
                    onPressBack={Back}
                    Icons={{ goBack: 'arrow-back', goSettings: 'settings', goNotifications: 'notifications', goHome: 'home' }}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <BackgrounImg screenName={"Do The Swap Transac.."} />
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={styles.usercard}>
                            <View>
                                <Image source={Images.userIcon} style={{ height: 70, width: 70 }} />
                            </View>
                            <View style={{ height: 120, width: '60%', paddingHorizontal: 30, justifyContent: 'center' }}>
                                <Text style={{ color: COLORS.silver, fontSize: 17, fontWeight: '500' }}>DR293838</Text>
                                <Text style={{ color: COLORS.skyblue, fontWeight: '800', fontSize: 28 }}>Hemant Kumar</Text>
                            </View>
                        </View>
                        <Text style={{ marginTop: 15, fontWeight: '700', fontSize: 18, color: COLORS.white }}>BATTERY IN</Text>
                        <Battery
                        onPress={battery1}
                            BatIcon={Images.BatteryIn}
                            BatId={"B3453"}
                            BatName={"BATTERY 1"}
                        />
                        <Battery
                           onPress={battery1}
                            BatIcon={Images.BatteryIn}
                            BatId={"B3453"}
                            BatName={"BATTERY 1"}
                        />
                        <Text style={{ marginTop: 15, fontWeight: '700', fontSize: 18, color: COLORS.white }}>BATTERY OUT</Text>
                        <Battery
                        onPress={battery1}
                            BatIcon={Images.BatteryOut}
                            BatId={"B3453"}
                            BatName={"BATTERY 1"}
                        />
                        <Battery
                        onPress={battery1}
                            BatIcon={Images.BatteryOut}
                            BatId={"B3453"}
                            BatName={"BATTERY 1"}
                        />
                        <View style={{marginTop:40,marginBottom:20}}>
                            <Button
                            onPress={gotoPay}
                                Style={{ width: '80%' }}
                                title={'Do Swap Transaction'}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    usercard: {
        backgroundColor: COLORS.white,
        height: 150,
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        marginTop: 15
    }

})
export default DoSwapTransaction