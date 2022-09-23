import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Portafolio from './Portafolio.js';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Portafolio />
  </BrowserRouter>,
  document.getElementById('root')
);

