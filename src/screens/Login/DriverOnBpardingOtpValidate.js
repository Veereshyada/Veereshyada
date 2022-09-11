import React,{useState} from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView,TextInput,Keyboard } from "react-native";
import Button from "../../components/button";
import Header from "../../components/header";
import COLORS from "../../constant/color";
import BackgrundText from "../../components/BackgroundText";
import Images from "../../constant/imgurls";
import Loader from '../../components/Loader';
const DriverOnBoardingOtpValidation = ({ navigation }) => {
    const [sendId,setPhone] = useState('');
    const [inputs, setInputs] = React.useState({ DriverID: '', password: '' });
    const [errors, setErrors] = React.useState({});
    const [incorrect, setErrorotp] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const DealerValidate =async()=>{
        try {
            const secure = JSON.stringify(inputs.password)
            await AsyncStorage.setItem('secureid', secure);
          } catch (e) {
            // saving error
          }
        Keyboard.dismiss();
        let isValid = true;
        if (inputs.password) {
            handleError('Please input Valid Otp', 'password');
            isValid = false;
            
        }
         
          if (!inputs.password=='6373') {
            handleError('Incorrect Otp', 'password');
            isValid = false;
          }else if(inputs.password=='6373'){                                 
            login();
          }
          
    console.log(inputs.password);
    }
    const login = async() => {
        // try {
        //   const n_umb = inputs.DriverID;
        //   await AsyncStorage.setItem('UserId', n_umb)
        // } catch (e) {
        //   // saving error
        // }
        //dispatch(IotTokendata());
        setLoading(true);
        setTimeout(async () => {
          setLoading(false);
        navigation.replace('MainScreen');
    
        },2000);
      };

    const handleOnchange = async (text, input) => {
        setPhone(inputs.password);
    
        setInputs(prevState => ({ ...prevState, [input]: text }));
    
      };
      const handleError = (error, input) => {
        
        setErrors(prevState => ({ ...prevState, [input]: error }));
      };

    // const Back = () => {
    //     navigation.navigate("Home1")
    // }
    // const Settings = () => {
    //     navigation.navigate("Settings")
    // }
    // const Notification = () => {
    //     navigation.navigate("Notifications")
    // }
    // const GoHome = () => {
    //     navigation.navigate("Home1")
    // }
    // const logedIn=()=>{
    //     navigation.navigate("MainScreen")
    // }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#003B4D" }}>
            {/* <Header
                onPressNotification={Notification}
                onPressHome={GoHome}
                onPressSetting={Settings}
                onPressBack={Back}
                Icons={{ goBack: 'arrow-back', goSettings: 'settings', goNotifications: 'notifications', goHome: 'home' }}
            /> */}
            <View style={{marginTop:'2%'}}></View>
            <Loader visible={loading} />
            <BackgrundText
                    HeadingName={"Driver onboarding"}
                    imagName={Images.whiteImg}
                    linename={Images.whiteLine}
                    Imgcolor={COLORS.white}
                    TextColor={COLORS.skyblue}
                    imageSize={{ bgWidth: '95%', bgHeight: 40, lineWidth: '27%', lineHeight: 35, viewHeight: 2.5, viewWidth: '46%', marginLeft: "-26%" }}
                />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: '95%', justifyContent: "center", alignItems: "center" }}>
                    <View style={{ justifyContent: "center", alignItems: "center", }}>
                        <Image source={require("../../assets/imgs/sendotp.jpg")} style={styles.imgview} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 60 }}>
                        <Text style={styles.textitem}>
                            Enter OTP Rcvd on Driver ID
                        </Text><Text style={{ color: "#fff", marginLeft: 5, marginRight: 5 }}>:</Text>
                        <Text style={styles.textitem1}>
                            6373
                        </Text>
                    </View>
                    <View style={{marginVertical:10,width:'100%'}}>
                        <TextInput
                         maxLength={4}
                         onChangeText={text => handleOnchange(text, 'password')}
                         onFocus={() => handleError(null, 'password')}
                         error={errors.password}
                        placeholder="Validate OTP"
                        placeholderTextColor={COLORS.silver}
                            style={{backgroundColor:COLORS.white,width:'70%',borderRadius:10,alignSelf:"center",textAlign:'center'}}
                        />
                        <Text style={{ paddingBottom: 20, color: 'red', fontSize: 12 }}>{incorrect}</Text>
                    </View>
                    <View style={{ marginTop: 20 }}></View>
                    <Button
                        onPress={DealerValidate}
                        title={"Submit"}
                        Style={{ width: '70%' }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    imgview: {
        width: 200,
        height: 200,
    },
    textitem: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },
    textitem1: {
        fontSize: 20,
        fontWeight: "bold",
        color: "green"
    },
})

export default DriverOnBoardingOtpValidation;