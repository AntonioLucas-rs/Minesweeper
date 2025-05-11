import { View,StyleSheet } from 'react-native';
import params from '../params';
import React from 'react';

export default props => {
    return (
        <View style={styles.container}>
            <View style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]} />
            <View style={[styles.flag, props.bigger ? styles.flagBigger : null]} />
            <View style={styles.base1[styles.base1, props.bigger ? styles.base1Bigger : null]} />
            <View style={styles.base2[styles.base2, props.bigger ? styles.base2Bigger : null]} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: params.blockSize - params.borderSize * 2,
        height: params.blockSize - params.borderSize * 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    flagpole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 5,
    },
    flag: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#F22',
        marginLeft: -1,
        marginBottom: 7,
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 4,
        marginTop: 10,
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 4,
        marginTop: 12,
    },
    flagpoleBigger: {
        position: 'absolute',
        height: 28,
        width: 4,
        backgroundColor: '#222',
        marginLeft: 10,
    },
    flagBigger: {
        position: 'absolute',
        height: 10,
        width: 12,
        backgroundColor: '#F22',
        marginLeft: -2,
        marginBottom: 14,
    },
    base1Bigger: {
        position: 'absolute',
        height: 4,
        width: 12,
        backgroundColor: '#222',
        marginLeft: 8,
        marginTop: 20,
    },
    base2Bigger: {
        position: 'absolute',
        height: 4,
        width: 20,
        backgroundColor: '#222',
        marginLeft: 8,
        marginTop: 24,
    },
});
