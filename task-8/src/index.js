import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  constructor(){
    super();

    this.state = {name: "Іван", age: 25, show: false};
  }

  showOrHideText(){
    if(this.state.show){
      this.setState({show: false});
    } else{
      this.setState({show: true});
    }
  }

  render(){
    var message = "";
    var buttonText = "";

    if(this.state.show){
      message = <p>Ім'я: {this.state.name}, вік: {this.state.age}</p>;
      buttonText = "Сховай мене";
    } else{
      message = <p></p>;
      buttonText = "Натисни на мене";
    }

    return <div>
      {message}
      <button onClick={message = this.showOrHideText.bind(this)}>{buttonText}</button>
    </div>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);