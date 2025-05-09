import React from 'react';
import Mine from './Mine';
import Flag from './Flag';
import params from '../params';
import { View, StyleSheet, Text } from 'react-native';


export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props;

    const styleField = [styles.field];
    if (opened) {styleField.push(styles.opened);}
    if (exploded) {styleField.push(styles.exploded);}
    if (flagged) {styleField.push(styles.flagged);}
    if (!opened && !exploded) {styleField.push(styles.regular);}

    let color = null;
    if (nearMines > 0) {
        if (nearMines === 1) {color = '#2A28D7';}
        if (nearMines === 2) {color = '#2B520F';}
        if (nearMines > 2 && nearMines < 6) {color = '#F9060A';}
        if (nearMines >= 6)  {color = '#F221A9';}
    }

    return (
        <View style={styleField}>
            { !mined && opened && nearMines > 0 && (
                <Text style={[styles.label, { color: color }]}>
                    {nearMines}
                </Text>
            )}
            { mined && opened ? <Mine /> : false }
            { flagged && !opened ? <Flag /> : false}
        </View>
    );
};


const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
        alignItems: 'center',
        justifyContent: 'center',
        display:'flex',
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
        lineHeight: params.blockSize - params.borderSize * 3,
    },
    exploded: {
        backgroundColor: 'red',
        border: 'red',
    },

});
