import React from "react";
import { View, Image } from 'react-native';
import dark from '../../styles/darkMode'
import light from '../../styles/lightMode';
import { useSelector } from 'react-redux';
import mel_banner2 from '../../graphics/mel_banner2.jpg';

const Header = () => {

    const darkMode = useSelector((state) => state.style.darkMode);
    const styles = darkMode ? dark : light;

    return (
        <View style={styles.bannerContainer}>
            <Image source={mel_banner2} style={styles.banner} />
        </View>
    );
}

export default Header;