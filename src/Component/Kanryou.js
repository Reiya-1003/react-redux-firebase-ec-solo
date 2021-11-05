import React, { createContext, useState, useContext,} from 'react';
import {BrowserRouter as Router, Route, Link,Switch, useHistory,useParams} from "react-router-dom";
import {Detail} from './Detail'
import App from '../App';
import { connect,useSelector } from "react-redux";


const userSelector = state => state.loginUser
const cartSelector = state => state.getCartItem.cartitem
const orderSelector = state => state.getOrderItem




 function Kanryou() {
  const user = useSelector(userSelector);
  
  const Choice = useSelector(cartSelector);
  console.log(Choice)

  const ordered = useSelector(orderSelector)
  console.log(ordered)
 





// const history = useHistory();
// const handleLink = path => history.push(path)



  return (
    <React.Fragment>
        <h1>注文完了画面</h1>
        
        
　　　　　<h2>
  　　　　
         注文完了しました
        
         </h2>
         <div>※FB確認
         </div>
         



    </React.Fragment>
  );
}

export default Kanryou