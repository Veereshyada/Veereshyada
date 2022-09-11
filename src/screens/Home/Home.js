import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native';
import COLORS from '../../constant/color'
import Header from '../../components/header';
import BackgrundText from '../../components/BackgroundText';
import Images from '../../constant/imgurls';
import BackgrounImg from '../../components/BackgroundImg';
import DcumentPicker from '../../components/documentPicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ScanScreen from '../../components/QrScanner';
const Home = ({ navigation }) => {

    
    const Back = () =>{
        navigation.openDrawer();
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
                Icons={{goBack:'md-menu-sharp',goSettings:'settings',goNotifications:'notifications',goHome:'home'}}
            />

            {/* <BackgrounImg 
            BgColor={COLORS.skyblue}
            screenName={'ajay'}/> */}
            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                <BackgrundText
                    HeadingName={"Do Swap Transaction"}
                    imagName={Images.whiteImg}
                    linename={Images.whiteLine}
                    Imgcolor={COLORS.white}
                    TextColor={COLORS.skyblue}
                    imageSize={{ bgWidth: '105%', bgHeight: 40, lineWidth: '27%', lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: "-22%" }}
                />
            </View>
            <View>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('Qrscanner')}
                style={styles.camera}>
                    <Image source={Images.camera} style={styles.camImg} />
                </TouchableOpacity>
                <Text style={[styles.textstyle, { fontSize: 15, fontWeight: '400' }]}>Scan Driver QR Code</Text>
                <Text style={[styles.textstyle, { fontSize: 15, fontWeight: '400' }]}>Or</Text>
                <Text style={[styles.textstyle, { fontSize: 20, fontWeight: '500' }]}>Driver ID</Text>
                <TextInput placeholder='Type Driver ID & Search'
                    placeholderTextColor={COLORS.silver}
                    style={styles.input} />
            </View>

        </SafeAreaView>
    )
}


export default Home

const styles = StyleSheet.create({
    camera: {
        height: 120,
        width: 120,
        marginTop: 150,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: COLORS.white,
    },
    camImg: {
        height: '45%',
        width: '55%',
        alignSelf: 'center'
    },
    textstyle: {
        marginTop: 25,
        alignSelf: 'center',
        color: COLORS.white
    },
    input: {
        alignSelf: 'center',
        backgroundColor: COLORS.white,
        fontWeight:'500',
        width:'60%',
        marginTop:20,
        borderRadius:10,
        textAlign:'center'
    }
})