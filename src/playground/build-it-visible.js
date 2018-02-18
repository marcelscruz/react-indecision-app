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

class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {
          this.state.visibility && <p>'These are some details</p>
        }
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
