import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle} >{props.headerText}</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // shadowRadius:2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 40,
    },
})

export default Header;
