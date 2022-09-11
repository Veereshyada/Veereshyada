import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Modal, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import Icons from 'react-native-vector-icons/Feather'
import { useDispatch } from "react-redux";
import { getLogout } from "../../src/redux/actions/loginAction";
import Textstyles from "../text/texts";

const CustomModal = (props) => {
        const navigation = useNavigation()
        const dispatch = useDispatch()

        const logOut = async()=>{
            AsyncStorage.clear().then(()=>console.log("the storage is cleared"))
            navigation.navigate("login")
            dispatch(getLogout())
        }
    return (
        <TouchableWithoutFeedback style={styles.container} >
            <Modal
                animationType="slide"
                transparent={true}
                isVisible={props.isVisible}
                backdropColor={"white"}
                onRequestClose={()=>{!props.isVisible}}
                style={{ margin: 0 }}
                onModalHide={() => props.onClose}
            >
                <View style={styles.modalView}>
                    <View style={styles.lineView}/>
                        <View style={styles.iconView}>
                            <Icons name='log-out' color='#1b2041' size={35} style={styles.icon} />
                        </View>
                        <Text style={[Textstyles.bold,styles.logOutText]}>
                            Are you sure you want to log out ?
                        </Text>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.buttonTouchable} onPress={props.onClose}>
                            <Text style={[Textstyles.bold, styles.buttonText]}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonTouchable} onPress={()=>logOut()} >
                            <Text style={[Textstyles.bold, styles.buttonText]}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        borderColor:'red',
        alignItems: "center",
        shadowColor: "#1b2041",
        shadowOffset: {
        width: 3,
        height: 3
        },
        shadowOpacity: 2,
        shadowRadius: 6,
        elevation: 5,
        top:'38%'
    },
    lineView:{
        backgroundColor:'#1b2041', 
        width:'100%', 
        borderWidth:1, 
        borderColor:'#1b2041', 
        borderTopLeftRadius:20, 
        borderTopRightRadius:20, 
        height:30
    },
    iconView:{
        backgroundColor:'#ffffff', 
        borderWidth:2, 
        borderRadius:50, 
        borderColor:'#1b2041', 
        bottom:42, 
        zIndex:2000
    },
    icon:{
        height:50, 
        width:50, 
        textAlign:'center', 
        top:5
    },
    logOutText:{
        fontSize:20,
        textAlignVertical: 'center',
        bottom:20,
        color:'#1b2041'
    },
    buttonView:{
        flexDirection:'row', 
        width:'100%', 
        marginBottom:'5%', 
        justifyContent:'space-around'
    },
    buttonTouchable:{
        width:'40%', 
        borderWidth:1, 
        padding:10, 
        borderRadius:20, 
        alignItems:'center',
        alignSelf:'center'
    },
    buttonText:{
        color:'#1b2041', 
        fontSize:16
    }
});

export default CustomModal;
