import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from "./BottomNav";
import DriverLogin from '../screens/login/DriverLogin';
import DrawerNav from "./SideDrawer";
import Notification from "../screens/notification/Notification";
import BuyPlan from '../screens/BuyPlan/BuyPlan';
import PaymentOption from "../screens/payments/paymentOptions";
import MarketingSchems from "../screens/MarketingSchems/MarketingSchems";
import Phistory from "../screens/planHistory/PurchHistory";
import RaisService from "../screens/complaints/RaisService";
import ReferToDriver from "../screens/RefferToDriver/ReferToDriver";
import NearSwapStation from "../screens/map/NearSwapStation";
import HeroOfMonth from "../screens/HeroOfMonth/HeroOfMonth";
import OtherComplent from "../screens/complaints/OtherComoplent";
import SrStatus from "../screens/complaints/SrStaus";
import CommunitySection from "../screens/CommunitySection/CommunitySec";
import PaymentSuccessFull from "../screens/payments/PaymetSuccessFull";
import PaymentError from "../screens/payments/PaymentError";
import ComplantRaiseSuccess from "../screens/complaints/CmplaintRaiseSuccess";
import SrDetails from "../screens/complaints/SrDetails";
import StationMap from "../screens/map/StationMap";
import DriveRefferSuccess from "../screens/RefferToDriver/RefferSuccessfull";
import Settings from "../screens/settings/Settings";
import SinglePageView from "../screens/OtherPages/singlePageView";
import CurrentLocationActivity from '../screens/map/CurrentLocationActivity';

const StackNav = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>


            <Stack.Screen name="BottomNav" component={BottomNav}
                options={{ headerShown: false }}
            />


            <Stack.Screen name="Drawer" component={DrawerNav}
                options={{ headerShown: false }} />


            <Stack.Screen name="Login" component={DriverLogin}
                options={{ headerShown: false }}
            />


            <Stack.Screen name="Notification" component={Notification}
                options={{ headerShown: false }}
            />


            <Stack.Screen name="Nearest Swaping Station" component={NearSwapStation}
                options={{ headerShown: false }} />


            <Stack.Screen name="Refer a Driver" component={ReferToDriver}
                options={{ headerShown: false }} />


            <Stack.Screen name="Raise Services" component={RaisService}
                options={{ headerShown: false }}
            />


            <Stack.Screen name="Purchase History" component={Phistory}
                options={{ headerShown: false }}
            />


            <Stack.Screen name="Marketing Scheme" component={MarketingSchems}
                options={{ headerShown: false }}
            />


            <Stack.Screen name="Pay Wallet Option" component={PaymentOption}
                options={{ headerShown: false }}
            />


            <Stack.Screen name="Buy a Plan" component={BuyPlan}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="HeroOfMonth" component={HeroOfMonth}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Other Complents" component={OtherComplent}
                options={{ headerShown: false }}
            />


            <Stack.Screen name="Sr Status" component={SrStatus}
                options={{ headerShown: false }}
            />


            <Stack.Screen name="Community Section" component={CommunitySection}
                options={{ headerShown: false }}
            />


            <Stack.Screen name="Nearest Swap" component={NearSwapStation}
                options={{ headerShown: false }}
            />


            <Stack.Screen name="PaymentSuccess" component={PaymentSuccessFull}
                options={{ headerShown: false }}
            />


            <Stack.Screen name="PaymentError" component={PaymentError}
                options={{ headerShown: false }} />


            <Stack.Screen name="ComplentRaised" component={ComplantRaiseSuccess}
                options={{ headerShown: false }} />


            <Stack.Screen name="SrDetails" component={SrDetails}
                options={{ headerShown: false }} />


            <Stack.Screen name="ReferSuccess" component={DriveRefferSuccess}
                options={{ headerShown: false }} />

            <Stack.Screen name="Map" component={StationMap}
                options={{ headerShown: false }} />

            <Stack.Screen name="Settings" component={Settings}
                options={{ headerShown: false }} />

            <Stack.Screen name="SinglePageView" component={SinglePageView}
                options={{ headerShown: false }} />
            <Stack.Screen name="CurrentLocationActivity" component={CurrentLocationActivity}
                options={{ headerShown: false }} />
            

        </Stack.Navigator>
    )
}

export default StackNav;