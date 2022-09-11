import React, { useEffect } from 'react'
import Nav from './src/navigation/nav'
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, LogBox } from 'react-native'
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import Store from './src/redux/store'

const App = () => {

  useEffect(() => {
    LogBox.ignoreAllLogs()
  }, [])

  return (
    <Provider store={Store}>
      <SafeAreaView style={{ flex: 1 }}>
      {/* <StatusBar style="auto" /> */}
      <Nav />
    </SafeAreaView>
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({})
