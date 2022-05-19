import React from "react";
import {View} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import dark from "../styles/darkMode";
import light from "../styles/lightMode";

//Screens
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';
import Settings from '../screens/Settings';

const Navigation = () => {

    //const darkMode = useSelector((state) => state.style.darkMode);
    //const styles = darkMode ? dark : light;

    const Tab = createBottomTabNavigator();  
  
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Contacts" component={Contacts} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
  }

export default () => {
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
  };