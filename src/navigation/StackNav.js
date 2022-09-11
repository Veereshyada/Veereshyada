import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './bottomNav';
import DrawerNav from './sideDrawer';
import Notification from '../screens/notification/notification';
import Settings from '../screens/settings/Settings';
import TotalPlanSoldMonth from '../screens/swapPlanDetails/total_Plan_Sold_Month';
import TotalPlanSoldToday from '../screens/swapPlanDetails/total_Plan_Sold_Today';
import TotalSwapMonth from '../screens/swapPlanDetails/total_Swap_Month';
import TotalSwapToday from '../screens/swapPlanDetails/total_Swap_Today';
import QrScanner from '../components/QrScanner';
import Payment from '../screens/DoSwapTransaction/GuarantorDetails';
import ChooseAplan from '../screens/DoSwapTransaction/chooseAplan';
import CurrentAddress from '../screens/DriverOnBoarding/CurrentAddress';
import DriverDocumentuplaod from '../screens/DriverOnBoarding/DriverDocumentuplaod';
import DriverOnBoardingRegister from '../screens/DriverOnBoarding/DriverOnBoardingRegister';
import DriverOnBoardingOtpValidation from '../screens/Login/DriverOnBpardingOtpValidate';
import GuarantorDetails from '../screens/DriverOnBoarding/GuarantorDetails';
import GuarantorDetailsPayment from '../screens/DriverOnBoarding/GuarantorDetailsPayment';
import PaymentError from '../screens/DriverOnBoarding/PaymentError';
import PaymentSuccessful from '../screens/DriverOnBoarding/PaymentSuccessful';
import PersonalDetails from '../screens/DriverOnBoarding/PersonalDetails';
import ReferrerOnboarding from '../screens/DriverOnBoarding/ReferrerOnboarding';
import VechileDetails from '../screens/DriverOnBoarding/VehicleDetailsRegistered';
import VechileDetailsUnregisterd from '../screens/DriverOnBoarding/VehicleDetailsUnregistered';
import VehicleOwner from '../screens/DriverOnBoarding/VehicleOwner';
import SrStatus from '../screens/ActiveDriver/ActiveDrives';
import Home2 from '../screens/home/Home';
import DoswapTransact from '../screens/DoSwapTransaction/DoswapTransaction';
import Plans from '../screens/plans/Plans';
import ScanQr from '../screens/QrScanner/ScanQr';

const Stack = createStackNavigator();
const StackNav = () => {
    return (
        <Stack.Navigator  initialRouteName="CurrentAddress">
            <Stack.Screen name="BottomNav" component={BottomNav}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Drawer" component={DrawerNav}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Settings" component={Settings}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Notifications" component={Notification}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="TotalPlanSoldMonth" component={TotalPlanSoldMonth}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="TotalPlanSoldToday" component={TotalPlanSoldToday}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="TotalSwapMonth" component={TotalSwapMonth}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="TotalSwapToday" component={TotalSwapToday}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Qrscanner" component={QrScanner}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Payment" component={Payment}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="ChooseAplan" component={ChooseAplan}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="DoswapTransact" component={DoswapTransact}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="CurrentAddress" component={CurrentAddress}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="DriverDocumentuplaod" component={DriverDocumentuplaod}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="DriverOnBoardingRegister" component={DriverOnBoardingRegister}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="DriverOnBoardingOtpValidation" component={DriverOnBoardingOtpValidation}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="GuarantorDetailsPayment" component={GuarantorDetailsPayment}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="GuarantorDetails" component={GuarantorDetails}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="PaymentError" component={PaymentError}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessful}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="PersonalDetails" component={PersonalDetails}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="ReferrerOnboarding" component={ReferrerOnboarding}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="SrStatus" component={SrStatus}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="VehicleOwner" component={VehicleOwner}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="VechileDetailsUnregisterd" component={VechileDetailsUnregisterd}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="VechileDetails" component={VechileDetails}
                options={{ headerShown: false }}
            />
            <Stack.Screen name ="Home2" component={Home2}
                 options={{headerShown:false}}/>
            <Stack.Screen name ="Plans" component={Plans}
                 options={{headerShown:false}}/>

        </Stack.Navigator>
    );
}
export default StackNav;