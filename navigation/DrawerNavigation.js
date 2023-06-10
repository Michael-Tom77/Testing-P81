import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Tab from "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator =()=>{
    return(
        <Drawer>
            <Drawer.Screen name = "Home" component = {Tab}/>
            <Drawer.Screen name = "Profile" component = {Profile}/>
        </Drawer>
    )
}

export default DrawerNavigator