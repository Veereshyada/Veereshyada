import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import COLORS from "../constant/color";
import Images from '../constant/imgurls'
import AntDesign from "react-native-vector-icons/AntDesign";


const DriverCard = () => {

    return (
        <View style={{ height: 340, width: '90%', alignSelf: "center", backgroundColor: COLORS.white, padding: 15, borderRadius: 15, }}>
            <View style={styles.mianContainner}>
                <View style={[styles.subcontainner, { width: '50%', }]}>
                    <Text style={[styles.Textstyle, { fontWeight: '400', fontSize: 16 }]}>DR293838</Text>
                </View>
                <View style={[styles.subcontainner, { width: '50%', }]}>
                    <Text style={[styles.Textstyle, { fontWeight: '800', fontSize: 18 }]}>Hemant Kumar</Text>
                </View>
            </View>
            <View style={styles.mianContainner}>
                <View style={[styles.subcontainner, { width: '60%', }]}>
                    <Text style={[styles.Textstyle, { fontWeight: '700', fontSize: 24,paddingRight:10 }]}>Monthhly Plan 2 Swaps/Day</Text>
                </View>
                <View style={[styles.subcontainner, { width: '40%', }]}>
                    <Image source={Images.auto} style={{ width: '100%' }} />
                </View>
            </View>
            <View style={styles.mianContainner}>
                <View style={[styles.subcontainner, { width: '10%', }]}>
                    <AntDesign name='caretright'
                        style={{ color: COLORS.green, fontSize: 20 }} />
                </View>
                <View style={[styles.subcontainner, { width: '60%', }]}>
                    <Text style={[styles.Textstyle, { fontWeight: '600', fontSize: 17 }]}>SWAPS DONE TODAY</Text>
                </View>
                <View style={[styles.subcontainner, { width: '30%', }]}>
                    <View style={{ backgroundColor: COLORS.skyblue, width: '35%', alignItems: 'center', justifyContent: 'center', borderRadius: 3, paddingHorizontal: 5, paddingVertical: 2, alignSelf: 'center' }}>
                        <Text style={[styles.Textstyle, { color: COLORS.white }]}>1</Text>
                    </View>
                </View>
            </View>
            <View style={styles.mianContainner}>
                <View style={[styles.subcontainner, { width: '10%', }]}>
                <AntDesign name='caretright'
                        style={{ color: COLORS.green, fontSize: 20 }} />
                </View>
                <View style={[styles.subcontainner, { width: '60%', }]}>
                    <Text style={[styles.Textstyle, { fontWeight: '600', fontSize: 17 }]}>MORE SWAPS ALLOWED TODAY</Text>
                </View>
                <View style={[styles.subcontainner, { width: '30%', }]}>
                    <View style={{ backgroundColor: COLORS.skyblue, width: '35%', alignItems: 'center', justifyContent: 'center', borderRadius: 3, paddingHorizontal: 5, paddingVertical: 2, alignSelf: 'center' }}>
                        <Text style={[styles.Textstyle, { color: COLORS.white }]}>1</Text>
                    </View>
                </View>
            </View>
            <View style={styles.mianContainner}>
                <View style={[styles.subcontainner, { width: '10%', }]}>
                <AntDesign name='caretright'
                        style={{ color: COLORS.green, fontSize: 20 }} />
                </View>
                <View style={[styles.subcontainner, { width: '50%', }]}>
                    <Text style={[styles.Textstyle, { fontWeight: '600', fontSize: 17 }]}>PLAN START</Text>
                </View>
                <View style={[styles.subcontainner, { width: '40%', }]}>
                    <View style={{ backgroundColor: COLORS.skyblue, width: '70%', alignItems: 'center', justifyContent: 'center', borderRadius: 3, padding: 2 }}>
                        <Text style={[styles.Textstyle, { color: COLORS.white }]}>10-04-2022</Text>
                    </View>
                </View>
            </View>
            <View style={styles.mianContainner}>
                <View style={[styles.subcontainner, { width: '10%', }]}>
                <AntDesign name='caretright'
                        style={{ color: COLORS.green, fontSize: 20 }} />
                </View>
                <View style={[styles.subcontainner, { width: '50%', }]}>
                    <Text style={[styles.Textstyle, { fontWeight: '600', fontSize: 17 }]}>PLAN TILL</Text>
                </View>
                <View style={[styles.subcontainner, { width: '40%', }]}>
                    <View style={{ backgroundColor: COLORS.skyblue, width: '70%', alignItems: 'center', justifyContent: 'center', borderRadius: 3, padding: 2 }}>
                        <Text style={[styles.Textstyle, { color: COLORS.white }]}>10-04-2022</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DriverCard;

const styles = StyleSheet.create({
    mianContainner: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 5
    },
    subcontainner: {
        justifyContent: 'center'
    },
    Textstyle: {
        color: COLORS.skyblue
    }
})