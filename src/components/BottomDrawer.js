import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Platform, Linking, ScrollView, Image } from 'react-native';
import COLORS from '../Constants/color';
import { useTranslation } from "react-i18next";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

const Drawer = ({textdata }) => {

    const { locationDataRedux, currentLatLong } = useSelector(state => ({
        locationDataRedux: state.loginReducer.postDealerDataCoordinates,
        currentLatLong: state.loginReducer.currentLatLong
    }));
    // console.log("currentLatLong", locationDataRedux.stations);
    const [List, setList] = useState([])

    useEffect(() => {

        setList(locationDataRedux.stations)

    }, [locationDataRedux])

    console.log("LIST DATA IS", List)

    const { t } = useTranslation();

    const GetStation = ({ item }) => {

        console.log('item is', item)
        return (
            <TouchableOpacity
                onPress={() => {
                    let lat = item.latitude;
                    let lon = item.longitude;
                    if (Platform.OS === "android" || "web") {
                        Linking.openURL(
                            `https://www.google.com/maps/dir/?api=1&origin=` +
                            currentLatLong.lat +
                            `,` +
                            currentLatLong.lon +
                            `&destination=` +
                            lat +
                            `,` +
                            lon +
                            `&travelmode=driving`
                        );
                    } else {
                        console.log("Something Went Wrong?")
                    }
                }}
                // onPress={() => { navigation.navigate() }}
                style={{ flexDirection: 'row', marginTop: 10, borderRadius: 15, padding: 15, backgroundColor: COLORS.green, alignItems: 'center', width: '95%', alignSelf: 'center' }}>
                <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: 50, width: '16%', borderRadius: 10 }}>
                    <Image source={require("../assets/icon_4.png")} style={{ width: 35, height: 35, color: "#003B4D" }} />
                    {/* <MaterialCommunityIcons name="gas-station" size={20} color={COLORS.skyblue} /> */}
                </View>
                <View style={{ width: '65%', paddingLeft: 30 }}>
                    <Text style={{ fontWeight: '500', color: 'white' }}>{item.bssCode}</Text>
                    <Text style={{ fontSize: 12, color: 'white' }}>{item.address}</Text>
                </View>
                <View style={{ width: '20%' }}>
                    <Text style={{ fontSize: 12, color: 'white' }}>{item.distance.toFixed(3)} <MaterialCommunityIcons name="arrow-top-right-thin" size={15} color={COLORS.white} /></Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView nestedScrollEnabled>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <View style={{ borderColor: 'green', borderRadius: 60, borderWidth: 0.5, width: 15, height: 15, justifyContent: 'center', alignItems: 'center', marginLeft: 8 }}>
                    <View style={{ borderColor: 'green', borderRadius: 60, borderWidth: 0.5, width: 8, height: 8, alignSelf: 'center', backgroundColor: 'green' }}></View>
                </View>
                <Text style={{ fontSize: 14, color: 'white', paddingLeft: 10 }}>{t("Current_Location")}</Text>
                <View style={{ marginLeft: '48%', width: 65, backgroundColor: '#004B4D', height: 25, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 5 }}>
                    <Image source={require("../assets/fillIcon.png")} style={{ width: 26, height: 26, color: "#003B4D", paddingLeft: 6 }} />
                    {/* <MaterialCommunityIcons name="gas-station" size={17} color="green" style={{ paddingLeft: 6 }} /> */}
                    <Text style={{ fontSize: 12, color: 'green', fontWeight: '600' }}> {List?.length}</Text>
                </View>
            </View>
            <Text style={{ fontSize: 15, fontWeight: '500', padding: 10, color: 'white' }}>{textdata}</Text>
            <FlatList
                data={List}
                renderItem={GetStation}
                keyExtractor={item => item.id}
                style={{ margin: 10, paddingBottom: "10%", height: '100%' }}
            />
        </ScrollView>
    )

}

export default Drawer