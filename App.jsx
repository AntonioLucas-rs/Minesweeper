import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MineField from './src/components/MineField';
import params from './src/params';
import { createMinesBoard } from './src/functions';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }


  minesAmount = () => {
    const cols =  params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.dificultyLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinesBoard(rows, cols, this.minesAmount()),
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Começando o Mines!
        </Text>

        <Text style={styles.instructions}>
          Tamanho da grade:
          {params.getRowsAmount()} x {params.getColumnsAmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});

