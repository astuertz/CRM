import React from 'react';
import { View } from 'react-native';
import dark from '../styles/darkMode'
import light from '../styles/lightMode';
import { useSelector, } from 'react-redux';

//Components
import Header from '../components/Header';
import ToggleDarkMode from './SettingsComponents/toggleDarkMode';
import WriteXLSX from './SettingsComponents/writeXLSXButton';

const Settings = () => {

    const darkMode = useSelector((state) => state.style.darkMode);
    const styles = darkMode ? dark : light;

  return (
    <View style={styles.pageContainer} >
      <Header />
      <ToggleDarkMode />
      <WriteXLSX />
    </View>
  );
}

export default Settings;