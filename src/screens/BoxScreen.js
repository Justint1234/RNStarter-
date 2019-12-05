import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
    <View style={styles.parentStyle}>
        <View style={styles.viewOneStyle}/>
        <View style={styles.viewTwoStyle}/>
        <View style={styles.ViewThreeStyle}/>
    </View>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        height: 200,
    },
    viewOneStyle: { 
    height: 50,
    width: 50,
    backgroundColor: 'red'    
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green' 
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }
});
    


export default BoxScreen; 