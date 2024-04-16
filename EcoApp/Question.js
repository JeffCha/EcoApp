// Question.js
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

export default class Question extends Component {
  render() {
    const { category, questionIndex } = this.props;
    const questions = categoryQuestions[category];
    const question = questions[questionIndex];

    return (
      <View style={[styles.container, { backgroundColor: getCategoryColor(category) }]}>
        <Text style={styles.text}>{question}</Text>
      </View>
    );
  }
}

const getCategoryColor = (category) => {
  switch (category) {
    case 'GESTÃOSUSTENTÁVELDASÁGUAS':
      return '#add8e6'; // Azul Bebê
    case 'EFICIÊNCIAEALTERNATIVASENERGÉTICAS':
      return '#90ee90'; // Verde
    case 'PROJETOSUSTENTÁVEL':
      return '#ff6347'; // Vermelho
    case 'QUALIDADEURBANA':
      return '#8b4513'; // Marrom
    case 'VERDEURBANO':
      return '#ffd700'; // Amarelo
    case 'CONTRIBUIÇÕESPARAABE':
      return '#ffa500'; // Laranja
    case 'GESTÃODERESÍDUOS':
      return '#808080'; // Cinza
    case 'BONIFICAÇÕES':
      return '#000080'; // Azul Marinho
    default:
      return '#fff'; // Branco (cor padrão)
  }
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
