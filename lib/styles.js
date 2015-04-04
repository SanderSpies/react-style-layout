'use strict';

var StyleSheet = require('react-style');

var styles = StyleSheet.create({

  flex: {
    display: 'flex'
  },

  horizontalLayout: {
    flexDirection: 'row'
  },

  horizontalLayoutReverse: {
    flexDirection: 'row-reverse'
  },

  verticalLayout: {
    flexDirection: 'column'
  },

  verticalLayoutReverse: {
    flexDirection: 'column-reverse'
  },

  justifyStart: {
    justifyContent: 'flex-start'
  },

  justifyEnd: {
    justifyContent: 'flex-end'
  },

  justifyCenter: {
    justifyContent: 'center'
  },

  justifyAround: {
    justifyContent: 'space-around'
  },

  justify: {
    justifyContent: 'space-between'
  },

  alignCenter: {
    alignItems: 'center'
  },

  alignStart: {
    alignItems: 'flex-start'
  },

  alignEnd: {
    alignItems: 'flex-end'
  },

  wrap: {
    flexWrap: 'wrap'
  },

  wrapReverse: {
    flexWrap: 'wrap-reverse'
  },

  fit: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  fixedTop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  },

  fixedRight: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0
  },

  fixedBottom: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0
  },

  fixedLeft: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0
  }

});

module.exports = styles;
