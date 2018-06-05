import React  from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import MoviesList from './MoviesList';
import logo from './logo.svg';
import './App.css';
import MovieDetail from './MovieDetail';

const App = () =>(
    <Router>
        <div className="App">
           <header className="App-header">
               <Link to='/'>
                  <img src={logo} className="App-logo" alt="logo"/>
               </Link>
           </header>
           <Switch>
               <Route exact path="/" component={MoviesList} />
               <Route exact path="/:id" component={MovieDetail} />
            </Switch>   
        </div>
    </Router>
    
);

export default App;
