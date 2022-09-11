import React from "react";
import { View, Dimensions, StatusBar, TouchableOpacity, Image, StyleSheet } from 'react-native';
import COLORS from "../constant/color";
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const windowWidth = Dimensions.get('window').width;
const Header = ({ onPressBack = () => { },
    onPressHome = () => { },
    onPressSetting = () => { },
    onPressNotification = () => { },
    Icons
}) => {
    return (
        <View style={{ width: windowWidth, backgroundColor: COLORS.skyblue, justifyContent: 'center', alignItems: 'center' }}>
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
                            name={Icons.goBack}
                            style={{ color: COLORS.white, fontSize: 23, paddingLeft: 5 }}
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
                        source={require('../assets/imgs/chargeuplogo.png')}
                        style={{
                            width: Platform.OS == 'android' ? '90%' : '85%',
                            height: 26,
                            alignSelf: 'center',
                        }}
                    />
                </View>
                <View
                    style={{
                        width: '25%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 5,
                    }}>
                    <TouchableOpacity onPress={onPressHome} style={{ paddingVertical: 2 }}>
                        <Entypo
                            name={Icons.goHome}
                            style={{ color: COLORS.white, fontSize: 23, paddingRight: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onPressNotification}
                        style={{ paddingVertical: 2 }}>
                        <Icon
                            name={Icons.goNotifications}
                            style={{ color: COLORS.white, fontSize: 23, paddingRight: 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onPressSetting}
                        style={{ paddingVertical: 2 }}>
                        <Icon
                            name={Icons.goSettings}
                            style={{ color: COLORS.white, fontSize: 22, marginRight: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: COLORS.skyblue,
        with: '100%',
    }
})
export default Header;