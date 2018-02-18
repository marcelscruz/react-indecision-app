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

let buttonText = 'Show details';

const onToggle = () => {
  console.log('button');
  buttonText === 'Show details' ? buttonText = 'Hide details' : buttonText = 'Show details';
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>{buttonText}</button>
      {buttonText === 'Hide details' && <p>These are some details!</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
