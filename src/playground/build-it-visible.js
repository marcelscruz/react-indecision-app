console.log('build it visible');

const appRoot = document.getElementById('app');

let details = '';
let visibility = false;

const onButtonClick = () => {
  visibility = !visibility;

  if (details === '') {
    details = 'These are the details';
  } else {
    details = '';
  }

  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onButtonClick}>{visibility ? 'Hide details' : 'Show details'}</button>
      {visibility && (
        <div>
          <p>Hey, these are some details you can now see!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
