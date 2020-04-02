import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import'./validationForm.js';
import ValidationForm from './validationForm.js';

class Form extends Component {
    render(){
        return(
    <React.Fragment>
        < ValidationForm/>
    <form name ="Start">
        <p>D</p>
        <input type="text" name="D" placeholder="D" />
        <p>h</p>
        <input type="text" name="h"  placeholder="h" />
        <p>delta_T</p>
        <input type="text" name="delta_T" placeholder="delta_T" />
        <p>steps</p>
        <input type="text" name="steps" placeholder="steps" />    
       <button type="submit" className="JSON_form">Send</button>
       </form>
</React.Fragment>
)}
}
export default Form;