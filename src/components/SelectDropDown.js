import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '../constant/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const SelectDropDown = ({
    label,
    len,
    iconName,
    error,
    password,
    pad,
    item,
    selectedItem,
    onFocus = () => { },
    ...props
}) => {
    const [hidePassword, setHidePassword] = React.useState(password);
    const [isFocused, setIsFocused] = React.useState(false);

    // const countries = [
    //     '12345667890',
    //     '12345667891',
    //     '12345667892',
    //     '12345667893',
    //     '12345667894',
    //     '12345667895',
    //     '12345667896',
    //     '12345667897',
    //     '12345667898',
    //     '12345667899',
    //     '123456678100',
    //     '123456678101',
    // ];

    return (
        <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={{ width: '35%', height: 60, justifyContent: 'center' }}>
                <Text style={{ color: COLORS.white, fontWeight: '700', fontSize: 17 }}>{label}</Text>
            </View>
            <View style={{ marginBottom: 20, width: '65%' }}>
                <View
                    style={[
                        style.inputContainer,
                        {
                            borderColor: error
                                ? COLORS.red
                                : isFocused
                                    ? COLORS.darkBlue
                                    : COLORS.light,
                            alignItems: 'center',
                        },
                    ]}>
                    <Icon
                        name={iconName}
                        style={{ color: COLORS.silver, fontSize: 22, marginRight: 10 }}
                    />
                    <SelectDropdown
                        data={item}
                        {...props}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        buttonStyle={{ width: "100%", backgroundColor: COLORS.white }}
                        renderDropdownIcon={isOpened => {
                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'green'} size={20} />;
                        }}
                        dropdownIconPosition={'right'}
                    />
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: COLORS.grey,
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 60,
        paddingHorizontal: 10,
        backgroundColor: "#F9F9F9",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
    },
});


export default SelectDropDown;