
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomHeader from '../../components/header';
import Button from '../../components/Button';
import COLORS from '../../Constants/color';
import { useTranslation } from "react-i18next";



const RaisService = ({ navigation }) => {
    const { t } = useTranslation();
    const icon = () => {
        return (<Icon
            name='keyboard-arrow-down'
            size={24}
            color="#003B4D"
        />)
    }

    const Services = ['Battery', 'Financial', 'Other']
    const BatteryID = ['SR203', 'SR8998']

    const Back = () => {
        navigation.navigate("Complaints")
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

    const SubmitDetails = () => {
        // navigation.navigate("ComplentRaised")
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <CustomHeader
                Icons={{ setting: 'settings', home: 'home', back: 'arrow-back', refresh: 'refresh-sharp', notification: 'notifications' }}
                onPressBack={Back}
                onPressNotification={Notification}
                onPressSetting={Settings}
                onPressHome={GoHome}
                HeadingName={t("Raise_a_Service")}
                imageSize={{ bgWidth: '100%', bgHeight: 40, lineWidth: '30%', lineHeight: 35, viewHeight: 2.5, viewWidth: '43%', marginLeft: '-26.5%', MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS == 'android' ? '71.5%' : '68%' }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ padding: '5%', width: '100%', alignSelf: 'center', backgroundColor: COLORS.skyblue }}>
                <Text style={{ paddingVertical: 5, color: COLORS.white, fontSize: 16, fontWeight: '500' }}>{t("Raise_Service_Request_For")}</Text>
                <SelectDropdown
                    data={Services}
                    onSelect={(item, index) => {
                        if (index == 1) {
                            navigation.navigate("Other Complents")
                        } else if (index == 2) {
                            navigation.navigate("Other Complents")
                        }
                        else
                            setIssueName(item)
                    }
                    }
                    defaultButtonText={Services[0]}
                    buttonTextStyle={{ marginLeft: '-60%' }}
                    buttonStyle={{ borderRadius: 10, height: 40, width: '100%', alignSelf: 'center', backgroundColor: COLORS.light }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    renderDropdownIcon={icon}

                />

                <Text style={{ paddingTop: 17, paddingBottom: 5, color: COLORS.white, fontSize: 16, fontWeight: '500' }}>{t("Select_Battery_ID")}</Text>
                <SelectDropdown
                    data={BatteryID}
                    onSelect={(item, index) => { SetBatteryID(item, index) }}
                    defaultButtonText={BatteryID[0]}
                    buttonTextStyle={{ marginLeft: '-70%' }}
                    buttonStyle={{ borderRadius: 10, height: 40, width: '100%', alignSelf: 'center', backgroundColor: COLORS.Litesilver }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    renderDropdownIcon={icon}
                />

                <Text style={{ paddingTop: 20, paddingBottom: 5, color: COLORS.white, fontSize: 16, fontWeight: '500' }}>{t("Discribe_The_Issue")}</Text>
                <TextInput
                    style={Styles.input}
                    placeholderTextColor={'grey'}
                    placeholder={t("Discrible_Your_Issue_here")}
                    onChangeText={(text) => { setIsuueDiscpt(text) }}
                    multiline={true}
                    numberOfLines={8}
                />



                <Button
                    onPress={SubmitDetails}
                    Style={'10%'}
                    title={t("submit")}
                />
                <View style={{ height: 50 }}></View>
            </ScrollView>


        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({

    input: {
        padding: 20,
        backgroundColor: COLORS.Litesilver,
        width: '100%',
        alignSelf: 'center',
        fontSize: 17,
        height: 200,
        borderRadius: 15,
        textAlignVertical: 'top'
    },

    RaiseReqs:
    {
        width: '100%',
        marginTop: 30,
        padding: 30,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.green,
        backgroundColor: COLORS.Litesilver,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:
    {
        fontWeight: '500',
        fontSize: 15
    },
    Heading:
    {
        fontWeight: '700',
        fontSize: 17,
        color: COLORS.skyblue,
    }
})

export default RaisService;
