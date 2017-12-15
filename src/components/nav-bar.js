import React, {Component} from 'react';
import PropTypes from 'prop-types'
import cxs from 'cxs';

import {Button} from '../components';


const navBar = cxs({
  padding: '0px',
  paddingBottom: '20px',
  display: 'flex',
  justifyContent: 'space-between'
});

export default class NavBar extends Component {

  constructor(props) {
    super(props);

    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrevious(e) {
    e.preventDefault();
    const currentQuestion = this.props.currentQuestion - 1;
    this.props.onChangeCurrentQuestion(currentQuestion);
  }

  handleNext(e) {
    e.preventDefault();
    const currentQuestion = this.props.currentQuestion + 1;
    this.props.onChangeCurrentQuestion(currentQuestion);
  }

  render() {

    const {currentQuestion, numberMaxQuestions} = this.props;

    const enablePrevious = currentQuestion !== 0;
    const enableNext = currentQuestion < numberMaxQuestions - 1;

    return (
      <div className={navBar}>
        <Button inline={true} enable={enablePrevious} handleClick={this.handlePrevious} text={'précédent'}/>
        <Button inline={true} enable={enableNext} handleClick={this.handleNext} text={'suivant'}/>
      </div>
    );
  }
}

NavBar.propTypes = {
  onChangeCurrentQuestion: PropTypes.func.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  numberMaxQuestions: PropTypes.number.isRequired
};