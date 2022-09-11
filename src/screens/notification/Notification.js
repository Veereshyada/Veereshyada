import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
} from 'react-native';
import CustomHeader from '../../components/header';
import COLORS from '../../Constants/color';
import { useTranslation } from 'react-i18next';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Notification = ({ navigation }) => {
    const { t } = useTranslation();
    const [Click, setClick] = useState(true);
    const low = t(`yourbatterylow`);
    const Issued = t(`yourbattryIssue`);
    const SwapLeft = t(`yourSwapleft`);
    // const Data = [
    //     {
    //         Id: '1',
    //         Discription: low,
    //         Battery: 'B2144',
    //     },
    //     {
    //         Id: '2',
    //         Discription: Issued,
    //         Battery: 'B2144',
    //     },
    //     {
    //         Id: '3',
    //         Discription: SwapLeft,
    //     },
    //     {
    //         Id: '4',
    //         Discription: low,
    //     },
    // ];
    const Back = () => {
        navigation.navigate('Home1');
    };
    const GoHome = () => {
        navigation.navigate('Home1');
    };
    const Settings = () => {
        navigation.navigate('Settings');
    };

    // const ShowData = ({ item }) => {
    //     return (
    //         <TouchableOpacity
    //             style={{
    //                 flexDirection: 'row',
    //                 padding: 10,
    //                 width: '95%',
    //                 backgroundColor: COLORS.green,
    //                 marginTop: 20,
    //                 alignSelf: 'center',
    //                 borderRadius: 5,
    //                 height: 75,
    //             }}>
    //             <View
    //                 style={{
    //                     width: '15%',
    //                     justifyContent: 'center',
    //                     alignItems: 'center',
    //                 }}>
    //                 <FontAwesome
    //                     name="car-battery"
    //                     size={40}
    //                     color={COLORS.skyblue}
    //                     style={{ paddingHorizontal: 5 }}
    //                 />
    //                 {/* <FontAwesome5 name="car-battery"  color={COLORS.skyblue} style={{ paddingHorizontal: 5 }} /> */}
    //             </View>
    //             <View style={{ width: '85%', marginLeft: 10 }}>
    //                 <Text
    //                     style={{
    //                         color: 'white',
    //                         fontSize: Platform.OS == 'android' ? 14 : 16,
    //                         fontWeight: '500',
    //                     }}>
    //                     {item.Discription}
    //                 </Text>
    //                 <Text
    //                     style={{
    //                         color: 'white',
    //                         fontSize: Platform.OS == 'android' ? 14 : 16,
    //                         fontWeight: '500',
    //                     }}>
    //                     {item.Battery}
    //                 </Text>
    //                 <Text
    //                     style={{
    //                         alignSelf: 'flex-end',
    //                         color: 'white',
    //                         fontSize: Platform.OS == 'android' ? 12 : 13,
    //                         fontWeight: '400',
    //                         marginRight: 10,
    //                     }}>
    //                     2 {t('daysago')}
    //                 </Text>
    //             </View>
    //         </TouchableOpacity>
    //     );
    // };
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <CustomHeader
                Icons={{ home: 'home', back: 'arrow-back', setting: 'settings' }}
                onPressBack={Back}
                onPressHome={GoHome}
                onPressSetting={Settings}
                HeadingName={t('notification')}
                imageSize={{
                    bgWidth: '110%', bgHeight: 40, lineWidth: '30%', lineHeight: 35, viewHeight: 2.5, viewWidth: '32%', marginLeft: "-18%", MainImgWidth: '100%', MianImageHeight: 140, VimageHeight: 62, VimageWidth: Platform.OS == 'android' ? '71.5%' : '68%'
                }}
            />
            <View style={{ flex: 1, backgroundColor: COLORS.skyblue }}>
                <View>
                    <Text style={{alignSelf:'center',color:'white',fontSize:18,fontWeight:'700',marginTop:60}}>{t("Notification")}</Text>
                    {/* <FlatList data={Data} renderItem={ShowData} /> */}
                </View>
            </View>
        </SafeAreaView>
    );
};
const Styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
});
export default Notification;
