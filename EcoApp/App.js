// App.js
import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Question from './Question';
import AnswerButton from './AnswerButton';
import Score from './Score';

const categories = [
  { name: 'GESTÃOSUSTENTÁVELDASÁGUAS', color: '#add8e6' }, // Azul Bebê
  { name: 'EFICIÊNCIAEALTERNATIVASENERGÉTICAS', color: '#90ee90' }, // Verde
  { name: 'PROJETOSUSTENTÁVEL', color: '#ff6347' }, // Vermelho
  { name: 'QUALIDADEURBANA', color: '#8b4513' }, // Marrom
  { name: 'VERDEURBANO', color: '#ffd700' }, // Amarelo
  { name: 'CONTRIBUIÇÕESPARAABE', color: '#ffa500' }, // Laranja
  { name: 'GESTÃODERESÍDUOS', color: '#808080' }, // Cinza
  { name: 'BONIFICAÇÕES', color: '#000080' }, // Azul Marinho
];

export default class App extends Component {
  state = {
    selectedCategoryIndex: null,
    currentQuestionIndex: 0,
    score: 0,
    quizCompleted: false,
    completedCategories: [],
  };

  handleSelectCategory = (index) => {
    if (!this.state.completedCategories.includes(categories[index].name)) {
      this.setState({ selectedCategoryIndex: index, currentQuestionIndex: 0 });
    }
  };

  handleNextCategory = () => {
    const { selectedCategoryIndex, completedCategories } = this.state;
    this.setState(prevState => ({ completedCategories: [...prevState.completedCategories, categories[selectedCategoryIndex].name] }));
    this.setState({ selectedCategoryIndex: null });
    
    // Verifica se todas as categorias foram completadas
    if (completedCategories.length + 1 === categories.length) {
      this.setState({ quizCompleted: true });
    }
  };

  handleAnswer = (answer) => {
    const { score, currentQuestionIndex, selectedCategoryIndex } = this.state;
    
    if (answer === 'Sim') {
      this.setState({ score: score + 1 });
    }

    const currentCategoryQuestions = categoryQuestions[categories[selectedCategoryIndex].name];
    
    if (currentQuestionIndex + 1 < currentCategoryQuestions.length) {
      this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
    } else {
      this.handleNextCategory();
    }
  };

  restartQuiz = () => {
    this.setState({
      selectedCategoryIndex: null,
      currentQuestionIndex: 0,
      score: 0,
      quizCompleted: false,
      completedCategories: [],
    });
  };

  render() {
    const { selectedCategoryIndex, currentQuestionIndex, score, quizCompleted, completedCategories } = this.state;

    // Verifica se todas as categorias foram completadas
    const allCategoriesCompleted = completedCategories.length === categories.length;

    return (
      <View style={styles.container}>
        {!quizCompleted && !allCategoriesCompleted ? (
          <>
            {selectedCategoryIndex !== null ? (
              <>
                <Text style={styles.categoryText}>Categoria: {categories[selectedCategoryIndex].name}</Text>
                <Question category={categories[selectedCategoryIndex].name} questionIndex={currentQuestionIndex} />
                <View style={styles.buttonContainer}>
                  <AnswerButton text="Sim" onPress={() => this.handleAnswer('Sim')} />
                  <AnswerButton text="Não" onPress={() => this.handleAnswer('Não')} />
                </View>
              </>
            ) : (
              <>
                <Text style={styles.selectCategoryText}>Selecione uma categoria:</Text>
                <View style={styles.categoryButtons}>
                  {categories.map((category, index) => (
                    <Button 
                      key={index} 
                      title={category.name} 
                      disabled={completedCategories.includes(category.name)}
                      onPress={() => this.handleSelectCategory(index)} 
                    />
                  ))}
                </View>
              </>
            )}
          </>
        ) : (
          <Score score={score} quizCompleted={quizCompleted} onRestart={this.restartQuiz} allCategoriesCompleted={allCategoriesCompleted} />
        )}
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  categoryText: {
    fontSize: 20,
    marginBottom: 10,
  },
  selectCategoryText: {
    fontSize: 20,
    marginBottom: 10,
  },
  categoryButtons: {
    marginTop: 10,
  },
});

const categoryQuestions = {
  'GESTÃOSUSTENTÁVELDASÁGUAS': [
    'Você acha importante a preservação das águas?',
    'Qual a sua opinião sobre o consumo consciente de água?',
    'Você já participou de ações para preservação dos recursos hídricos?',
    'Como você vê a importância dos rios para o meio ambiente?',
    'Qual a sua atitude em relação ao desperdício de água?',
  ],
  'EFICIÊNCIAEALTERNATIVASENERGÉTICAS': [
    'Você utiliza fontes de energia alternativa em sua residência?',
    'Qual a sua opinião sobre a geração de energia solar?',
    'Você já participou de projetos de economia de energia?',
    'O que você acha sobre a utilização de energia eólica?',
    'Como você vê a importância da eficiência energética?',
  ],
  'PROJETOSUSTENTÁVEL': [
    'Você já participou de projetos sustentáveis?',
    'Qual a sua visão sobre a importância da sustentabilidade em projetos?',
    'Como você considera a sustentabilidade em seu dia a dia?',
    'Você acha que os projetos atuais consideram adequadamente a sustentabilidade?',
    'Você tem interesse em aprender mais sobre projetos sustentáveis?',
  ],
  'QUALIDADEURBANA': [
    'Como você avalia a qualidade do ambiente urbano em sua cidade?',
    'Você acredita que a qualidade do ar em áreas urbanas é um problema?',
    'Qual a sua opinião sobre o planejamento urbano sustentável?',
    'Como você considera a importância das áreas verdes em áreas urbanas?',
    'Você já participou de ações para melhorar a qualidade urbana?',
  ],
  'VERDEURBANO': [
    'Qual a importância das áreas verdes em áreas urbanas?',
    'Você utiliza espaços verdes em sua cidade para atividades de lazer?',
    'Como você vê a relação entre áreas verdes e qualidade de vida?',
    'Você acha que sua cidade tem políticas adequadas para preservação de áreas verdes?',
    'Qual a sua opinião sobre a arborização urbana?',
  ],
  'CONTRIBUIÇÕESPARAABE': [
    'Você acredita que pode contribuir para um ambiente melhor?',
    'Qual a sua opinião sobre as ações para preservação do meio ambiente?',
    'Como você se envolve em ações para o bem-estar do planeta?',
    'Você participa de atividades voluntárias relacionadas ao meio ambiente?',
    'O que você acha que pode fazer para contribuir para a Agenda Ambiental na Escola?',
  ],
  'GESTÃODERESÍDUOS': [
    'Você pratica a separação de resíduos em sua residência?',
    'Como você considera a importância da gestão de resíduos sólidos?',
    'Você já participou de campanhas de reciclagem?',
    'Qual a sua opinião sobre o descarte correto de resíduos perigosos?',
    'Você tem interesse em aprender mais sobre gestão de resíduos?',
  ],
  'BONIFICAÇÕES': [
    'Você acredita que bonificações podem incentivar práticas sustentáveis?',
    'Como você vê a eficácia de programas de bonificação para práticas sustentáveis?',
    'Você já participou de programas que oferecem bonificações por práticas sustentáveis?',
    'Qual a sua opinião sobre a importância de recompensar práticas sustentáveis?',
    'Você acha que as bonificações podem influenciar positivamente o comportamento das pessoas?',
  ],
};