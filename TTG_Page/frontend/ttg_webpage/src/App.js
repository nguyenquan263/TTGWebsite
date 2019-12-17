import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';


import AboutComponent from './clientComponents/aboutComponent/aboutComponent';


// const app = (props) => {

//   var [ personState, setPersonState ] = useState({
//     abouts: [
//       { name: 'Quan', salary: 600 },
//       { name: 'Luan', salary: 500 },
//       { name: 'Tich', salary: 400 },
//     ],
//   });

//   const buttonHandler = () => {
//         setPersonState({
//           abouts: [
//             {name: 'Quan Nguyen', salary: 600},
//             {name: 'Luan Nguyen', salary: 500},
//             {name: 'Tich Phan', salary: 400},
//           ]
//         });
//       }

//   return (
//     <div className="App">
//       <h1>This is TTG WebPage using ReactJS</h1>
//       <AboutComponent name={personState.abouts[0].name} salary={personState.abouts[0].salary}></AboutComponent>
//       <AboutComponent name={personState.abouts[1].name} salary={personState.abouts[1].salary}></AboutComponent>
//       <AboutComponent name={personState.abouts[2].name} salary={personState.abouts[2].salary}></AboutComponent>

//       <button onClick={buttonHandler}>Click Here</button>
//     </div>
//   );

// }

// export default app;


class App extends Component {

  state = {
    abouts: [
      {name: 'Quan', salary: 600},
      {name: 'Luan', salary: 500},
      {name: 'Tich', salary: 400},
    ]
  }

  buttonHandler = () =>{
    // this.self.state.abouts[0].name = "Minh Thu";

    this.setState({
      abouts: [
        {name: 'Quan Nguyen', salary: 600},
        {name: 'Luan Nguyen', salary: 500},
        {name: 'Tich Phan', salary: 400},
      ]
    });
  }

  numberHandler = (num, letter) =>{
    num = num + 1;
    alert(num + " " + letter);
  }

  nameChangeHandler = (event) => {
    this.setState({
      abouts: [
        {name: event.target.value, salary: 600},
        {name: event.target.value, salary: 500},
        {name: event.target.value, salary: 400},
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'red'
    }

    return (
      <div className="App">
        <h1>This is TTG WebPage using ReactJS</h1>
        <AboutComponent 
          name={this.state.abouts[0].name} 
          salary={this.state.abouts[0].salary}
          click={this.buttonHandler}
          changed={this.nameChangeHandler}
        ></AboutComponent>
        <AboutComponent 
          name={this.state.abouts[1].name} 
          salary={this.state.abouts[1].salary}
          changed={this.nameChangeHandler}>
          
        </AboutComponent>
        <AboutComponent 
          name={this.state.abouts[2].name} 
          salary={this.state.abouts[2].salary}
          changed={this.nameChangeHandler}>
        </AboutComponent>

        <button style={style} onClick={this.buttonHandler}>Click Here</button>
        <button onClick={this.numberHandler.bind(this, 5, 'six')}>Number</button>
      </div>
    );
  }
}

export default App;
