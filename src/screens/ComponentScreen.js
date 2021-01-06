import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    subHeaderStyle: {
        fontSize: 30
    }
})

const ComponentsScreen = () =>  {
    const name = 'Alex'

    return (
        <View>
            <Text style={styles.textStyle}>Hola Compadre I am Components</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>    
        </View>
    )

};

export default ComponentsScreen;
