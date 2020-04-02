import React from 'react';
import logo from './logo.svg';
import './App.css';
import './redactor.js';
import Redactor from './redactor.js';
import Form from './form.js';

function App() {
  return (
    
<React.Fragment>
    <canvas id='canvas' width="600" height="600">Ваш браузер устарел!</canvas>
    <input id="width1" type="number"/>
    <input id="height1" type="number"/>
    <button  type="submit" id="click1">Изменить размер холста</button>
    <div id="palette" ></div>
    <div id="clear">Очистить изображение</div>
 <Form/>
  </React.Fragment>
  );
}

export default App;
