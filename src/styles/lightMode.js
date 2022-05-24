import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

  const light = StyleSheet.create({
    root: {
      flex: 1,
    },
    pageContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: 'lightgrey',
    },
    elementContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '98%',
      borderRadius: 25,
      overflow: 'hidden',
      borderColor: 'black',
      borderWidth: 2,
      margin: 3,
    },
    bannerContainer: {
      width: WIDTH,
      height: HEIGHT * .1,
      borderColor: 'black',
      borderBottomWidth: 2,
      overflow: 'hidden',
    },
    banner: {
      width: WIDTH,
      height: HEIGHT * .1,
      resizeMode: 'stretch',
    },
    horizontalRow: {
      flexDirection: 'row',
    },
    textDefault: {
        fontSize: 14,
        color: 'black',
    },
  });

  export default light;