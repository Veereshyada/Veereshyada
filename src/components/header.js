import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import COLORS from '../Constants/color';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useTranslation } from "react-i18next";

const win = Dimensions.get('window');

const CustomHeader = ({
  HeadingName,
  Icons,
  margin,
  imageSize,
  onPressBack = () => { },
  onPressHome = () => { },
  onPressSetting = () => { },
  onPressNotification = () => { },
  BatteryStatus,
  BuyPalnPenality,
  PaymentOption,
},route) => {
  // console.log(HeadingName,'==============================>ajay');
  const { t } = useTranslation();

  const HomeIcon = () => {
    if (Icons.home === 'home') {
      return (<Entypo
        name='home'
        style={{ color: COLORS.white, fontSize: 23, paddingRight: 5 }}
      />)
    }
     else return <View></View>;
  };
  const IconsHomeNotificaton=()=>{
    if (Icons.notification === 'refresh') {
      return (<FontAwesome
        name='refresh'
        style={{ color: COLORS.white, fontSize: 23, paddingRight: 5,paddingLeft:5 }}
      />)
    }
    else{
      return (<Icon
        name='notifications'
        style={{ color: COLORS.white, fontSize: 23, paddingRight: 5 }}
      />)}
  }
  const Bgcolor=()=>{
    if(HeadingName==t('findnearests')){
      return "transparent"
    }
    else
    return "#003B4D"
  }
  // console.log(Icons.back, "fdsaf============================================================");
  return (
    <View style={{ }}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.skyblue}
        hidden={false}
        barStyle="light-content"
      />
      <View style={Styles.header}>
        <View style={{ width: '25%', paddingVertical: 5 }}>
          <TouchableOpacity onPress={onPressBack}>
            <Icon
              name={Icons.back}
              style={{ color: COLORS.white, fontSize: 23, paddingLeft: 5 }}
              type="Ionicons"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '50%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/LOGO.png')}
            style={{
              width: Platform.OS == 'android' ? '95%' : '85%',
              // width: Platform.OS == 'android' ? '83%' : '85%',
              height: 27.5,
              alignSelf: 'center',
            }}
          />
        </View>
        <View
          style={Styles.headerhome}>
          <TouchableOpacity onPress={onPressHome} style={{ paddingVertical: 5,marginLeft:margin}}>
            {HomeIcon()}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressNotification}
            style={{ padding: 2 }}>
            {IconsHomeNotificaton()}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressSetting}
            style={{ padding: 2 ,}}>
            <Icon
              name={Icons.setting}
              style={{ color: COLORS.white, fontSize: 22, marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingTop: 10, paddingHorizontal: 20 ,backgroundColor:{Bgcolor}}}>
        <View style={{ width: '65%', flexDirection: 'row' }}>
          <View
            style={{
              width: 25,
              height: 40,
              backgroundColor: COLORS.skyblue,
              marginRight: -8,
              borderTopLeftRadius: 15,
            }}></View>
          <ImageBackground
            source={require('../assets/TextBg.png')}
            style={[
              Styles.TextBg,
              {
                height: imageSize.bgHeight,
                width: imageSize.bgWidth,
                marginBottom: 5,
              },
            ]}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: Platform.OS == 'android' ? 18 : 22,
                fontWeight: Platform.OS == 'android' ? '700' : '800',
              }}>
              {HeadingName}
            </Text>
          </ImageBackground>
          <Image
            source={require('../assets/line.png')}
            style={{
              height: imageSize.lineHeight,
              width: imageSize.lineWidth,
              marginLeft: imageSize.marginLeft,
              marginTop: 5.3,
              // backgroundColor:'red'
            }}
          />
          <View
            style={{
              height: imageSize.viewHeight,
              backgroundColor: COLORS.skyblue,
              width: imageSize.viewWidth,
              marginTop: 5.3,
              marginLeft: '-3%',
            }}></View>
          <View
            style={{
              width: 5,
              height: 7,
              borderRadius: 60,
              backgroundColor: COLORS.skyblue,
              marginTop: 2.7,
            }}></View>
        </View>
        <View>
          {BatteryStatus}
          {BuyPalnPenality}
          {PaymentOption}
        </View>
      </View>
      <ImageBackground
        source={require('../assets/ImageBg.png')}
        style={[
          Styles.ImageBg,
          { height: imageSize.MianImageHeight, width: imageSize.MainImgWidth },
        ]}>
        <View></View>
      </ImageBackground>
      <View
        style={{
          height: 20,
          width: '100%',
          backgroundColor:Bgcolor(),
          paddingHorizontal: 5,
        }}>
        <Image
          source={require('../assets/VehicleBg.png')}
          style={[
            Styles.VehicleBg,
            { height: imageSize.VimageHeight, width: imageSize.VimageWidth },
          ]}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: COLORS.skyblue,
    with: '100%',
  },
  ImageBg: {
    // marginTop: ,
    alignSelf: 'center',
  },
  TextBg: {
    borderColor: COLORS.skyblue,
    justifyContent: 'center',
  },
  LineBg: {
    // marginTop:20,
    height: 20,
    width: '100%',
  },
  VehicleBg: {
    alignSelf: 'flex-end',
    marginTop: -53,
  },
  headerhome:{
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5
  }
});

export default CustomHeader;
