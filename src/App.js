import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}


// 下記のようにもかける
//
// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello, World!!"
//     )
//   }
// }
  

export default App;
