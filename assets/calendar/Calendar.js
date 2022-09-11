import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import moment from 'moment';

const Calendar = () => {

    // moment.locale();

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

    // const showDatepicker = () => {
    //     showMode('date');
    // };

    // const showTimepicker = () => {
    //     showMode('time');
    // };

    // console.log("CALENDER DATA ",
    //     // moment().format("MMM-DD-yyyy h")

    // moment(date).format("DD/MM/YYYY"))

    return (
        <View style={{ width: '40%' }}>
            {/* <View style={styles.Container}>
                <Text style={styles.Date}>{moment(date).format("DD/MM/YYYY")}</Text>
                <View style={{ width: '30%' }}>
                    <TouchableOpacity style={{ alignSelf: 'center', top: '5%' }}>

                        <Icon name="calendar" size={22} color='#1b2041' onPress={showDatepicker} />
                        <View>
                            {show && (
                                <DateTimePicker
                                    // testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChange}
                                />)}
                        </View>
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>
    )
}

export default Calendar

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#fff",
        width: '100%',
        height: 30,
        borderRadius: 10,
        borderColor: "#1b2041",
        borderWidth: 1,
        flexDirection: 'row',
        shadowColor: "gray",
        elevation: 1
    },
    Date: {
        width: '70%',
        color: '#1b2041',
        alignSelf: "center",
        textAlign: 'center'
    }
})
