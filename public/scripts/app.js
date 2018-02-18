'use strict';

// console.log('build it visible');
//
// const appRoot = document.getElementById('app');
//
// let details = '';
// let visibility = false;
//
// const onButtonClick = () => {
//   visibility = !visibility;
//
//   render();
// };
//
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onButtonClick}>{visibility ? 'Hide details' : 'Show details'}</button>
//       {visibility && (
//         <div>
//           <p>Hey, these are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
//
// render();

var buttonText = 'Show details';

var onToggle = function onToggle() {
  console.log('button');
  buttonText === 'Show details' ? buttonText = 'Hide details' : buttonText = 'Show details';
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onToggle },
      buttonText
    ),
    buttonText === 'Hide details' && React.createElement(
      'p',
      null,
      'These are some details!'
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
