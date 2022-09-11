import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNav from './sideDrawer';
import Complaints from '../screens/DriverOnBoarding/PersonalDetails';
import Plans from '../screens/plans/Plans';
import COLORS from '../constant/color';
import Icon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"
const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarLabelStyle: { fontSize: Platform.OS == 'android' ? 15 : 17 },
                tabBarStyle: { backgroundColor: COLORS.skyblue, paddingBottom: 20, height: 75, borderTopWidth: 0 }
            }}
        >
            <Tab.Screen name="Plans" component={Plans}
                options={{
                    tabBarLabelStyle: { fontWeight: Platform.OS == 'android' ? '500' : '600', fontSize: Platform.OS == 'android' ? 15 : 16 },
                    tabBarLabel: "PLAN",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcon
                            name='clipboard-list-outline'
                            style={{ color: focused ? COLORS.white : COLORS.green, fontSize: 24, }}
                        />

                    ),
                    tabBarActiveTintColor: COLORS.white,
                    tabBarInactiveTintColor: COLORS.green,
                    // tabBarActiveBackgroundColor:'red'
                }}
            />
            <Tab.Screen name="Home" component={DrawerNav}
                options={{
                    tabBarLabelStyle: { fontWeight: Platform.OS == 'android' ? '500' : '600', fontSize: Platform.OS == 'android' ? 15 : 16 },
                    tabBarLabel: "HOME",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                            name='home'
                            style={{ color: focused ? COLORS.white : COLORS.green, fontSize: 24, }}
                        />),
                    tabBarActiveTintColor: COLORS.white,
                    tabBarInactiveTintColor: COLORS.green,
                }}
            />
            <Tab.Screen name="Complaints" component={Complaints}
                options={{
                    tabBarLabel:"COMPLAINTS",
                    tabBarLabelStyle: { fontWeight: Platform.OS == 'android' ? '500' : '600', fontSize: Platform.OS == 'android' ? 15 : 16 },
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name='alert-circle'
                            style={{ color: focused ? COLORS.white : COLORS.green, fontSize: 24, }}
                        />
                    ),
                    tabBarActiveTintColor: COLORS.white,
                    tabBarInactiveTintColor: COLORS.green,
                }}
            />
        </Tab.Navigator>
    );
}


export default BottomNav;
