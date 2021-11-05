import React, { createContext, useContext, useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Link,useHistory,useParams} from "react-router-dom";
import { connect,useSelector } from "react-redux";



const userSelector = state => state.loginUser
const cartSelector = state => state.getCartItem.cartitem


function Cart(){
  const User = useSelector(userSelector);
     const [user, setUser] = useState(User)
  const Choice = useSelector(cartSelector);
    const [choice,setChoice] = useState(Choice)
    
  const [hyouzipiza,setHyouzi] = useState([Choice.Items])
console.log(hyouzipiza)
   console.log(User)
   console.log(user)
   console.log(hyouzipiza)
    console.log(Choice)
    console.log(choice)



    const handleDelete = index => {
        const newchoice =[...hyouzipiza]
        newchoice.splice(index,1)
        setHyouzi(newchoice)
        
        console.log(choice)
      


      };

    
    const cartRan = hyouzipiza.map((ran,index)=>{
    
    return <tr key={index}><td>{ran.name}</td>
                          <td>{ran.topping.map((top,index)=>{return <p key={index}>{top}</p>})}</td>
                          <td>{ran.size}サイズ</td>
                          <td>{ran.number}個</td>
                          <td>{ran.total}円</td>
                          <td><button onClick={()=>handleDelete(index)}>削除</button></td></tr>}
    )



    return <React.Fragment>
         <h2>カート画面<Link to={`/`}><button>商品選択画面に戻る</button></Link></h2>
         <table>
						<thead>
							<tr>
								<th>商品名</th>
								<th>トッピング</th>
								<th>サイズ</th>
								<th>個数</th>
								<th>金額(税抜き)</th>
								<th>削除</th>
							</tr>
						</thead>
                        <tbody>
　　　　　　　　　　　　　　　　{cartRan}
                        </tbody>
        </table>

        <div><Link to={`/kakunin`}><button>商品確認する</button></Link></div>
       </React.Fragment>
}
         




export default Cart