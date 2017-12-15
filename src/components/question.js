import React, {Component} from 'react';
import PropTypes from 'prop-types'
import cxs from 'cxs';

import {Answer, Button} from '../components';

const style = {
  question: {
    padding: '15px',
    paddingTop: '30px',
    webkitBoxShadow: '0 0 30px 0 #8A8A8A',
    mozBoxShadow: '0 0 30px 0 #8A8A8A',
    boxShadow: '0 0 30px 0 #8A8A8A'
  },
  title: {
    fontWeight: 'bold',
    paddingTop: '10px'
  },
  img: {
    width: '330px'
  },
  show: {
    display: 'block'
  },
  hide: {
    display: 'none'
  }
};

export default class Question extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayCorrection: false,
      nbAnswersSelected: 0
    };

    this.handleValidate = this.handleValidate.bind(this);
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  handleValidate(e) {
    e.preventDefault();
    this.setState({
      displayCorrection: true,
    })
  }

  selectAnswer(isSelected) {
    const nbAnswersSelected = isSelected ? this.state.nbAnswersSelected + 1 : this.state.nbAnswersSelected - 1;
    this.setState({
      nbAnswersSelected
    })
  }

  render() {

    const {question, display} = this.props;
    const {text, image, params, answers} = question;

    const questionsStyle = cxs(Object.assign({}, style.question, display ? style.show : style.hide));

    return (
      <div className={questionsStyle}>
        {image ? <img className={cxs(style.img)} src={image} alt={'question-illustration'}/> : null}
        <div className={cxs(style.title)}>{text}</div>
        {answers.map((answer, i) =>
          <Answer
            key={i}
            answer={answer}
            handleClick={this.selectAnswer}
            nbAnswersSelected={this.state.nbAnswersSelected}
            displayCorrection={this.state.displayCorrection}
            multipleChoices={params.multiple_choices}
          />
        )}
        <Button text={'Valider'} enable={params.display_correction && !this.state.displayCorrection} handleClick={this.handleValidate} />
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
    params: PropTypes.object.isRequired,
    answers: PropTypes.array.isRequired
  }),
  display: PropTypes.bool.isRequired
};
