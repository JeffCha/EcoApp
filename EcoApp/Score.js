// Score.js
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Score extends Component {
  getLevel = (score) => {
    if (score >= 5 && score <= 10) { //(score >= 50 && score <= 69) 
      return 'Bronze';
    } else if (score >= 11 && score <= 29) {//(score >= 70 && score <= 99)
      return 'Prata';
    } else if (score >= 30) {//(score >= 100)
      return 'Ouro';
    } else {
      return 'Sem Nível'; //sem nivel
    }
  };

  render() {
    const { score, quizCompleted, onRestart, allCategoriesCompleted } = this.props;
    const level = this.getLevel(score);

    return (
      <View style={styles.container}>
        {quizCompleted && allCategoriesCompleted && (
          <View>
            <Text style={styles.scoreText}>Score: {score}</Text>
            <Text style={styles.levelText}>Nível: {level}</Text>
            <Button title="Recomeçar" onPress={onRestart} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 10,
  },
  levelText: {
    fontSize: 16,
    marginBottom: 10,
  },
});