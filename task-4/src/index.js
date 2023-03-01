import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  constructor(){
    super();

    this.state = {name: "Іван", age: 25};
  }

  changeName(){
    if(this.state.name === "Іван" && this.state.age === 25){
      this.setState({name: "Коля", age: 30});
    } else{
      this.setState({name: "Іван", age: 25});
    }
  }

  render(){
    return <div>
      <p>Ім'я: {this.state.name}, вік: {this.state.age}</p>
      <button onClick={this.changeName.bind(this)}>Press to change!</button>
    </div>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
