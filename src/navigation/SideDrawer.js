import 'react-native-gesture-handler';
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../screens/Home/Home";
import CustomDrawerContent from "../screens/drawer/CustomDrwerContent";

const DrawerNav = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            screenOptions={
                {
                    drawerStyle: {
                        backgroundColor: 'green',
                        // width: 260,
                        height:420
                    }
                }
            }
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Home1" component={Home}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNav;