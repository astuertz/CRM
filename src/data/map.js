import React from "react";
import { View, Text, ScrollView, } from 'react-native';
import data from "./data";
import dark from '../styles/darkMode'
import light from '../styles/lightMode';
import { useSelector } from 'react-redux';

const dataMap = () => {

    const darkMode = useSelector((state) => state.style.darkMode);
    const styles = darkMode ? dark : light;
    
    return (
        <ScrollView horizontal>
            <View style={styles.dataContainer} >
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>First Name</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Last Name</Text>
                </View>   
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Phone Number</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Email</Text>
                </View>          
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Address</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Point of Contact</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Notes</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Created On</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Last Edited</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Last Contacted</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Related To</Text>
                </View> 
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Contacted?</Text>
                </View>  
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Appointment Set?</Text>
                </View>                       
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Appointment Date</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Enrolled?</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Enrollment Status</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Advancement</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Last Advancement</Text>
                </View>
                <View style={styles.dataHeaderContainer} >
                    <Text style={styles.textDefault}>Network</Text>
                </View>
            </View>
        </ScrollView>
    );}

export default dataMap;