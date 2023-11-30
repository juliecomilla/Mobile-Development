import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { buttonStyle, textStyle} = styles;


    return ( 
    <TouchableOpacity onPress={props.buttonPress}  style={buttonStyle}>
        <Text style={textStyle}>Reservations Here</Text>
    </TouchableOpacity>

    );
};

const styles = {
    textStyle: {
        fontSize: 14,
        fontWeight: "500",
    
    }
}


export default Button;