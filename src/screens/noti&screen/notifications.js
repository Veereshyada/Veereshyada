import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/Feather'
import Footer from '../../../assets/footer/footer'
import Textstyles from '../../../assets/text/texts'


const notifications = () => {

    const [click, setClick] = useState(false)

    const clicked = () => {
        console.log("CLICK HIT", click)
        setClick(!click)
        // true for notifications & false for settings
    }

    const navigation = useNavigation();

    return (
        <View>
            <View style={{ flexDirection: 'column' }}>
                <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode='cover' style={{ height: '100%' }}>
                    <View style={{ backgroundColor: "#fff", flexDirection: 'column', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, elevation: 5 }}>
                        <View style={{ flexDirection: 'row' }}>

                            <TouchableOpacity style={{ height: 90, width: '30%', flexDirection: "row", marginTop: '1%', }}>
                                <View style={!click ? styles.photoNotification : styles.photoSetting}>
                                    <Image source={require('../../../assets/images/beard.jpg')} style={styles.ImageSimple} resizeMode='cover' />
                                    {!click &&
                                        <Text style={[Textstyles.bold, { color: "#fff", fontSize: 20, textAlignVertical: 'center', marginStart: '5%' }]}>100</Text>}
                                </View>
                            </TouchableOpacity>
                            <View style={{ width: "45%" }}>
                                <Text style={[Textstyles.bold, { color: "#1b2041", textAlign: "center", fontSize: 22, marginTop: '20%' }]}>{click ? "Settings" : "Notifications"}</Text>
                            </View>
                            <TouchableOpacity style={{ width: "20%" }} onPress={() => clicked()}>
                                <Icon name='menu' style={{ alignSelf: 'center', marginTop: '40%', left: "40%", color: '#1b2041', fontWeight: 'bold' }} size={30} />
                            </TouchableOpacity>

                        </View>
                        {!click &&
                            <View style={{ flexDirection: 'column', width: '95%', alignSelf: 'center', marginTop: '4%' }}>
                                <TouchableOpacity style={{ margin: "1%", width: '100%', flexDirection: 'row' }}>
                                    <Text style={[Textstyles.bold, { color: "#1b2041", fontSize: 16, width: '85%' }]}>Projects</Text>
                                    <View style={{ backgroundColor: "#b53535", height: '100%', width: '7%', borderRadius: 100 }}>
                                        <Text style={{ color: "#fff", textAlign: 'center', textAlignVertical: 'center', fontSize: 15 }}>9</Text>
                                    </View>
                                    <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, marginStart: 5 }} size={20}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ margin: "1%", width: '100%', flexDirection: 'row' }}>
                                    <Text style={[Textstyles.bold, { color: "#1b2041", fontSize: 16, width: '85%' }]}>Timesheets</Text>
                                    <View style={{ backgroundColor: "#b53535", height: '100%', width: '7%', borderRadius: 100 }}>
                                        <Text style={{ color: "#fff", textAlign: 'center', textAlignVertical: 'center', fontSize: 15 }}>9</Text>
                                    </View>
                                    <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, marginStart: 5 }} size={20}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ margin: "1%", width: '100%', flexDirection: 'row' }}>
                                    <Text style={[Textstyles.bold, { color: "#1b2041", fontSize: 16, width: '85%' }]}>Time Off</Text>
                                    <View style={{ height: '100%', width: '7%', borderRadius: 100 }}>
                                        <Text style={{ color: "#fff", textAlign: 'center', textAlignVertical: 'center', fontSize: 15 }}></Text>
                                    </View>
                                    <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, marginStart: 5 }} size={20}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ margin: "1%", width: '100%', flexDirection: 'row' }}>
                                    <Text style={[Textstyles.bold, { color: "#1b2041", fontSize: 16, width: '85%' }]}>Messages</Text>
                                    <View style={{ backgroundColor: "#b53535", height: '100%', width: '7%', borderRadius: 100 }}>
                                        <Text style={{ color: "#fff", textAlign: 'center', textAlignVertical: 'center', fontSize: 15 }}>9</Text>
                                    </View>
                                    <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, marginStart: 5 }} size={20}></Icon>
                                </TouchableOpacity>
                            </View>}

                        {click &&
                            <View style={{ flexDirection: 'column', width: '95%', alignSelf: 'center', marginTop: '4%' }}>
                                <TouchableOpacity style={{ margin: "1%", width: '100%', flexDirection: 'row' }}>
                                    <Text style={[Textstyles.bold, { color: "#1b2041", fontSize: 16, width: '90%' }]}>Profile</Text>
                                    <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, marginStart: 5 }} size={20}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ margin: "1%", width: '100%', flexDirection: 'row' }}>
                                    <Text style={[Textstyles.bold, { color: "#1b2041", fontSize: 16, width: '90%' }]}>Current Role</Text>
                                    <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, marginStart: 5 }} size={20}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ margin: "1%", width: '100%', flexDirection: 'row' }} onPress={() => navigation.navigate("GPS")}>
                                    <Text style={[Textstyles.bold, { color: "#1b2041", fontSize: 16, width: '90%' }]}>Location</Text>
                                    <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, marginStart: 5 }} size={20}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ margin: "1%", width: '100%', flexDirection: 'row' }}>
                                    <Text style={[Textstyles.bold, { color: "#1b2041", fontSize: 16, width: '90%' }]}>Notifications</Text>
                                    <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, marginStart: 5 }} size={20}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ margin: "1%", width: '100%', flexDirection: 'row' }} >
                                    <Text style={[Textstyles.bold, { color: "#1b2041", fontSize: 16, width: '90%' }]}>Alerts</Text>
                                    <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, marginStart: 5 }} size={20}></Icon>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ margin: "1%", width: '100%', flexDirection: 'row' }}>
                                    <Text style={[Textstyles.bold, { color: "#1b2041", fontSize: 16, width: '90%' }]}>Messages</Text>
                                    <Icon name="chevron-right" style={{ color: '#1b2041', marginTop: 2, marginStart: 5 }} size={20}></Icon>
                                </TouchableOpacity>
                            </View>

                        }
                    </View>
                    <ScrollView style={{ flexGrow: 1 }}>
                    </ScrollView>
                    <Footer />
                </ImageBackground>
            </View>
        </View>
    )
}

export default notifications

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
    }

})
