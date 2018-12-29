class ToggleApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      visibility: false
    };
  };

  handleToggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {
          this.state.visibility && (
            <div>
              <p>Hey you can see this now!</p>
            </div>
          )
        }
      </div>
    );
  }
}

ReactDOM.render(<ToggleApp />, document.getElementById('app'));


// let visibility = false;

// const toggle = () => {
//   visibility = !visibility;
//   render();
//   return <p>Now you can see this right?</p>
// }
// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggle}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//       {
//         visibility && (
//           <div>
//             <p>Hey you can see this now!</p>
//           </div>
//         )
//       }
//     </div>
//   )
//   ReactDOM.render(jsx, document.getElementById('app'));
// }

// render();


