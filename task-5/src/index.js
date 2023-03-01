import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  constructor(){
    super();

    this.state = {show: true, name: "Іван"};
  }

  changeText(){
    if(this.state.show){
      this.setState({show: false});
    } else{
      this.setState({show: true});
    }
  }

  render(){
    return <div>
      <p onClick={this.changeText.bind(this)}>{this.state.show ? "Привіт" : "Пака"}, {this.state.name}</p>
    </div>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
