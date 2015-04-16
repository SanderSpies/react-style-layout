/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Layout = require('./Layout');
var assign = require('react/lib/Object.assign');

var VerticalLayout = React.createClass({
  render: function() {
    var verticalProps = assign({}, this.props, {isVertical: true});
    return React.createElement(Layout, verticalProps);
  }
});

module.exports = VerticalLayout;
