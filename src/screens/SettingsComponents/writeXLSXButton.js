import React from 'react';
import { View, Text, Button, } from 'react-native';
import dark from '../../styles/darkMode'
import light from '../../styles/lightMode';
import { useSelector } from 'react-redux';
import writeXLSX from '../../xlsx/write';

const writeXLSXButton = () => {

    const darkMode = useSelector((state) => state.style.darkMode);
    const styles = darkMode ? dark : light;

    const onPressWriteXLSX = () => {
        writeXLSX();
    }

    return (
        <View style={styles.elementContainer} >
        <View style={styles.optionsRow} >
          <Text style={styles.textHeader1}>Click Me!</Text>
          <View style={{flex: 1,}} />
          <Button title='writeXLSX' onPress={() => onPressWriteXLSX()} />
        </View>
      </View>
    );
}

export default writeXLSXButton;