import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../../../assets/footer/footer'
import Textstyles from '../../../assets/text/texts'

// change the address for background image, footer and other images before using

const GPS = () => {


    const [gps, setGPS] = useState(false)

    const [noti, seTNoti] = useState(false)

    const navigation = useNavigation();

    return (
        <View>
            <View style={{ flexDirection: 'column' }}>
                <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                    <View style={{ backgroundColor: "#fff", flexDirection: 'column', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, elevation: 5 }}>
                        <View style={{ flexDirection: 'row' }}>

                            <TouchableOpacity style={{ height: 90, width: '30%', flexDirection: "row", marginTop: '1%', }}>
                                <View style={styles.photoSetting}>
                                    <Image source={require('../../../assets/images/beard.jpg')} style={styles.ImageSimple} resizeMode='cover' />
                                </View>
                            </TouchableOpacity>
                            <View style={{ width: "45%" }}>
                                <Text style={[Textstyles.bold, { color: "#1b2041", textAlign: "center", fontSize: 22, marginTop: '20%' }]}>SETTINGS</Text>
                            </View>
                            <TouchableOpacity style={{ width: "20%" }}>
                                <Icon name='menu' style={{ alignSelf: 'center', marginTop: '40%', left: "40%", color: '#1b2041', fontWeight: 'bold' }} size={30} />
                            </TouchableOpacity>

                        </View>


                        <View style={{ width: "90%", height: 60, borderColor: 'black', borderWidth: 1, borderRadius: 100, alignSelf: 'center', flexDirection: 'row' }}>

                            <View style={{ width: "15%", alignSelf: 'center', borderRadius: 10 }}>
                                <View style={!gps ? styles.stripWhite : styles.stripGreen} />
                            </View>

                            <View style={{ width: "40%", alignSelf: 'center', }}>
                                <Text style={[Textstyles.bold, { textAlign: 'left', color: "#1b2041", fontSize: 18 }]}>GPS Tracking</Text>
                                <Text style={[Textstyles.normal, { textAlign: 'left', color: "#1b2041", fontSize: 18 }]}>{gps ? "On" : "Off"}</Text>
                            </View>

                            <View style={{ width: "40%", alignSelf: 'center', left: '50%' }}>
                                <TouchableOpacity style={gps ? styles.bgTrue : styles.bgFalse}
                                    onPress={() => setGPS(!gps)}>
                                    {gps &&
                                        <View style={{ backgroundColor: '#fff', height: '95%', width: '50%', borderRadius: 100, elevation: 10, alignSelf: 'flex-end' }}></View>}

                                    {!gps &&
                                        <View style={{ backgroundColor: '#fff', height: '95%', width: '50%', borderRadius: 100, elevation: 10, alignSelf: 'flex-start' }}></View>}
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ width: "90%", height: 60, borderColor: 'black', borderWidth: 1, borderRadius: 100, alignSelf: 'center', flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>

                            <View style={{ width: "15%", alignSelf: 'center', borderRadius: 10 }}>
                                <View style={!noti ? styles.stripWhite : styles.stripGreen} />
                            </View>

                            <View style={{ width: "40%", alignSelf: 'center' }}>
                                <Text style={[Textstyles.bold, { textAlign: 'left', color: "#1b2041", fontSize: 18 }]}>Notifications</Text>
                                <Text style={[Textstyles.normal, { textAlign: 'left', color: "#1b2041", fontSize: 18 }]}>{noti ? "On" : "Off"}</Text>
                            </View>

                            <View style={{ width: "40%", alignSelf: 'center', left: '50%' }}>
                                <TouchableOpacity style={noti ? styles.bgTrue : styles.bgFalse}
                                    onPress={() => seTNoti(!noti)}>
                                    {noti &&
                                        <View style={{ backgroundColor: '#fff', height: '95%', width: '50%', borderRadius: 100, elevation: 10, alignSelf: 'flex-end' }}></View>}

                                    {!noti &&
                                        <View style={{ backgroundColor: '#fff', height: '95%', width: '50%', borderRadius: 100, elevation: 10, alignSelf: 'flex-start' }}></View>}
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <ScrollView style={{ flexGrow: 1 }}>
                    </ScrollView>
                    <Footer />
                </ImageBackground>
            </View>
        </View>
    )
}

export default GPS

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffff',
        width: '100%',
        justifyContent: 'center',
        height: 90
    },

    headerIcon: {
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#ffff',
        width: '100%',
        justifyContent: 'center',
        height: 90
    },

    headerIcon: {
        justifyContent: 'center',
    },
    ImageSimple: {
        height: 65,
        width: 65,
        borderRadius: 100,
        alignSelf: 'flex-start',
    },
    photoNotification: {
        backgroundColor: "#b53535",
        width: '90%',
        height: 65,
        alignSelf: 'center',
        borderRadius: 100,
        marginStart: '8%',
        flexDirection: 'row'
    },
    photoSetting: {
        backgroundColor: "#FFF",
        width: '90%',
        height: 65,
        alignSelf: 'center',
        borderRadius: 100,
        marginStart: '8%',
        flexDirection: 'row'
    },
    bgTrue: {
        alignSelf: 'center',
        width: '40%',
        backgroundColor: "green",
        height: '50%',
        borderRadius: 100
    },
    bgFalse: {
        alignSelf: 'center',
        width: '40%',
        backgroundColor: '#E8E8E8',
        height: '50%',
        borderRadius: 100
    },
    stripWhite: {
        backgroundColor: '#E8E8E8',
        width: '10%',
        height: '80%',
        alignSelf: 'center'
    },

    stripGreen: {
        backgroundColor: 'green',
        width: '10%',
        height: '80%',
        alignSelf: 'center'
    },
})
