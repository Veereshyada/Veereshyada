import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image, Platform, } from 'react-native';
import COLORS from '../constant/color';

const    BackgrundText = ({ imageSize, HeadingName, imagName, linename, Imgcolor, TextColor }) => {
    return (
        <View style={{ width: '95%', alignSelf: 'center' }}>
            <View style={{ width: '65%', flexDirection: 'row' }}>
                <View
                    style={{
                        width: 25,
                        height: 40,
                        backgroundColor: Imgcolor,
                        marginRight: -8,
                        borderTopLeftRadius: 15,
                    }}></View>
                <ImageBackground
                    source={imagName}
                    style={{
                        borderColor: COLORS.skyblue, justifyContent: 'center', height: imageSize.bgHeight, width: imageSize.bgWidth, marginBottom: 5,
                    }}>
                    <Text
                        style={{
                            color: TextColor,
                            fontSize: Platform.OS == 'android' ? 18 : 22,
                            fontWeight: Platform.OS == 'android' ? '700' : '800',
                        }}>
                        {HeadingName}
                    </Text>
                </ImageBackground>
                <Image
                    source={linename}
                    style={{
                        height: imageSize.lineHeight,
                        width: imageSize.lineWidth,
                        marginLeft: imageSize.marginLeft,
                        marginTop: 5.3,
                    }}
                />
                <View
                    style={{
                        height: imageSize.viewHeight,
                        backgroundColor: Imgcolor,
                        width: imageSize.viewWidth,
                        marginTop: 5.3,
                        marginLeft: '-3%',
                    }}></View>
                <View
                    style={{
                        width: 5,
                        height: 7,
                        borderRadius: 60,
                        backgroundColor: Imgcolor,
                        marginTop: 2.7,
                    }}>

                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    ImageBg: {
        alignSelf: 'center',
    },
    LineBg: {
        height: 20,
        width: '100%',
    },
});
export default BackgrundText;


