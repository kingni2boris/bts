import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Present from './Present';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
const routs = (
  <Router>
     <div>
        <Route exact path="/" component={App} />
        <Route exact path="/present" component={Present} />
        <Route exact path="/footer" component={Footer} />
        <Route exact path="footer/app" component={App} />

       
        
     
              <ul>
                  <li><Link to ="Present">Presence</Link></li>
                  <li><Link to ="Footer">Footer</Link></li>

              </ul>
       
     </div>
  </Router>
);
ReactDOM.render(routs, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
