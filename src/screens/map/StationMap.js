import React, { useRef, useEffect,useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import Drawer from "../../components/BottomDrawer";
import COLORS from "../../Constants/color";
import { useTranslation } from "react-i18next";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';





const StationMap = () => {

    let data=[];
    const { t } = useTranslation();
   
    const [getlocation,setlocation]=useState()

    const { getiottokan } = useSelector((state) => ({
        getiottokan: state.loginReducer.getiottokan,
    }))

    const { locationDataRedux,currentLatLong } = useSelector(state => ({
        locationDataRedux: state.loginReducer.postDealerDataCoordinates,
        currentLatLong:state.loginReducer.currentLatLong
    }));
    console.log("currentLatLong", locationDataRedux.stations);


    const [List, setList] = useState([])

    // console.log("")
    useEffect(() => {

        setList(locationDataRedux.stations)

    }, [locationDataRedux])
    // let datloc=JSON.stringify(getiottokan);
    // let dataloc = JSON.parse(datloc).data;
    // let locationAddress=
    // console.log(dataloc[0].location.address,'hii data is comming');

    const locdatget = async () => {
        try {
            const valu1 = await AsyncStorage.getItem('iotdata');
            // let val2 = JSON.parse(valu1);
            // let loc_get = val2.data[0].location.address;
            // console.log(valu1,'hello this is =ajay=======sjdsj=>');
            setlocation(valu1);
            // data.push(loc_get);
            // if (val2 !== null) {
            //     //  console.log(val.data[0].canInfo,"value======")
            // }
        } catch (e) {
            // error reading value
        }
    };

    const refRBSheet = useRef();

    useEffect(() => {
        setTimeout(() => {
            locdatget();
        }, 2000);
    }, []);
   // console.log(getlocation,'ak');
    let data1=global.myLocatData ? global.myLocatData : "";
    return (
        <View>

            <TouchableOpacity
                style={{backgroundColor: COLORS.skyblue,borderColor: 'white', borderWidth: 1 }}
                onPress={() => refRBSheet.current.open()}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                    <View style={{ borderColor: 'green', borderRadius: 60, borderWidth: 0.5, width: 15, height: 15, justifyContent: 'center', alignItems: 'center',marginLeft:14}}>
                        <View style={{ borderColor: 'green', borderRadius: 60, borderWidth: 0.5, width: 8, height: 8, alignSelf: 'center', backgroundColor: 'green' }}></View>
                    </View>
                    <Text style={{ fontSize: 14, color: 'white', paddingLeft: 10 }}>{t("Current_Location")}</Text>
                    <View style={{ marginLeft: '40%', width: 65, backgroundColor: '#004B4D', height: 25, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 5 }}>
                    <Image source= {require("../../assets/fillIcon.png")} style={{width:26,height:26, color:"#003B4D",paddingLeft: 6}}/>
                        {/* <MaterialCommunityIcons name="gas-station" size={17} color="green" style={{ paddingLeft: 6 }} /> */}
                        <Text style={{ fontSize: 12, color: 'green', fontWeight: '600' }}> {List && List.length}</Text>
                    </View>
                </View>
                <View style={{paddingHorizontal:10,paddingVertical:5}}>
                    <Text style={{color:'white'}}>{global.myLocatData ? global.myLocatData : ""}</Text>
                </View>
            </TouchableOpacity>
            <RBSheet
                ref={refRBSheet}
                height={750}
                // minClosingHeight={170}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: COLORS.skyblue
                    },
                    container: {
                        backgroundColor: COLORS.skyblue,
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        borderColor: 'white',
                        borderWidth: 1
                    },
                    draggableIcon: {
                        borderColor: "white"
                    }
                }}
            >
                <Drawer locationData={getlocation} textdata={data1}/>
            </RBSheet>
        </View>
    )
}


const Styles = StyleSheet.create({
    header: {
        // justifyContent:"center",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },

})

export default StationMap;
