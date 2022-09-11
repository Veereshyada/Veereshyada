import 'react-native-gesture-handler';
import React from "react";
import {Platform} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Complaints from "../screens/complaints/Complaints"
import DrawerNav from "./SideDrawer";
import BuyPlan from "../screens/BuyPlan/BuyPlan";
import COLORS from "../Constants/color";
import Icon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"
import { useTranslation } from "react-i18next";
const BottomNav = () => {
    const { t } = useTranslation();
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName="Home" 
            screenOptions={{
                tabBarLabelStyle:{fontSize:Platform.OS=='android'?15:17},
                tabBarStyle: { backgroundColor:COLORS.skyblue,paddingBottom:20,height:75,borderTopWidth:0 },
            }}>
            <Tab.Screen name="Plans" component={BuyPlan}
                options={{
                    tabBarLabelStyle:{fontWeight:Platform.OS=='android'?'500':'600',fontSize:Platform.OS=='android'?15:16},
                    tabBarLabel:t("plan"),
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcon
                        name='clipboard-list-outline'
                        style={{ color: focused ? COLORS.white : COLORS.green, fontSize: 24,}}
                    />
                    ),
                    tabBarActiveTintColor: COLORS.white,
                    tabBarInactiveTintColor: COLORS.green,
                }}
            />
            <Tab.Screen name="Home" component={DrawerNav}
                options={{
                    tabBarLabelStyle:{fontWeight:Platform.OS=='android'?'500':'600',fontSize:Platform.OS=='android'?15:16},
                    tabBarLabel:t("home"),
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Entypo
                        name='home'
                        style={{ color: focused ? COLORS.white : COLORS.green, fontSize: 24,}}
                    />),
                    tabBarActiveTintColor: COLORS.white,
                    tabBarInactiveTintColor: COLORS.green,
                }}
            />
            <Tab.Screen name="Complaints" component={Complaints}
                options={{
                    tabBarLabel:t("complaints"),
                    tabBarLabelStyle:{fontWeight:Platform.OS=='android'?'500':'600',fontSize:Platform.OS=='android'?15:16},
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (                    
                    <Icon
                            name='alert-circle'
                            style={{ color: focused ? COLORS.white : COLORS.green, fontSize: 24,}}
                        />
                         ),
                    tabBarActiveTintColor: COLORS.white,
                    tabBarInactiveTintColor: COLORS.green,
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNav;
