import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch } from 'react-redux'
import { storeHomeData } from '../../src/redux/actions/getAction'
import Textstyles from '../text/texts'

const HomeAccordian = (props) => {
    // console.log("the props in homeAccordian====>", props.item)
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const callingData = () => {
        // props.func(props.company)
        // props.func(props.item.lat)
        dispatch(storeHomeData(props.item))
    }

    return (

        <View style={{ flexDirection: 'row', backgroundColor: "#fff", width: '95%', borderRadius: 15, alignSelf: 'center', marginTop: '5%', flex: 1, elevation: 5, paddingTop:4, paddingBottom:4 }}>
            <View style={{ backgroundColor: props.backgroundColor, height: 40, width: 3.5, margin: '2%', left: '5%', alignSelf:'center' }}></View>

            <View style={{ width: '10%', flexDirection: 'column', left: '2%', alignSelf: 'center', left: '10%' }}>
                <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 20 }]}>{props.day}</Text>
                <Text style={[Textstyles.bold, { color: '#87ceeb', fontSize: 13 }]}>{props.month}</Text>
            </View>

            <View style={{ width: '70%', flexDirection: 'column', left: '2%', alignSelf: 'center', left: '15%' }}>
                <Text style={[Textstyles.bold, { color: '#1b2041', fontSize: 18 }]}>{props.company}</Text>
                <Text style={[Textstyles.normal, { color: '#1b2041', fontSize: 14 }]}>{props.details}</Text>
            </View>

            <TouchableOpacity style={{ width: '50%', left: '8%', alignSelf: 'center', elevation: 5 }} 
            // onPress={()=>navigation.navigate('projectList',{"data":props})}
            onPress={()=> callingData()}>
                <Icon size={36} name="chevron-right" style={{ color: '#1b2041' }} />
            </TouchableOpacity>
        </View>

    )
}

export default HomeAccordian

const styles = StyleSheet.create({})
