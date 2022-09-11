import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/AntDesign'
import moment from 'moment'
import COLORS from '../constant/color';

const DatePickerCustom = ({ label,
    onChangeText=(timeSheetRecord) => {},
    onFocus = () => { },
 }) => {
    const [dateShow, setDateShow] = useState('');
    const [timeSheetRecord, settimeSheetRecord] = useState([])

    const onDateSelect = async (event, selectedDate) => {

        const currentDate = selectedDate;

        const fullDate = await `${moment(currentDate).format('L')}`
        settimeSheetRecord(fullDate)
        console.log(fullDate);
        setDateShow('')
    };
    return (
        <View style={{ flexDirection: "row", position: 'relative', justifyContent: "center", alignItems: "center", }}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TouchableOpacity onPress={() => setDateShow()} style={styles.dateSection}>
                <TextInput style={styles.dateTimeText} placeholder='MM/DD/YYYY' value={timeSheetRecord} onChangeText={() => {onChangeText(timeSheetRecord)}} />
                <Icon style={{ marginTop: 16 }} name='calendar' size={25} color='green' />
            </TouchableOpacity>
            {dateShow !== '' && (
                <DateTimePicker mode='date' value={new Date()} display='spinner' onChange={onDateSelect} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    dateSection: {
        backgroundColor: "#fff",
        width: '65%',
        marginVertical: 15,
        height: 60,
        // backgroundColor:'red',
        borderRadius: 10,
        borderColor: "#1b2041",
        borderWidth: 1,
        flexDirection: "row",
        shadowColor: "gray",
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2,
        justifyContent: "center"
    },
    dateTimeText: {
        // alignSelf: 'center',
        color: 'gray',
        width: '50%',
        fontSize: 16,
        fontWeight: "bold",
        marginRight: '22%'

    },
    labelStyle: {
        fontSize: 18,
        color: COLORS.white,
        fontWeight: "bold",
        position: 'relative',
        width: "35%",
        ':after': {
            content: '* ',
            //position: absolute,
            left: 5,
            top: 0,
            color: '#bbb'
        }
    }
})

export default DatePickerCustom;