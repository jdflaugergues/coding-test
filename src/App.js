import React, { Component } from 'react';
import cxs from 'cxs';

import {NavBar, Question} from './components';

import {QUIZZ} from './__mocks__/dataMock';

const style = {
  app: {
    display: 'inline-block',
    width: '355px',
  },

  title: {
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'Roboto, sans-serif'
  }
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0
    };

    this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
  }

  handleChangeQuestion(currentQuestion){
    this.setState({
      currentQuestion
    });
  }

  render() {

    QUIZZ.questions.forEach(question => question.params = Object.assign({}, QUIZZ.default_params, question.params));

    return (
      <div className={cxs(style.app)}>
        <h2 className={cxs(style.title)}>{QUIZZ.title}</h2>
        <NavBar
          onChangeCurrentQuestion={this.handleChangeQuestion}
          currentQuestion={this.state.currentQuestion}
          numberMaxQuestions={QUIZZ.questions.length}
        />
        {QUIZZ.questions.map((question, i) =>
          <Question
            key={question.uuid}
            question={question}
            display={this.state.currentQuestion === i}
          />
        )}
      </div>
    );
  }
}

export default App;
