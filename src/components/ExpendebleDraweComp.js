import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View, Text, ScrollView, StyleSheet, LayoutAnimation } from 'react-native';
import CONTENT from '../constant/drawerListData';
import Icon from 'react-native-vector-icons/AntDesign';
import COLORS from '../constant/color';
import { useNavigation } from '@react-navigation/native';




const screenName = (item, key) => {
    switch (item) {
        case 'TOTAL SWAPS - TODAY':
            return 'TotalSwapToday';
            break;
        case 'TOTAL SWAP - MONTH':
            return 'TotalSwapMonth';
            break;
        case 'TOTAL PLAN SOLD TODAY':
            return 'TotalPlanSoldToday';
            break;
        case 'TOTAL PLAN SOLD - MONTH':
            return 'TotalPlanSoldMonth';
            break;
        case 'A':
            return 'Payment';
            break;
        case 'B':
            return 'CurrentAddress';
            break;
        case 'C':
            return 'DriverDocumentuplaod';
            break;
        case 'D':
            return 'DriverOnBoardingRegister';
            break;
        case 'E':
            return 'DriverOnBoardingOtpValidation';
            break;
        case 'F':
            return 'GuarantorDetails';
            break;
        case 'G':
            return 'GuarantorDetailsPayment';
            break;
        case 'H':
            return 'PaymentError';
            break;
        case 'I':
            return 'PaymentSuccessful';
            break;
        case 'J':
            return 'PersonalDetails';
            break;
        case 'K':
            return 'ReferrerOnboarding';
            break;
        case 'L':
            return 'VechileDetails';
            break;
        case 'M':
            return 'VechileDetailsUnregisterd';
            break;
        case 'N':
            return 'VehicleOwner';
            break;
        case 'O':
            return 'SrStatus';
            break;
        case 'P':
            return 'DealarSendOtp';
            break;
        case 'Q':
            return 'TotalPlanSoldMonth';
            break;
        case 'R':
            return 'TotalPlanSoldMonth';
            break;
        case 'S':
            return 'TotalPlanSoldMonth';
            break;
        case 'T':
            return 'TotalPlanSoldMonth';
            break;

    }
}
const ExpandebleComponent = ({ item, onClickFunction }) => {
    const [layoutHeight, setLayoutHeight] = useState(0)
    const [geticon, seticon] = useState('plus')
    const navigation = useNavigation();


    useEffect(() => {
        if (item.isExpended) {
            setLayoutHeight(null)
            seticon('minus')
        }
        else {
            setLayoutHeight(0)
            seticon('plus')
        }
    }, [item.isExpended])

    return (
        <View style={style.BtnContainner}>
            <TouchableOpacity onPress={onClickFunction}>
                <View style={style.expandBtn}>
                    <View style={style.imgcontainner}>
                        <Image source={require('../assets/icons/community.png')} style={style.image} />
                    </View>
                    <View style={style.textContainner}>
                        <Text style={{ color: 'white' }}>{item.category_name}</Text>
                    </View>
                    <View style={style.iconContainner}>
                        <Icon
                            name={geticon}
                            style={{ color: COLORS.white, fontSize: 12, paddingRight: 5 }}
                        />
                    </View>
                </View>
                <View style={{ width: '65%', alignSelf: 'center', borderBottomColor: 'white', borderBottomWidth: 2 }}></View>
            </TouchableOpacity>
            <View style={[style.submenues, { height: layoutHeight }]}>
                <View style={{ backgroundColor: COLORS.skyblue, height: 5, width: '100%' }}></View>
                {
                    item.subCategory[0].val.map((item, key) => (
                        <View key={key}>
                            <TouchableOpacity onPress={() => navigation.navigate(screenName(item, key))}>
                                <Text style={style.innerText}>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>

        </View>
    )
}
const ExpendebleDraweComp = () => {
    const [multiselect, setmultiselect] = useState(false)
    const [listDataSource, setListDataSource] = useState(CONTENT)


    const updatLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if (multiselect) {
            array[index]['isExpended'] = !array[index]['isExpended'];
        } else {
            array.map((value, placeindex) =>
                placeindex === index
                    ? (array[placeindex]['isExpended']) = !array[placeindex]['isExpended']
                    : (array[placeindex]['isExpended']) = false
            )
        }
        setListDataSource(array)
    }
    return (
        <View style={style.containner}>
            <View>
                {/* <TouchableOpacity
                    onPress={() => setmultiselect(multiselect)}>
                    <Text>
                        {
                            multiselect
                                ? 'Enable Single\n Expand'
                                : 'Enable Multiple\n Expand'
                        }
                    </Text>
                </TouchableOpacity> */}
            </View>
            <ScrollView>
                {
                    listDataSource.map((item, key) => (
                        <ExpandebleComponent
                            key={item.category_name}
                            item={item}
                            onClickFunction={() => {
                                updatLayout(key)
                            }}
                        />
                    ))
                }
            </ScrollView>
        </View>

    )
}


const style = StyleSheet.create({
    containner: {
        // backgroundColor: 'red'
    },
    BtnContainner:
    {
        // backgroundColor: 'green',
    },
    expandBtn: {
        // backgroundColor: 'orange',
        width: '100%',
        paddingHorizontal: 5,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgcontainner: {
        width: '15%',
        // backgroundColor: 'pink'
    },
    image: {
        height: 40,
        width: 40
    },
    textContainner: {
        width: '77%',
        // backgroundColor: 'red',

    },
    iconContainner: {
        width: '8%',
        // backgroundColor: 'green'
    },
    submenues: {
        overflow: 'hidden',
        backgroundColor: '#c6cbef',
        // width:'100%',
        // paddingHorizontal:10,
        // alignSelf:'center'

    },
    innerText: {
        textTransform: "uppercase",
        color: COLORS.skyblue,
        paddingVertical: 5,
        marginLeft: '20%'
    }

});

export default ExpendebleDraweComp