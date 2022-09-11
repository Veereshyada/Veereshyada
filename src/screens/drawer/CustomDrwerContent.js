import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import {DrawerContentScrollView,} from "@react-navigation/drawer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from "react-i18next";
import COLORS from "../../Constants/color";
import { useNavigation } from '@react-navigation/native';




function CustomDrawerContent(props) {
    const { t } = useTranslation();

    const navigation = useNavigation();
    const userlogout = async () => {
        let keys = []
        try {
            await  AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            navigation.navigate('Login');
        } catch (e) {
            console.log(e)
        }
        
    }
    return (
        <DrawerContentScrollView {...props} backgroundColor={"#003B4D"}
        >
            <View style={{ backgroundColor: "#003B4D", marginTop: 10 }}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate("Buy a Plan")}
                >
                    <View style={{ width: 35, height: 25, justifyContent: 'center', alignItems: "center" }}>
                        <Image
                            source={require("../../assets/buy_plan.png")}
                            style={{ width: "80%", height: "100%"}}
                        />
                    </View>
                    <Text style={styles.TextName}>{t("Buy_Plan")}</Text>
                </TouchableOpacity>
                <View style={styles.Line}></View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate("Purchase History")}
                >
                    <View style={{ width: 35, height: 25, justifyContent: 'center', alignItems: "center" }}>
                        <Image
                            source={require("../../assets/Purchase_History.png")}
                            style={{ width: "60%", height: "100%" }}
                        />
                    </View>

                    <Text style={styles.TextName}>{t("Purchase_History")}</Text>
                </TouchableOpacity>
                <View style={styles.Line}></View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate("Complaints")}
                >
                    <View style={{ width: 35, height: 25, justifyContent: 'center', alignItems: "center" }}>
                        <Image
                            source={require("../../assets/Raise_a_Complaint.png")}
                            style={{ width: "69.5%", height: "100%" }}
                        />
                    </View>

                    <Text style={styles.TextName}>{t("Raise_a_Complaint")}</Text>
                </TouchableOpacity>
                <View style={styles.Line}></View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate("Refer a Driver")}
                >
                    <View style={{ width: 35, height: 25, justifyContent: 'center', alignItems: "center" }}>
                        <Image
                            source={require("../../assets/reffer_driver.png")}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </View>
                    <Text style={styles.TextName}>{t("Refer_a_Driver")}</Text>
                </TouchableOpacity>
                <View style={styles.Line}></View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate("Marketing Scheme")}
                >
                    <View style={{ width: 35, height: 25, justifyContent: 'center', alignItems: "center" }}>
                        <Image
                            source={require("../../assets/Marketing_Scheme.png")}
                            style={{ width: "70%", height: "100%" }}
                        />
                    </View>
                    <Text style={styles.TextName}>{t("Marketing_Schemes")}</Text>
                </TouchableOpacity>
                <View style={styles.Line}></View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.navigate("Community Section")}
                >
                    <View style={{ width: 35, height: 25, justifyContent: 'center', alignItems: "center" }}>
                        <Image
                            source={require("../../assets/community.png")}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </View>

                    <Text style={styles.TextName}>{t("Community_Section")}</Text>
                </TouchableOpacity>
                <View style={styles.Line}></View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => userlogout()}
                >
                    <View style={{ width: 35, height: 25, justifyContent: 'center', alignItems: "center" }}>
                        <Image
                            source={require("../../assets/Log-Out.png")}
                            style={{ width: "60%", height: "100%" }}
                        />
                    </View>

                    <Text style={styles.TextName}>{t("Log_Out")}</Text>
                </TouchableOpacity>


            </View>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.skyblue,
        paddingTop: 10,
        paddingLeft: 15,
        paddingBottom: 10,
        alignItems: 'center',
        display: "flex",
        flexDirection: "row",
    },
    TextName: {
        color: "white",
        marginLeft: 10,

    },
    Line: {
        borderTopColor: COLORS.white,
        borderTopWidth: 1,
        width: "58%",
        alignSelf: "center",
    },
});

export default CustomDrawerContent;
