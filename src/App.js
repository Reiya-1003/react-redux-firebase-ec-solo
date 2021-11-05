import React, {createContext, useState} from 'react'
import Header from './Component/Header'
import Home from './Component/Home';
import Detail from './Component/Detail';
import Cart from './Component/cart';
import Kakunin from './Component/Kakunin';
import Kanryou from './Component/Kanryou';
import Button from '@material-ui/core/Button';
import { cartData,chosepiza } from './cart-data'
import {
  BrowserRouter as Router,
  Switch,
  Route, BrowserRouter
} from 'react-router-dom'





function App() {

 

 

  return (
    <React.Fragment>
      
    <Router >
    <Header/>
      
        
      <Switch>
      
        <Route path='/' exact component={Home} />
        
        
        <Route path='/detail/:item_id' exact component={Detail} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/kakunin' exact component={Kakunin} />
        <Route path='/kanryou' exact component={Kanryou} />

       
       </Switch>
        
       
      
      
    </Router>
    </React.Fragment>
  );
};






export default App;