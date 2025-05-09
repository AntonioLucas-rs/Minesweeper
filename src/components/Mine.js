import React from 'react';
import { View, StyleSheet } from 'react-native';
import params from '../params';

export default props => {
    const mineSize = params.blockSize - params.borderSize * 2;
    const lineWidth = mineSize * 0.9;

    return (
        <View style={[styles.container, { width: mineSize, height: mineSize }]}>
            <View style={[styles.coreMine, {
                width: mineSize * 0.45,
                height: mineSize * 0.45,
                borderRadius: (mineSize * 0.45) / 2,
            }]} />
            <View style={[styles.line, { width: lineWidth }]} />
            <View style={[styles.line, { width: lineWidth, transform: [{ rotate: '45deg' }] }]} />
            <View style={[styles.line, { width: lineWidth, transform: [{ rotate: '90deg' }] }]} />
            <View style={[styles.line, { width: lineWidth, transform: [{ rotate: '135deg' }] }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    coreMine: {
        backgroundColor: 'black',
    },
    line: {
        position: 'absolute',
        height: 3,
        borderRadius: 3,
        backgroundColor: 'black',
    },
});
