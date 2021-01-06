import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ( props ) => {
    return <View style={styles.box}>
        <Image syle={styles.image} source={props.imageSource} />
        <Text style={styles.imageText}>{props.title}</Text>
        </View>
}

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        marginVertical: 10,

        alignSelf: 'center',
        borderLeftColor: '#888',
        borderLeftWidth: 5,

    },
    image: {
        height: 100,
        width: 100,
    },
    imageText: {
        fontSize: 25,
        textAlignVertical: 'center'
    }
});

export default ImageDetail;