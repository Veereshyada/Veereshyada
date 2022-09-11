import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import Images from "../constant/imgurls";
import COLORS from "../constant/color";
import { TouchableOpacity } from "react-native-gesture-handler";
const Battery = ({BatIcon,BatId,BatName,onPress=() => {}}) => {

    return (
        <View style={{ width: '100%', alignSelf: 'center' }}>
            <View style={styles.usercard}>
                <View style={{width:'20%'}}>
                    <Image source={BatIcon} style={{ height: 70, width: 42 }} />
                </View>
                <View style={{ height: 120, width: '50%', paddingHorizontal: 10, justifyContent: 'center' }}>
                    <Text style={{ color: COLORS.black, fontSize: 17, fontWeight: '500' }}>{BatName}</Text>
                    <Text style={{ color: COLORS.skyblue, fontWeight: '800', fontSize: 18 }}>{BatId}</Text>
                </View>
                <TouchableOpacity onPress={onPress} style={{padding:10,borderColor:COLORS.silver,borderWidth:2,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                    <Image source={Images.camera} style={{ height: 40, width: 47 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    usercard: {
        backgroundColor: COLORS.white,
        height: 110,
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        marginTop: 15
    }

})

export default Battery;