import React from 'react';
import { Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const Button = () => {


    return ( 
    <TouchableOpacity  style={buttonStyle}>
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