//Import libraries
import React from 'react';
import { Text, View } from 'react-native';

//Components
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
    viewStyle: {
        backgroundColor: '#a884a4',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
    }
};

//Make component available to other parts to the app
export default Header;
