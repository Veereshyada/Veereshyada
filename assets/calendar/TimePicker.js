import React, { useState } from 'react';
import { View, Button, Platform, Text, TouchableOpacity } from 'react-native';
// import moment from 'moment';
// import Icon from 'react-native-vector-icons/Feather'

export const TimePicker = () => {
    // const [date, setDate] = useState(new Date());
    // const [mode, setMode] = useState('date');
    // const [show, setShow] = useState(false);

    // const onChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setShow(Platform.OS === 'ios');
    //     setDate(currentDate);
    // };

    // const showMode = (currentMode) => {
    //     setShow(true);
    //     setMode(currentMode);
    // };

    // const showTimepicker = () => {
    //     showMode('time');
    // };

    // console.log("CALENDER DATA ",
    //     // moment().format("MMM-DD-yyyy h")

    //     moment(date).format("hh:mm"))

    return (
        <View>
            {/* <TouchableOpacity onPress={showTimepicker} style={{ flexDirection: 'row', alignSelf: 'center', marginTop: '3%' }}>
                <View style={{ width: '60%' }}>
                    <Text style={{  color: '#1b2041' }}>{moment(date).format("hh:mm")}</Text>
                </View>

                <Icon name="clock" size={22} color='#1b2041' />
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={false}
                    display="default"
                    onChange={onChange}
                />
            )} */}
        </View>
    );
};