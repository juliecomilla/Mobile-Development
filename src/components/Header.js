import React from 'react';
import { Text, View  } from 'react-native';



const Header = props => {
    const { textStyling, viewStyle } = styles;


    return (
    <View style={viewStyle}>
        <Text style={textStyling}>{props.title}</Text>
    </View>

);
    };

const styles = {
    textStyling: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold'
    },

    viewStyle: {
        backgroundColor: '#FFC0CB',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25
    }


};

export default Header;