import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  constructor(){
    super();

    this.state = {items: ['Коля', 'Вася', 'Петро']};
  }

  render(){
    const list = this.state.items.map((item, index) => {return <li key={index}>{item} - {index + 1}</li>});

    return <ul>
      {list}
    </ul>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);