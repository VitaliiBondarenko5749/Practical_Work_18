import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  constructor(){
    super();
  }

  showMessage(){
    alert("hello");
  }

  render(){
    return <div>
      <button onClick={this.showMessage.bind(this)}>Press me!</button>
    </div>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
