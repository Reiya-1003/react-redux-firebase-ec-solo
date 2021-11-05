import React, { createContext, useState, useContext } from 'react';
import {BrowserRouter as Router, Route, Link,Switch, useHistory,useParams} from "react-router-dom";
import store from '../Store/index'
import { connect,useSelector } from "react-redux";

import {Detail} from './Detail'
import App from '../App';






function Home() {

  
  
  const  pizzadate= useSelector((state) => state.pizzaReducer.pizzaDate[0].piza);
  const User =useSelector((state)=>state.cartReducer.carts)
  
 

console.log(User)

console.log(pizzadate)



const[pizzas,setPizzas]=useState(pizzadate)


// const history = useHistory();
// const handleLink = path => history.push(path)

const pizzaRan = pizzas.map((piza, index)=>{
  return <div key={index}><p><img src={`${process.env.PUBLIC_URL}/pizza/${piza.img}`}></img></p><p>◯{piza.name}</p><p>・Msize {piza.Mprice}円</p><p>・Lsize {piza.Lprice}円</p>
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