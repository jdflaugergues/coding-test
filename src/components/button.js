import React, {Component} from 'react';
import PropTypes from 'prop-types'
import cxs from 'cxs';
import _ from 'lodash';

const style = {
  common: {
    padding: '10px',
    paddingTop: '10px',
    fontSize: '13px',
    fontWeight: 'bold',
    userSelect: 'none',
},
  enable: {
    webkitBoxShadow: '0 0 10px 0 #8A8A8A',
    mozBoxShadow: '0 0 10px 0 #8A8A8A',
    boxShadow: '0 0 10px 0 #8A8A8A',
    color: '#000',
    backgroundColor: '#fff',
    cursor: 'pointer'
  },
  disable: {
    color: '#acb3b7',
    backgroundColor: '#e5e5e5',
    cursor: 'default'
  },
  inline: {
    width: '135px',
  }
};

export default class Button extends Component {
  render() {

    const {text, enable, inline, handleClick} = this.props;

    const buttonStyle = cxs(Object.assign({}, style.common, enable ? style.enable : style.disable, inline ? style.inline : {}));

    return (
      <div className={buttonStyle} onClick={enable ? handleClick : _.noop}>
        {text.toUpperCase()}
      </div>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  enable: PropTypes.bool,
  inline: PropTypes.bool,
  handleClick: PropTypes.func
};