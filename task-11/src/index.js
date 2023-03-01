import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      hrefs: [
        {href: '1.html', text: 'посилання 1'},
        {href: '2.html', text: 'посилання 2'},
        {href: '3.html', text: 'посилання 3'},
      ] 
  }
 }

 render(){
  const list = this.state.hrefs.map((item, index) => {return <li key={item.href}><a href={item.href}> {item.text}</a></li>});

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