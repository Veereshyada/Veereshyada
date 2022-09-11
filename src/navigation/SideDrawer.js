import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home/Home'
import CustomDrawerContent from "../components/CustomDrawerContent";
import COLORS from "../constant/color";
const DrawerNav = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
        screenOptions={{
            drawerStyle: {
                backgroundColor:'transparent',
              },
        }}                                                                                                                                 
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Home1" component={Home}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNav;