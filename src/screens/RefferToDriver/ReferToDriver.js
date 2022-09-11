import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomHeader from "../../components/header";
import { useTranslation } from "react-i18next";
import {getcoordinate,} from '../../redux/actions/getcurrentplanAction';
import { useDispatch, useSelector } from 'react-redux';
import {View,Text,SafeAreaView,Keyboard,ScrollView,StyleSheet,} from "react-native";
import COLORS from "../../Constants/color";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import Input from "../../components/Input";

const ReferToDriver = ({ navigation }) => {
    const { t } = useTranslation();

    const Services = ["Relative", "Other"];

    const icon = () => {
        return (
            <Icon name="keyboard-arrow-down" size={24} color="#003B4D" />
        );
    };

    const Back = () => {
        navigation.navigate("Home1")
    }
    const Settings = () => {
        navigation.navigate("Settings")
    }
    const Notification = () => {
        navigation.navigate("Notification")
    }
    const GoHome = () => {
        navigation.navigate("Home1")
    }
    
    const Data = () => {
         const dispatch = useDispatch();
        const [inputs, setInputs] = React.useState({
            driverRelation: "",
            fullname: "",
            phone: "",
            password: "",
        });
        const [errors, setErrors] = React.useState({});
        const [loading, setLoading] = React.useState(false);
        const [referNo, setrefNo] = useState("")
        const { coordinate } = useSelector(state => ({
            coordinate: state.loginReducer.coordinate,
        }));

        const validate = () => {
            Keyboard.dismiss();
            let isValid = true;

            if (!inputs.fullname) {
                handleError("Please input fullname", "fullname");
                isValid = false;
            }

            if (!inputs.phone) {
                handleError("Please input phone number", "phone");
                isValid = false;
            }
            if (isValid) {
                register();
            }
        };
        const iotdatget = async () => {

            try {
                const value = await AsyncStorage.getItem('iotdata');
                const val = JSON.parse(value);
                setrefNo(val.referralContactNumber)
            } catch (e) {
                console.log(e, 'error');
            }

        };
        useEffect(() => {
            setTimeout(() => {
                iotdatget();
            }, 0);
        }, []);
        const register = () => {
            const userData = {
                userId: inputs.fullname,
                userotp: inputs.phone,
                relation: inputs.driverRelation
            }

            if (userData != '') {
                dispatch(getcoordinate(userData))
            }
            setLoading(true);
            setTimeout(() => {
                // setInputs({
                //     driverRelation: "",
                //     fullname: "",
                //     phone: "",
                //     password: "",
                // })
                handleOnchange(null, "fullname")
                navigation.navigate("ReferSuccess", { no: referNo })
            }, 1000);
        };
        const handleOnchange = (text, input) => {
            setInputs((prevState) => ({ ...prevState, [input]: text }));
        };
        const handleError = (error, input) => {
            setErrors((prevState) => ({ ...prevState, [input]: error }));
        };
        return (
            <ScrollView style={{ width: '100%', flex: 1, alignSelf: 'center', padding: '5%', backgroundColor: COLORS.skyblue }}
                showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: '500' }}>{t("nam")}</Text>
                    <Input
                        onChangeText={(text) => handleOnchange(text, "fullname")}
                        onFocus={() => handleError(null, "fullname")}
                        iconName="account-outline"
                        label="Full Name"
                        placeholder={t("Driver_name")}
                        error={errors.fullname}
                    />
                    <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: '500' }}>{t("p_number1")}</Text>
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => handleOnchange(text, "phone")}
                        onFocus={() => handleError(null, "phone")}
                        iconName="phone-outline"
                        label="Enter Mobile Number"
                        placeholder={t("p_number1")}
                        error={errors.phone}
                    />
                    <Text style={{ paddingBottom: 10, color: COLORS.white, fontSize: 16, fontWeight: '500' }}>{t("relation")}</Text>
                    <SelectDropdown
                        data={Services}
                        onSelect={(text) => handleOnchange(text, "driverRelation")}
                        defaultButtonText={Services[0]}
                        buttonTextStyle={{ marginLeft: "-60%" }}
                        rowStyle={{ borderRadius: 10 }}
                        rowTextStyle={{ textAlign: 'left', marginLeft: 20 }}
                        buttonStyle={{
                            borderRadius: 7,
                            width: "100%",
                            height: 45,
                            padding: 10,
                            alignSelf: "center",
                            backgroundColor: "silver",
                            backgroundColor: "#f9f9f9",
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            return item;
                        }}
                        renderDropdownIcon={icon}
                    />
                    <Button
                        title={t("submit")}
                        onPress={validate}
                        Style={'25%'}
                    />
                </View>
            </ScrollView>
        )
    }
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            {/* <Loader visible={loading} /> */}
            <CustomHeader
                Icons={{ setting: 'settings', home: 'home', back: 'arrow-back', refresh: 'refresh-sharp', notification: 'notifications' }}
                onPressBack={Back}
                onPressNotification={Notification}
                onPressSetting={Settings}
                onPressHome={GoHome}
                HeadingName={t("Refer_a_Driverr")}
                imageSize={{ bgWidth: '100%', bgHeight: 40, lineWidth: '30%', lineHeight: 35, viewHeight: 2.5, viewWidth: '47%', marginLeft: '-26%', MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS == 'android' ? '71.5%' : '68%' }}
            />
            <Data/>
        </SafeAreaView>
    );
};



const Styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    }
})
export default ReferToDriver;