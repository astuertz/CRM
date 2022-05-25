import React, { useState, } from "react";
import { View, Text, TouchableWithoutFeedback, } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import data from './data';
import dark from '../styles/darkMode'
import light from '../styles/lightMode';
import { useSelector } from 'react-redux';

const rows = () => {

    const darkMode = useSelector((state) => state.style.darkMode);
    const styles = darkMode ? dark : light;

    const [selected, setSelected] = useState(() => {
        let array = new Array;
        for ( let i=0 ; i < data.length; i++) {
            array[i] = false;
        }
        return array;
    });

    const changeSelected = (index) => {
        let array = new Array;
        for ( let i=0 ; i < data.length; i++) {
            if (i === index) {
                array[i] = true;
            } else {
                array[i] = false;
            }
        }
        setSelected(array);
    }
    
    return (
        <ScrollView>
        {data.map((each, index) => {
        return (
        <TouchableWithoutFeedback key={'datatouchable' + index} onPress={() => changeSelected(index)} onLongPress={() => {
            changeSelected(index);
            console.log('long press');
            }}>
        <View key={'data' + index} style={styles.dataContainer} >
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.firstName}</Text>
            </View>
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.lastName}</Text>
            </View>   
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.phoneNum}</Text>
            </View>
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.email}</Text>
            </View>          
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.address}</Text>
            </View>
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.relationship}</Text>
            </View>
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.notes}</Text>
            </View>
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.createdOn}</Text>
            </View>
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.lastEdit}</Text>
            </View>
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.lastContact}</Text>
            </View>
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{(each.relatedTo != null) ? each.relatedTo.forEach((e, index) => `${data[e].firstName} ${data[e].lastName}`) : null}</Text>
            </View> 
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.contacted ? 'YES' : 'NO'}</Text>
            </View>  
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.appointment.isSet ? 'YES' : 'NO'}</Text>
            </View>                       
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.appointment.date}</Text>
            </View>
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.enrolled.isEnrolled ? 'YES' : 'NO'}</Text>
            </View>
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.enrolled.status}</Text>
            </View>
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.advancement.rank}</Text>
            </View>
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{each.advancement.lastAdvancement}</Text>
            </View>
            <View style={selected[index] ? styles.dataCellContainerActive : styles.dataCellContainer} >
                <Text style={styles.textDefault}>{(each.network != null) ? each.network.forEach((e, index) => `${data[e].firstName} ${data[e].lastName}`) : null}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
        );}
        )}
        </ScrollView>
    )
}

export default rows;