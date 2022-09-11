import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import COLORS from "../constant/color";
import AntDesign from "react-native-vector-icons/AntDesign";

const DriverSwapCard = ({driverName,LastPersentDetail,PendingPenality,dicount}) => {

    return (
        <View style={{ height: 185, width: '90%', alignSelf: "center", backgroundColor: COLORS.white, padding: 15, borderRadius: 15 }}>
            <View style={styles.mianContainner}>
                <View style={[styles.subcontainner, { width: '50%' }]}>
                    <Text style={[styles.Textstyle,{fontWeight:'400'}]}>DR293838</Text>
                </View>
                <View style={[styles.subcontainner, { width: '50%' }]}>
                    <Text style={[styles.Textstyle,{fontWeight:'800'}]}>{driverName}</Text>
                </View>
            </View>
            <View style={[styles.mianContainner,{marginTop:12}]}>
                <View style={[styles.subcontainner, { width: '10%' }]}>
                    <AntDesign name='caretright'
                        style={{ color: COLORS.green, fontSize: 20 }} />
                </View>
                <View style={[styles.subcontainner, { width: '60%' }]}>
                    <Text style={styles.Textstyle}>Last Present Date</Text>
                </View>
                <View style={[styles.subcontainner, { width: '30%',backgroundColor:COLORS.skyblue,borderRadius:3 }]}>
                    <Text style={[styles.Textstyle,{color:COLORS.white,alignSelf:'center',fontWeight:'500',fontSize:16}]}>{LastPersentDetail}</Text>
                </View>
            </View>
            <View style={styles.mianContainner}>
                <View style={[styles.subcontainner, { width: '10%' }]}>
                    <AntDesign name='caretright'
                        style={{ color: COLORS.green, fontSize: 20 }} />
                </View>
                <View style={[styles.subcontainner, { width: '60%' }]}>
                    <Text style={styles.Textstyle}>Pending Penality</Text>
                </View>
                <View style={[styles.subcontainner, { width: '30%',backgroundColor:COLORS.skyblue,borderRadius:3 }]}>
                    <Text style={[styles.Textstyle,{color:COLORS.white,paddingLeft:5,fontWeight:'500',fontSize:16}]}>{PendingPenality}</Text>
                </View>
            </View>
            <View style={styles.mianContainner}>
                <View style={[styles.subcontainner, { width: '10%' }]}>
                    <AntDesign name='caretright'
                        style={{ color: COLORS.green, fontSize: 20 }} />
                </View>
                <View style={[styles.subcontainner, { width: '60%' }]}>
                    <Text style={styles.Textstyle}>cashback/disocunt</Text>
                </View>
                <View style={[styles.subcontainner, { width: '30%',backgroundColor:COLORS.skyblue,borderRadius:3 }]}>
                    <Text style={[styles.Textstyle,{color:COLORS.white,paddingLeft:5,fontWeight:'500',fontSize:16}]}>{dicount}</Text>
                </View>
            </View>
        </View>
    )
}

export default DriverSwapCard;

const styles = StyleSheet.create({
    mianContainner: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical:5,
    },
    subcontainner: {
    },
    Textstyle: {
        color: COLORS.skyblue,
        fontWeight: '700',
         fontSize: 18 
    }
})
