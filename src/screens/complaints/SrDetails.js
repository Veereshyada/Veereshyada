import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,ScrollView,Platform} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeader from "../../components/header";
import { useTranslation } from "react-i18next";
import COLORS from "../../Constants/color";
import { color } from "react-native-reanimated";

const SrDetails = ({ navigation,route }) => {
    const {t}=useTranslation();
    const Back=()=>{
        navigation.navigate("Sr Status")
    }
    const Settings=()=>{
        navigation.navigate("Settings")
    }
    const Notification=()=>{
        navigation.navigate("Notification")
    }
    const GoHome = () => {
        navigation.navigate("Home1")
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
             <CustomHeader
                Icons={{ setting: 'settings', home: 'home', back: 'arrow-back', refresh: 'refresh-sharp', notification: 'notifications' }}
                onPressBack={Back}
                onPressNotification={Notification}
                onPressSetting={Settings}
                onPressHome={GoHome}
                HeadingName={t("SR_Details")}
                imageSize={{ bgWidth:Platform.OS=='android'?'105%':'100%', bgHeight: 40, lineWidth: '30%', lineHeight: 35, viewHeight: 2.5, viewWidth: '42%', marginLeft:Platform.OS=='android'?'-23.5%': '-26.5%',  MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS=='android'?'71.5%':'68%' }}
            />
            <ScrollView style={Styles.outerBox}
            showsVerticalScrollIndicator={false}>
                <View style={Styles.innnerBox}>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text}>{t("srno")}</Text>
                    </View>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text2}>{route.params.SrNo}</Text>
                    </View>
                </View>
                <View style={Styles.innnerBox}>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text}>{t("related")}</Text>
                    </View>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text2}>{route.params.SrFor}</Text>
                    </View>
                </View>
                <View style={Styles.innnerBox}>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text}>{t("Battery_ID")}</Text>
                    </View>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text2}>{route.params.SrNo}</Text>
                    </View>
                </View>
                <View style={Styles.innnerBox}>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text}>{t("sr_raised")}</Text>
                    </View>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text2}>{route.params.Date}</Text>
                        <Text style={{ fontSize: 13,color:COLORS.black }}><Icon name="ios-time-outline" size={12} color={COLORS.green} style={{ paddingRight: 5 }} /> 09:35AM</Text>
                    </View>
                </View>
                <View style={Styles.innnerBox}>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text}>{t("issue")}</Text>
                    </View>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text2}>{t("Battery_Not_Working")}</Text>
                    </View>
                </View>
                <View style={Styles.innnerBox}>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text}>{t("status")}</Text>
                    </View>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text2}>WIP</Text>
                    </View>
                </View>
                <View style={Styles.innnerBox}>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text}>{t("comment")}</Text>
                    </View>
                    <View style={Styles.SubinnerBox}>
                        <Text style={Styles.Text2}>{t("tean_sent_to_assist")}</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )

}


const Styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    PlanContainner: {
        padding: 10
    },
    innnerBox: {
        flexDirection: 'row',
        backgroundColor:COLORS.white,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 7,
        width: '100%',
        padding: 8
    },
    outerBox: {
        flex:1,
        padding:'3%',
        paddingVertical:Platform.OS=='android'?20: 30,
        backgroundColor:COLORS.skyblue,
        width: '100%',
        alignSelf: 'center',
        borderColor:'#c1edc0'
    },
    SubinnerBox:
    {
        width: '50%'

    },
    Text: {
        fontWeight: '500',
        fontSize:15,
        color:COLORS.black
    },
    Text2:
    {
        fontSize:15,
        fontWeight:'400',
        letterSpacing:1,
        color:COLORS.black
    }
})

export default SrDetails;