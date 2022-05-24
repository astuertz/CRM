import React from "react";
import {View} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

//Styles
import dark from "../styles/darkMode";
import light from "../styles/lightMode";

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

//Screens
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';
import Settings from '../screens/Settings';

const RootStackScreen = () => {

    const darkMode = useSelector((state) => state.style.darkMode);
    //const styles = darkMode ? dark : light;

    const Tab = createBottomTabNavigator();  
  
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: darkMode ? '#121212' : 'white',
            },
        }}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: (props) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={props.size}
                            color={props.color}
                        />
                        ),
                }}    
                />
            <Tab.Screen 
                name="Contacts" 
                component={Contacts} 
                options={{
                    tabBarIcon: (props) => (
                    <AntDesign
                        name="contacts"
                        size={props.size}
                        color={props.color}
                    />
                    ),
                }}        
            />
            <Tab.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                    tabBarIcon: (props) => (
                    <Feather
                        name="settings"
                        size={props.size}
                        color={props.color}
                    />
                    ),
                }}    
            />
        </Tab.Navigator>
    );
  }

  export default () => {

    return (
    <NavigationContainer>
        <RootStackScreen />
    </NavigationContainer>
    );
  };