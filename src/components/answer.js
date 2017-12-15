import React, {Component} from 'react';
import PropTypes from 'prop-types'
import cxs from 'cxs';
import _ from 'lodash';

function boxShadow(color) {
  return {
    webkitBoxShadow: `0 0 15px 0 #${color}`,
    mozBoxShadow: `0 0 15px 0 #${color}`,
    boxShadow: `0 0 15px 0 #${color}`
  }
}

const style = {
  common : Object.assign ({
    padding: '10px',
    marginTop: '15px',
    marginBottom: '15px',
    textAlign: 'left',
    paddingLeft: '20px',
    cursor: 'pointer',
    userSelect: 'none'
  }, boxShadow('8A8A8A')),
  selected: {
    backgroundColor: '#b3c3d3'
  },
  unselected: {
    backgroundColor: '#fff'
  },
  right: boxShadow('0fbf49'),
  wrong: boxShadow('bf0f13')
};

export default class Answer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const selected= !this.state.selected;

    if (!this.props.multipleChoices && this.props.nbAnswersSelected >= 1 && selected) {
      return;
    }

    this.setState({
      selected
    });

    this.props.handleClick(selected);
  }

  render() {

    const {answer, displayCorrection} = this.props;
    const {text, is_correct} = answer;

    const answerStyle = cxs(Object.assign({}, style.common, this.state.selected ? style.selected : style.unselected, displayCorrection ? is_correct ? style.right : style.wrong : {}));

    return (
      <div className={answerStyle} onClick={!displayCorrection ? this.handleClick : _.noop}>
        {text}
      </div>
    );
  }
}

Answer.propTypes = {
  answer: PropTypes.shape({
    text: PropTypes.string.isRequired,
    is_correct: PropTypes.bool.isRequired
  }),
  nbAnswersSelected : PropTypes.number,
  handleClick: PropTypes.func,
  multipleChoices: PropTypes.bool.isRequired,
  displayCorrection: PropTypes.bool.isRequired
};