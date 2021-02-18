import React, { Component } from 'react';
// import React, {Comp} from 'react';
import './App.css';
import Module from './Module';
import Present from './Present';
import Header from './Header';
import Dex from './Dex';
import Validation from './Validation';
import Footer from './Footer';

//import logo from'./assets/images/logo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navbar from "./Navbar";
import Home from './Home';


class App extends Component {
    constructor(props) {
        super(props);
    }
    render(){
           
           return(
              
                    <div>

                    <div>

                        <Header/> 
                        <Validation/> 
                        <Module/>
                        

            
                        
                    
                    </div>
                        
                        
                    </div> 
                 
                  
                  
           )
    }            
                    
                    
}

export default App;