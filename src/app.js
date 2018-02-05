console.log('works');

var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
  </div>
);

var templateTwo = (
  <div>
    <h1>Marcel Cruz</h1>
    <p>Age: 26</p>
    <p>Location: Dublin</p>
  </div>
);

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot);
