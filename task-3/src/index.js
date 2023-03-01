import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  constructor(){
    super();
    this.state = {name: "Іван", age: 25};
  }

  showName(){
    alert(this.state.name);
  }

  render(){
    return <div>
      <button onClick={this.showName.bind(this)}>Press me!</button>
    </div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);