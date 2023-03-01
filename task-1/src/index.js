import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  constructor(){
    super();

    this.state = {name: "Іван", age: 25};
  }

  render(){
    return <div>
      <p>Ім'я: {this.state.name}, вік: {this.state.age}</p>
    </div>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);