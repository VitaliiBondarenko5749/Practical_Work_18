import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  constructor(){
    super();

    this.state = {name: "Іван", age: 25, show: false};
  }

  showText(){
    this.setState({show: true});
  }

  render(){
    if(this.state.show){
      var message = <p>Ім'я: {this.state.name}, вік: {this.state.age}</p>;
    }

    return <div>
      {message}
      <button onClick={message = this.showText.bind(this)}>Натисни на мене</button>
    </div>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);