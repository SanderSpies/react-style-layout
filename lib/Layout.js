/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var styles = require('./styles');

var Layout = React.createClass({

  render: function() {
    var props = this.props;
    var _styles = [];

    if (props.inline === true) {
      _styles.push(styles.inlineFlex);
    } else {
      _styles.push(styles.flex);
    }

    if (props.isVertical === true) {
      if (props.reverse === true) {
        _styles.push(styles.verticalLayoutReverse);
      }
      else {
        _styles.push(styles.verticalLayout);
      }
    }
    else {
      if (props.reverse === true) {
        _styles.push(styles.horizontalLayoutReverse);
      }
      else {
        _styles.push(styles.horizontalLayout);
      }
    }

    var align = props.align;
    if (align) {
      if (align === 'left' || align === 'top') {
        _styles.push(styles.alignStart);
      }
      else if (align === 'center') {
        _styles.push(styles.alignCenter);
      }
      else if (align === 'right' || align === 'bottom') {
        _styles.push(styles.alignEnd);
      }
    }

    var justify = props.justify;
    if (justify) {
      if (justify === 'left' || align === 'top') {
        _styles.push(styles.justifyStart);
      }
      else if (justify === 'justify') {
        _styles.push(styles.justify);
      }
      else if (justify === 'around') {
        _styles.push(styles.justifyAround);
      }
      else if (justify === 'center') {
        _styles.push(styles.justifyCenter)
      }
      else if (justify === 'right' || align === 'bottom') {
        _styles.push(styles.justifyEnd);
      }
    }

    var wrap = props.wrap;
    if (wrap === true) {
      _styles.push(styles.wrap);
    }

    var wrapReverse = props.wrapReverse;
    if (wrapReverse === true) {
      _styles.push(styles.wrapReverse);
    }

    var additionalStyles = props.styles;
    if (additionalStyles) {
      _styles = _styles.concat(additionalStyles);
    }

    return React.createElement('div', {styles:_styles}, props.children);
  }
});

module.exports = Layout;
