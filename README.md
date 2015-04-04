# react-style-layout

Port of Polymer's layout system to React + React Style

HorizontalLayout
===
    var HorizontalLayout = require('react-style-layout').HorizontalLayout;

    <HorizontalLayout
        reverse={true}
        align={left|center|right}
        justify={justify|left|center|right|around}
        wrap={true}
        wrapReverse={true}
        styles={customStyles}
        inline={true}
        />

VerticalLayout
---
    var VerticalLayout = require('react-style-layout').VerticalLayout;

    <VerticalLayout
        reverse={true}
        align={top|center|bottom}
        justify={justify|top|center|bottom|around}
        wrap={true}
        wrapReverse={true}
        styles={customStyles}
        inline={true}
        />

Available styles for elements
---
    var styles = require('react-style-layout').Styles;

    <div styles={styles.fit|styles.fixedTop|styles.fixedRight|styles.fixedBottom|styles.fixedLeft|styles.fill|styles.stretch} />

