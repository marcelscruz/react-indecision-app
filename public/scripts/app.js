'use strict';

console.log('works');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Marcel Cruz'
  ),
  React.createElement(
    'p',
    null,
    'Age: 26'
  ),
  React.createElement(
    'p',
    null,
    'Location: Dublin'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
