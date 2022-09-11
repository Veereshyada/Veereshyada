import React from "react";
import { View, Text, Image, ImageBackground } from 'react-native';
import Images from "../constant/imgurls";
import COLORS from "../constant/color";
import BackgrundText from "./BackgroundText";


const BackgrounImg = ({ BgColor, screenName }) => {
    return (
        <View>
            <ImageBackground
                source={Images.BackgroundImg}
                style={{ height: 200, width: '100%', backgroundColor: BgColor }}>
                <View style={{ marginTop: 10 }}>
                    <BackgrundText
                        HeadingName={screenName}
                        imagName={Images.blueImg}
                        linename={Images.blueLine}
                        Imgcolor={COLORS.skyblue}
                        TextColor={COLORS.white}
                        imageSize={{ bgWidth: '105%', bgHeight: 40, lineWidth: '27%', lineHeight: 35, viewHeight: 2.5, viewWidth: '40%', marginLeft: "-22%" }}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

export default BackgrounImg;


