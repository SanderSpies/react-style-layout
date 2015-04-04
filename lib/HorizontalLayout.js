/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Component = React.Component;
var styles = require('./styles');


class HorizontalLayout extends Component {
  render() {
    var props = this.props;
    var _styles = [];
    if (props.reverse === true) {
      _styles.push(styles.horizontalLayoutReverse);
    } else {
      _styles.push(styles.horizontalLayout);
    }

    if (props.align) {
      if (props.align === 'left') {
        _styles.push(styles.alignStart);
      }
      else if (props.align === 'center') {
        _styles.push(styles.alignCenter);
      }
      else if (props.align === 'right') {
        _styles.push(styles.alignEnd);
      }
    }

    if (props.justify) {
      if (props.justify === 'start') {
        _styles.push(styles.justifyStart);
      } else if (props.justify === 'justify') {
        _styles.push(styles.justify);
      }
      // todo: add others
    }

    return <div styles={[styles.horizontalLayout]}>
      {this.props.children}
    </div>;
  }
}


module.exports = HorizontalLayout;
