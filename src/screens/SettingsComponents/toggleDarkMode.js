import React from 'react';
import { View, Text, Switch } from 'react-native';
import dark from '../../styles/darkMode'
import light from '../../styles/lightMode';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../features/reduxstyle/reduxstyleSlice';

const ToggleDarkMode = () => {

    const dispatch = useDispatch();

    const darkMode = useSelector((state) => state.style.darkMode);
    const styles = darkMode ? dark : light;

    return (
        <View style={styles.elementContainer} >
        <View style={styles.optionsRow} >
          <Text style={styles.textHeader1}>Dark Mode</Text>
          <View style={{flex: 1,}} />
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={darkMode ? "blue" : "black"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => dispatch(toggleDarkMode())}
            value={darkMode}
          />
        </View>
      </View>
    );
}

export default ToggleDarkMode;