import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNav from "./stackNav";
import DriverOnBoardingOtpValidation from "../screens/Login/DriverOnBpardingOtpValidate";
import DealarSendOtp from "../screens/Login/DealarSendOtp";


const Stack = createStackNavigator();

const MainStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                /> */}
                <Stack.Screen
                    name="Login"
                    component={DealarSendOtp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MainScreen"
                    component={StackNav}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="DriverOnBoardingOtpValidation"
                    component={DriverOnBoardingOtpValidation}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;
