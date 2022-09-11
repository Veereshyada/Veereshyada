import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
// screens for login, signup and splash
import login from '../screens/Login/login';
import signUp from '../screens/Login/signUp';
import welcome from '../screens/Login/welcome';


// screens for forget password
import email from '../screens/forgetPassword/email'
import createNewPassword from '../screens/forgetPassword/createNewPassword'
import verifyEmail from '../screens/forgetPassword/verifyEmail';

// screens for home
import homeScreen from '../screens/home/homeScreen';
import timeOff from '../screens/home/timeOff';
import Projects from '../screens/home/projects';
import timeSheet from '../screens/home/timeSheet';

// screens for TIMESHEET journey
import projectTimings from '../screens/timeSheet/projectTimings';
import requestActivity from '../screens/timeSheet/requestActivity';
import newTimeOff from '../screens/timeSheet/newTimeOff';

// screens for porject journey
import projectList from '../screens/projects/projectList';
import addNewProject from '../screens/projects/addNewProject';
import projects from '../screens/projects/projects';
import projectOverlay from '../screens/projects/projectOverlay';
import addNewEntry from '../screens/projects/addNewEntry'
import projectListExpandable from '../screens/projects/projectListExpandable';

//screens for team view
import teamView from '../screens/teams/teamView';

//screens for notification and heading
import notifications from '../screens/noti&screen/notifications';

//screens for edit account journey
import account from '../screens/settings/account';
import profileView from '../screens/settings/profileView'
import profileEdit from '../screens/settings/profileEdit';
import GPS from '../screens/noti&screen/gps'

// for calendar components
import timeSheetCalendar from '../screens/calendar/timeSheetCalendar';
import timeOffCalendar from '../screens/calendar/timeOffCalendar';

// for dashboard
import Dashboard from '../screens/dashboard/Dashboard';

//For testing screens
import Test from '../screens/test/Test'
import HeaderMain from '../../assets/headers/HeaderMain';
import HeaderTimeOff from '../../assets/headers/headerTimeOff';

const Stack = createStackNavigator();

const Nav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>

                <Stack.Screen name="login" component={login} />
                <Stack.Screen name="signUp" component={signUp} />
                <Stack.Screen name="welcome" component={welcome} />

                <Stack.Screen name='email' component={email} />
                <Stack.Screen name='verifyEmail' component={verifyEmail} />
                <Stack.Screen name='createNewPassword' component={createNewPassword} />

                <Stack.Screen name='homeScreen' component={homeScreen} />
                <Stack.Screen name='timeOff' component={timeOff} />
                <Stack.Screen name='Projects' component={Projects} />
                <Stack.Screen name='timeSheet' component={timeSheet} />

                <Stack.Screen name='projectTimings' component={projectTimings} />
                <Stack.Screen name='requestActivity' component={requestActivity} />
                <Stack.Screen name='newTimeOff' component={newTimeOff} />

                <Stack.Screen name='projectList' component={projectList} />
                <Stack.Screen name='addNewProject' component={addNewProject} />
                <Stack.Screen name="projects" component={projects} />
                <Stack.Screen name='projectOverlay' component={projectOverlay} />
                <Stack.Screen name="addNewEntry" component={addNewEntry} />
                <Stack.Screen name="projectListExpandable" component={projectListExpandable} />

                <Stack.Screen name="teamView" component={teamView} />

                <Stack.Screen name="notifications" component={notifications} />

                <Stack.Screen name='account' component={account} />
                <Stack.Screen name="profileView" component={profileView} />
                <Stack.Screen name="profileEdit" component={profileEdit} />

                <Stack.Screen name="timeSheetCalendar" component={timeSheetCalendar} />
                <Stack.Screen name="timeOffCalendar" component={timeOffCalendar} />

                <Stack.Screen name="GPS" component={GPS} />
                <Stack.Screen name="Dashboard" component={Dashboard} />

                <Stack.Screen name="Test" component={Test} />
                <Stack.Screen name="HeaderMain" component={HeaderMain} />
                <Stack.Screen name="headerTimeOff" component={HeaderTimeOff} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Nav

const styles = StyleSheet.create({})
