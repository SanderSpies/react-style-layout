/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Layout = require('./Layout');

var HorizontalLayout = React.createClass({
  render: function() {
    return React.createElement(Layout, this.props);
  }
});

module.exports = HorizontalLayout;
