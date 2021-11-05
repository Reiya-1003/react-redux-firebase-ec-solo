import React, { createContext, useState, useContext } from 'react';
import {BrowserRouter as Router, Route, Link,Switch, useHistory,useParams} from "react-router-dom";

import { connect,useSelector,useDispatch } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {Detail} from './Detail'
import App from '../App';
import {setPiza} from '../actions/actions'




const pizzaSelector = state => state.setItem
const cartSelector = state => state.getCartItem


function Home() {

  const  pizzadate= useSelector(pizzaSelector);
  const kakunin=useSelector(cartSelector)
  console.log(kakunin)
  
 



console.log(pizzadate)






// const history = useHistory();
// const handleLink = path => history.push(path)

const pizzaRan = pizzadate.map((piza, index)=>{
  return <div key={index}><p><img src={`${process.env.PUBLIC_URL}/pizza/${piza.img}`}></img></p><p>◯{piza.name}</p><p>・Msize {piza.priceM}円</p><p>・Lsize {piza.priceL}円</p>
  <Link to={`/detail/${piza.id}`}><button >詳細</button></Link></div>
  
})

  return (
    <React.Fragment>
        <h1>トップ画面・商品検索画面</h1>
        
        商品検索<input type="text"></input><button>検索</button>
　　　　　<div>
  　　　　
         {pizzaRan}
        
         </div>

    </React.Fragment>
  );
}

export default Home;