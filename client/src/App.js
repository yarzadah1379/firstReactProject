import React from 'react'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Edit from './components/Edit'
import Table from './components/Table'

import './App.css';

function App() {
  return (
   <div>
     <Router>
     <Navbar/>
     
    <Switch>
    <Route path='/' component={Login} exact> <Login/>  </Route>
    <Route path='/signup' component={Signup} exact>  <Signup/></Route>
    <Route path='/edit' component={Edit} exact>  <Edit/></Route>
    <Route path='/table' component={Table} exact>  <Table/></Route>





    

    </Switch>
     </Router>
   </div>
  );
}

export default App;
