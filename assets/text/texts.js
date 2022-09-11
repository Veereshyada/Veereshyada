import { StyleSheet, Platform } from 'react-native'

const Textstyles = StyleSheet.create({
    bold: { fontFamily: Platform.OS === 'android' ? 'Futura Bold font' : 'Futura-CondensedExtraBold' },
    normal: { fontFamily: Platform.OS === 'android' ? 'Futura font' : 'Futura' },
    medium: { fontFamily: Platform.OS === 'android' ? 'Futura medium font' : 'Futura-Medium' }

})

export default Textstyles