import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StackNav from "./StackNav";
import DriverLogin from "../screens/login/DriverLogin";
import { Provider } from "react-redux";
import store from "../redux/store";
import Splash from "../screens/Splash";
import DrawerNav from "./SideDrawer";
const Stack = createStackNavigator();

const MainStack = () => {
    const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
    const [isUserLogedIn, setUserLogedIn] = useState();
    React.useEffect(() => {
        async function takeData() {
            const appData = await AsyncStorage.getItem("isAppFirstLaunched");
            if (appData == null) {
                setIsAppFirstLaunched(true);
                AsyncStorage.setItem("isAppFirstLaunched", "false");
            } else {
                setIsAppFirstLaunched(false);
            }
        }
        takeData()
    }, [])
    return (
        isAppFirstLaunched != null && (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />

                    <Stack.Navigator>
                        {isAppFirstLaunched && (
                            <Stack.Screen
                                name="Login"
                                component={DriverLogin}
                                options={{ headerShown: false }}
                            />
                        )}

                        <Stack.Screen
                            name="MainScreen"
                            component={StackNav}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="HomeScreen"
                            component={DrawerNav}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    );
};

export default MainStack;
