import React from 'react';
import { View, Text, Image, Switch } from 'react-native';
import dark from '../styles/darkMode'
import light from '../styles/lightMode';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../features/reduxstyle/reduxstyleSlice';
import Header from '../components/Header';

const Settings = () => {

    const dispatch = useDispatch();

    const darkMode = useSelector((state) => state.style.darkMode);
    const styles = darkMode ? dark : light;

  return (
    <View style={styles.pageContainer} >
      <Header />
      <View style={[styles.elementContainer, {height: 200,}]} >
        <View style={styles.horizontalRow} >
          <Text style={styles.textDefault}>Dark Mode</Text> 
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={darkMode ? "blue" : "black"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => dispatch(toggleDarkMode())}
            value={darkMode}
          />
        </View>
      </View>
    </View>
  );
}

export default Settings;