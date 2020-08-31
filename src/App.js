import React, { Component } from 'react';

class App extends Component {
  render() {
    // const greeting = "Hiiii!";
    // const dom = <h1 className="foo">{greeting}</h1>;
    // return dom;

    // jsxはbabelがjsに変換してくれている

    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am Clicked")}}/>
      </React.Fragment>
    )
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
