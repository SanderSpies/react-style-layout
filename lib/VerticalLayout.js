/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Layout = require('./Layout');

var VerticalLayout = React.createClass({
  render: function() {
    var props = this.props;
    props.isVertical = true;
    return React.createElement(Layout, this.props);
  }
});

module.exports = VerticalLayout;
