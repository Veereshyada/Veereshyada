

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '../constant/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TextInputComponent = ({
    label,
    len,
    iconName,
    error,
    password,
    pad,
    value,
    isEditable,
    onFocus = () => { },
    ...props
}) => {
    const [hidePassword, setHidePassword] = React.useState(password);
    const [isFocused, setIsFocused] = React.useState(false);
// console.log(error,"error in input")
    return (
    
        <View style={{flexDirection:'row',width:'100%'}}>
            <View style={{width:'35%',height:60,justifyContent:'center'}}>
                <Text style={{color:COLORS.white,fontWeight:'700',fontSize:17}}>{label}</Text>
            </View>
            <View style={{ marginBottom: 20,width:'65%',alignSelf:"center" }}>
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
                    <TextInput
                        placeholderTextColor={COLORS.silver}
                        keyboardType={pad}
                        autoCorrect={false}
                        onFocus={() => {
                            onFocus();
                            setIsFocused(true);
                        }}
                        maxLength={len}
                        onBlur={() => setIsFocused(false)}
                        secureTextEntry={hidePassword}
                        style={{ color: COLORS.darkBlue, flex: 1 }}
                        {...props}
                        value={value }
                        editable={isEditable}
                        
                    />
                    {password && (
                        <Icon
                            onPress={() => setHidePassword(!hidePassword)}
                            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                            style={{ color: COLORS.silver, fontSize: 22 }}
                        />
                    )}
                </View>
                {error && (
                    <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
                        {error}
                    </Text>
                )}
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


export default TextInputComponent;