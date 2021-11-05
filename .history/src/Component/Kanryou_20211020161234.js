import React, { createContext, useState, useContext } from 'react';
import {BrowserRouter as Router, Route, Link,Switch, useHistory,useParams} from "react-router-dom";
import {Detail} from './Detail'
import App from '../App';
import { connect,useSelector } from "react-redux";







 function Kanryou() {
  
  const User = useSelector((state) => state.cartReducer);
  const [user, setUser] = useState(User)
const Choice = useSelector((state) => state.choiceReducer.chosepiza);
 const [choice,setChoice] = useState(Choice)


 

console.log(User)
console.log(user)
console.log(Choice)
console.log(choice)





// const history = useHistory();
// const handleLink = path => history.push(path)



  return (
    <React.Fragment>
        <h1>注文完了画面</h1>
        
        
　　　　　<h2>
  　　　　
         注文完了しました
        
         </h2>
         <div>※コンソールで確認</div>
         



    </React.Fragment>
  );
}

export default Kanryou