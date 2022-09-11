
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Switch
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './header';
import COLORS from '../constant/color';

const QrScanner = ({ navigation }) => {
  const [torchEnabled, setTorchEnabled] = React.useState(false);
  // onSuccess = e => {
  //   Linking.openURL(e.data).catch(err =>
  //     console.error('An error occured', err)
  //   );
  // };

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

  onSuccess = (e) => { (console.log('QR code scanned!', e.data)) }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.skyblue}}>
      <Header
        onPressNotification={Notification}
        onPressHome={GoHome}
        onPressSetting={Settings}
        onPressBack={Back}
        Icons={{ goBack: 'arrow-back', goSettings: 'settings', goNotifications: 'notifications', goHome: 'home' }}
      />
      <View style={{borderColor:COLORS.skyblue,borderRadius:5,borderWidth:5,height:300, width: '80%', alignSelf: 'center',overflow:'hidden',borderRadius:15,marginTop:150}}>
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={torchEnabled ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
          checkAndroid6Permissions={true}

        />
      </View>

      <View style={{ marginBottom: 20, flexDirection: "row",alignSelf:'center',marginTop:50 }}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginRight: 20 }}>Torch</Text>
        <Switch
          trackColor={{ false: "#767577", true: "black" }}
          thumbColor={torchEnabled ? COLORS.white : COLORS.green}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(newValue) => {
            setTorchEnabled(newValue);
          }}
          value={torchEnabled}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default QrScanner;