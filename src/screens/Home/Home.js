import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    Platform,
    BackHandler,
    Alert
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useTranslation } from 'react-i18next';
import CustomHeader from '../../components/header';
import { useDispatch, useSelector } from 'react-redux';
import { qrCodegerate } from '../../redux/actions/loginAction';
import {
    IotTokanApi,
    IotTokendata,
    getcoordinate,
    saveLatLong,
    postDealerDataCoordinates
} from '../../redux/actions/getcurrentplanAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../../Constants/color';
import Modal from 'react-native-modal';

const Home = ({ navigation }) => {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const hello = t('hello');
    const [isModalVisible, setModalVisible] = useState(false);
    const [getdata, setdata] = useState('');
    const [getbettry, setgetbettry] = useState('');
    const [DriverName,setdriverName]=useState('');
    const [DriverId,setdriverId]=useState("")
    const { userDatas } = useSelector(state => ({
        userDatas: state.loginReducer.userData,
    }));
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const { qrcodeimg } = useSelector(state => ({
        qrcodeimg: state.loginReducer.qrcodeimg,
    }));
    const { iotgettokan } = useSelector(state => ({
        iotgettokan: state.loginReducer.iotgettokan,
    }));

    useEffect(() => {
        const qr = userDatas.OtpVerified;
        let getiotdata = iotgettokan.access_token;
        if (qr != '') {
            dispatch(qrCodegerate(qr));
            dispatch(IotTokendata());
            dispatch(IotTokanApi(getiotdata));
        }
    }, []);

    useEffect(() => {
        const qr = userDatas.OtpVerified;
        if (qr != '') {
            dispatch(qrCodegerate(qr));
            dispatch(getcoordinate(qr));
        }
    }, []);

    const iotdatget = async () => {

        try {
            const value = await AsyncStorage.getItem('iotdata');
            // console.log('===========================================>   ', value);
            const val = JSON.parse(value);
            const betrryget = val.data[0].deviceDetails.name;
            setgetbettry(betrryget);
            const iotdata = val.data[0].canInfo;
            setdata(iotdata);
           // console.log("DATA ON HOME IS",val?.data[0].location.longitude,val.data[0].location.latitude )
            dispatch(saveLatLong({longitude:val?.data[0].location.longitude,latitude:val.data[0].location.latitude}))
            dispatch(postDealerDataCoordinates({"lon2":parseFloat(val?.data[0].location.longitude),"lat2":parseFloat(val.data[0].location.latitude)}))
            if (val !== null) {
                //  console.log(val.data[0].canInfo,"value======")
            }
        } catch (e) {
            // error reading value
        }
        
    };
    const userInfo = async () => {
        try {
            const DriverInfo = await AsyncStorage.getItem('DriverInfo');
            // console.log('===========================================>   ', DriverInfo);
            const val = JSON.parse(DriverInfo);
            setdriverName(val.data.driver)
            setdriverId(val.data.driverOldId)
        } catch (e) {
            console.log(e,'error');
        }
       
    };

    useEffect(() => {
        setTimeout(() => {
            iotdatget();
            userInfo();
        }, 3000);
    }, []);

    const Back = () => {
        navigation.openDrawer();
    };
    const Notification = () => {
        navigation.navigate('Notification');
    };
    const Settings = () => {
        navigation.navigate('Settings');
    };
    const Img = () => {
        const img = qrcodeimg;
        if (img.length > 0) {
            return (
                <Image
                    source={{ uri: img }}
                    style={{ width: 140, height: 140, alignSelf: 'center' }}
                />
            );
        }
        else {
            return <Text style={{ color: 'white' }}>Sorry Qr not found </Text>
        }
    };


    useEffect((i) => {
        //console.log(i,'hey==============================>');
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to exit app?", [
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
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <CustomHeader
                Icons={{
                    setting: 'settings',
                    back: 'md-menu-sharp',
                    refresh: 'notifications',
                    notification: 'notifications',
                }}
                onPressBack={Back}
                onPressNotification={Notification}
                onPressSetting={Settings}
                HeadingName={hello + `  ${DriverName}`}
                margin="30%"
                imageSize={{
                    bgWidth: '115%',
                    bgHeight: 40,
                    lineWidth: '30%',
                    lineHeight: 35,
                    viewHeight: 2,
                    viewWidth: '22%',
                    marginLeft: '-14%',
                    MainImgWidth: '100%',
                    MianImageHeight: 140,
                    VimageHeight: 62,
                    VimageWidth: Platform.OS == 'android' ? '71.5%' : '68%',
                }}
                BatteryStatus={
                    DriverId === "D1454" ?
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            paddingTop: 10,
                            height: 40,
                        }}>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: '400',
                                marginLeft: '60%',
                                paddingHorizontal: 10,
                                color: 'black',
                            }}>
                            {t('battery')}
                        </Text>
                        <Image
                            source={require('../../assets/batteryfullblack.png')}
                            style={{ width:24, height:24, alignSelf: 'center' }} 
                            />
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: '400',
                                paddingHorizontal: 10,
                                color: 'black',
                            }}>
                            {getdata.stateOfCharge}%
                        </Text>
                    </View>
                    :
                    <View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                        paddingTop: 10,
                        height: 40,
                    }} />
                }
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: COLORS.skyblue }}>
                <Modal isVisible={isModalVisible}>
                    <TouchableOpacity
                        style={{
                            alignSelf: 'center',
                            backgroundColor: 'white',
                            width: '80%',
                            padding: 10,
                            borderRadius: 20,
                        }}>
                        <Text
                            style={[Styles.TextStyle, { alignSelf: 'center', color: 'black' }]}>
                            {t('driverqrcode')}
                        </Text>
                        {/* <Img/> */}
                        <Image
                            source={{ uri: qrcodeimg }}
                            style={{ width: 200, height: 200, alignSelf: 'center', margin: 10 }}
                        />
                        <TouchableOpacity
                            onPress={toggleModal}
                            style={{
                                alignSelf: 'center',
                                paddingHorizontal: 25,
                                backgroundColor: COLORS.skyblue,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingVertical: 8,
                                marginBottom: 2,
                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    textTransform: 'uppercase',
                                    fontWeight: '700',
                                }}>
                                ok
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ width: '50%', paddingHorizontal: 20 }}>
                        <Text style={[Styles.TextStyle, { marginRight: '17%', marginBottom: 3 }]}>
                            {t('Driver_Code')}
                        </Text>
                        <TouchableOpacity onPress={toggleModal} style={{ width: 135, height: 130, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                            <Img />
                        </TouchableOpacity>
                        <Text style={[Styles.TextStyle, { marginRight: '10%', paddingTop: 3 }]}>
                            {t('driverid')}:<Text style={{ color: COLORS.white }}>{` ${DriverId}`}</Text>
                        </Text>
                    </View>
                    <View style={{ width: '50%', height: 170, paddingRight: 10 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Nearest Swaping Station')}
                            style={{
                                flexDirection: 'row',
                                borderColor: '#c1edc0',
                                borderWidth: 1,
                                width: '92%',
                                paddingVertical: 10,
                                // paddingHorizontal: 5,
                                alignItems: 'center',
                                borderRadius: 10,
                                backgroundColor: 'white',
                                marginTop: 115,
                            }}>
                            <Text style={{ paddingLeft: 10, color: '#003B4D', fontWeight: "bold" }}>
                                {t('findnearests')}
                            </Text>
                            <Entypo
                                name="chevron-small-right"
                                size={24}
                                color="green"
                                style={{ marginLeft: Platform.OS == 'android' ? '1.4%' : '9%' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View
                    style={{
                        backgroundColor: 'white',
                        marginTop: 10,
                        borderColor: '#c1edc0',
                        borderWidth: 1,
                        width: '90%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        padding: 20,
                    }}>
                    <View>
                        <Text style={{ fontSize: 14, color: '#003B4D', fontWeight: '500' }}>
                            {t('currentpaln')}
                        </Text>
                        <Text style={{ fontWeight: '700', color: '#003B4D', fontSize: 17 }}>
                            {t('dailySwapplan')}
                        </Text>
                        <View style={{flexDirection:'row'}}>
                            <Text
                                style={{
                                    paddingTop: 20,
                                    paddingBottom: 5,
                                    fontWeight: '500',
                                    color: COLORS.silver,
                                    fontSize: 17,
                                }}>
                                {t('dailyplanswap2')}
                            </Text>
                        </View>
                    </View>
                    {DriverId === "D1454" &&
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTopColor: '#c1edc0',
                            borderTopWidth: 2,
                            paddingTop: 10,
                        }}>
                        <View
                            style={{
                                borderRightWidth: 2,
                                borderRightColor: '#c1edc0',
                                width: '50%',
                                height: 50,
                            }}>
                            <Text style={{ fontSize: 14, color: 'gray' }}>
                                {t('currentissuedbattery')}
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'flex-start' }}>
                            <Image
                                source={require('../../assets/icon_3.png')}
                                style={{ width:20, height:20, alignSelf: 'center' }} 
                                />
                                <Text style={{ fontSize: 13, paddingTop: 3, color: 'black', paddingLeft: 4 }}>
                                    {getbettry} | {getbettry}
                                </Text>
                            </View>


                        </View>
                        <View style={{ width: '50%', height: 50 }}>
                            <Text style={{ textAlign: 'right', fontSize: 14, color: 'gray' }}>
                                {t('voltage')}
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignSelf: 'flex-end' }}>
                                <MaterialIcons name="bolt" size={20} color="#1e8a1e" style={{ marginTop: 0 }} />
                                <Text
                                    style={{
                                        fontSize: 13,
                                        paddingTop: 3,
                                        color: 'black',
                                    }}>
                                    {getdata.bmsVoltage} Volt | {getdata.bmsVoltage} Volt
                                </Text>
                            </View>

                        </View>
                    </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    header: {
        width: '80%',
        paddingBottom: 10,
    },
    TextStyle: {
        fontSize: Platform.OS == 'android' ? 16 : 18,
        color: COLORS.white,
        fontWeight: '500',
        paddingVertical: 3,
    },
});
export default Home;
