import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const PAGE_CONTAINER_PADDING = 5;

  const dark = StyleSheet.create({
    root: {
      flex: 1,
    },
    pageContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: 'darkgrey',
      padding: PAGE_CONTAINER_PADDING,
    },
    elementContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212',
      width: '100%',
      borderRadius: 25,
      overflow: 'hidden',
      borderColor: 'lightblue',
      borderWidth: 2,
      marginBottom: 5,
    },
    elementContainerSquare: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212',
      width: '100%',
      overflow: 'hidden',
      borderColor: 'lightblue',
      borderWidth: 2,
      marginBottom: 5,
    },
    horizontalRow: {
      flexDirection: 'row',
    },
    bannerContainer: {
      width: WIDTH,
      height: HEIGHT * .1,
      borderColor: 'lightblue',
      borderBottomWidth: 2,
      overflow: 'hidden',
      top: -PAGE_CONTAINER_PADDING,
    },
    banner: {
      width: WIDTH,
      height: HEIGHT * .1,
      resizeMode: 'stretch',
    },
    horizontalRow: {
      flexDirection: 'row',
    },
    optionsRow: {
      flexDirection: 'row',
      borderColor: 'white',
      borderBottomWidth: 0,
      borderTopWidth: 0,
      paddingHorizontal: 40,
      paddingVertical: 10,
    },
    dataScrollView: {
      flexDirection: 'column',
      borderColor: 'white',
      borderBottomWidth: 2,
    },
    dataContainer: {
      flexDirection: 'row',
      height: HEIGHT * .05,
    },
    dataHeaderContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'white',
      backgroundColor: '#121212',
      borderWidth: 2,
      width: 150,
    },
    dataCellContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'white',
      backgroundColor: '#121212',
      borderWidth: 1,
      width: 150,
    },
    dataCellContainerActive: {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'white',
      backgroundColor: '#242323',
      borderWidth: 1,
      width: 150,
    },
    textDefault: {
      fontSize: 14,
      color: 'white',
    },
    textDefaultBold: {
      fontSize: 14,
      color: 'white',
      fontWeight: 'bold',
    },
    textHeader1: {
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold',
    },
  });

  export default dark;