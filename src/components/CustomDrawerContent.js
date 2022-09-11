import * as React from "react";
import {DrawerContentScrollView } from "@react-navigation/drawer";
import ExpendebleDraweComp from "./ExpendebleDraweComp";

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} backgroundColor={"#003B4D"} showsVerticalScrollIndicator={false} style={{borderTopRightRadius:15,borderBottomRightRadius:15}}>
            <ExpendebleDraweComp/>
        </DrawerContentScrollView>
    );
}
export default CustomDrawerContent;
