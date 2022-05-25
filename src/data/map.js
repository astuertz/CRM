import React from "react";
import { View, Text, } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import dark from '../styles/darkMode'
import light from '../styles/lightMode';
import { useSelector } from 'react-redux';
import Rows from './rows';

const dataMap = () => {

    const darkMode = useSelector((state) => state.style.darkMode);
    const styles = darkMode ? dark : light;
    
    return (
        <ScrollView horizontal >
        <View style={styles.dataScrollView} >
            <View style={styles.dataContainer} >
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>First Name</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Last Name</Text>
                </View>   
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Phone Number</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Email</Text>
                </View>          
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Address</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Point of Contact</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Notes</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Created On</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Last Edited</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Last Contacted</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Related To</Text>
                </View> 
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Contacted?</Text>
                </View>  
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Appointment Set?</Text>
                </View>                       
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Appointment Date</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Enrolled?</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Enrollment Status</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Advancement</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Last Advancement</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefaultBold}>Network</Text>
                </View>
            </View>
            <Rows />
        </View>
        </ScrollView>
    );}

export default dataMap;