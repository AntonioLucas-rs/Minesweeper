import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

import MineField from './src/components/MineField';
import params from './src/params';
import {
  createMinesBoard,
  cloneBoard,
  openField,
  hasExplosion,
  wonGame,
  showMines,
  invertFlag,
} from './src/functions';


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
      won: false,
      lost: false,
    };
  };

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hasExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeuuu!', 'Moisés nao consegue neh Moisés!');
    }
    if (won) {
      Alert.alert('Ganhouuu!', 'Veryy Goodd!');
    }

    this.setState({ board, won, lost });
  };

  onSelectField = (row, column) => {
    const board = cloneBoard(this.setState.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Ganhouuu!', 'Veryy Goodd!');
    }

    this.setState({ board, won });
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
          <MineField
            board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
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

