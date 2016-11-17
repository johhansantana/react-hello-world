import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let contacts = [
  {
    id: 1,
    name: 'Johhan',
    phone: '7877877878'
  },
  {
    id: 2,
    name: 'Hildaleez',
    phone: '9399399393'
  },
];

ReactDOM.render(
  <App contacts={contacts} />,
  document.getElementById('root')
);
