/**
 * @jsx React.DOM
 */
'use strict';

var StyleSheet   = require('react-style');
var React        = require('react');
var ReactStyleLayout = require('react-style-layout');
var HorizontalLayout = ReactStyleLayout.HorizontalLayout;
var VerticalLayout = ReactStyleLayout.VerticalLayout;
var Styles = ReactStyleLayout.Styles;


var Application = React.createClass({

  getInitialState: function() {
    return {
      textAlign: 'left'
    };
  },

  render: function() {
    return (
      <HorizontalLayout align="left" styles={{height: '100%'}}>
        <div styles={[Styles.fill, ApplicationStyles.menuBar]}>

        </div>
        <VerticalLayout styles={Styles.stretch}>
          <div>
            a
          </div>
          <div>
            b
          </div>
        </VerticalLayout>
      </HorizontalLayout>
    );
  }

});

var ApplicationStyles = StyleSheet.create({

  menuBar: {
    backgroundColor: 'orange',
    width: 300
  },

  content: {
    backgroundColor: 'purple'
  }

});

if (typeof window !== 'undefined') {
  React.render(<Application />, document.getElementById('app'));
}
