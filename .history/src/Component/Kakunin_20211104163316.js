import React, { createContext, useContext, useState } from 'react';
import {BrowserRouter as Router, Route, Switch, Link,useHistory,useParams} from "react-router-dom";
import { connect,useSelector,useDispatch } from "react-redux";
import { chosepiza } from '../cart-data';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { getItem, getCartItem, orderdItem } from '../actions/actions'


const userSelector = state => state.loginUser
const cartSelector = state => state.getCartItem.cartitem
const orderSelector = state => state.getOrderItem

function Kakunin(){
  const user = useSelector(userSelector);
  
  const Choice = useSelector(cartSelector);
  const [newuser, setUser] = useState(Choice)

  const ordered = useSelector(orderSelector)
  console.log(ordered)


    
    const [hyouzipiza,setHyouzi] = useState(Choice.Items)
    const [Validation, setValis] = useState([]);  //バリデーションのステート
    const history = useHistory();

    const dispatch = useDispatch();
  let input
    console.log(user)
    console.log(Choice)
 
    console.log(hyouzipiza)
    

   
    let cartinUser={
      Items: [],
      addnumber:"",
      address:"",
      email:"",
      id:null,
      name:"",
      orderdate:"",
      ordertime:"",
      status:"",
      tell:""
  }//入るやつ

    const cartRan = hyouzipiza.map((ran,index)=>{
      
      return <tr key={index}><td>{ran.name}</td>
                            <td>{ran.topping.map((top,index)=>{return <p key={index}>{top}</p>})}</td>
                            <td>{ran.size}サイズ</td>
                            <td>{ran.number}個</td>
                            <td>{ran.total}円</td>
                            </tr>})
      




     //バリデーション
     const attmark = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
     const yuubin = new RegExp(/^\d{3}-\d{4}$/);
     const denwa = new RegExp(/^0\d{3}-\d{1,4}-\d{3,4}$/);
 
     const dt = new Date();  //現在日時取得できてる
     const hours = dt.getHours();　　//時間のみ取得できてる
     const year = dt.getFullYear();  //年だけ取得
     const monts = dt.getMonth() + 1;  //月だけ取得 0-11になってる
     const niketamonts = ('00' + monts).slice(-2); //09にする
     const day = dt.getDate();　　　//日にちだけ取得
     const niketaday = ('00' + day).slice(-2); //09にする

　　　

     const orderCheck = () => {
        if (Validation.length !== 0) {
          Validation.length = 0;
          // ここでバリデーションの配列を空にする
  
        }
        if (user.name === "") { Validation.push("※名前を入力してください※") }
        if (user.email === "") { Validation.push("※メールアドレスを入力してください※") }
        //  else if (!attmark.test(user[0].email)) { Validation.push("※メールアドレスの形式が不正です※") }
        if (user.addnumber === "") { Validation.push("※郵便番号を入力してください※") }
        //  else if (!yuubin.test(user.addnumber)) { Validation.push("※郵便番号はXXX-XXXXの形式で入力してください※") }
        if (user.address === "") { Validation.push("※住所を入力してください※") }
        if (user.tel === "") { Validation.push("※電話番号を入力してください※") }
        //  else if (!denwa.test(user.tel)) { Validation.push("※電話番号は0XXXーXXXXーXXXX形式で入力してください※") }
        if (user.orderdate === "") { Validation.push("※配送日を入力してください※") }
        if (user.orderdate !== `${year + "-" + niketamonts + "-" + niketaday}`) { Validation.push("※本日の日付を入力してください※") }
        if (user.ordertime === "") { Validation.push("※配送時間を入力してください※") }
        // if(user.ordertime - hours < 3){ Validation.push("※今から3時間後の日時をご入力ください※") }
        if (user.status === "") { Validation.push("※支払い方法を選択してください※") }
        if (Validation.length !== 0) {
          // console.log(carts)
          
          const newVali = [...Validation]
          setValis(newVali)
          console.log(Validation)
        
    
  
        }
        if (Validation.length === 0) {
          cartinUser={
            Items:Choice.Items,
            addnumber:user.addnumber,
            address:user.addressr,
            email:user.email,
            id:user.id,
            name:user.name,
            orderdate:user.orderdate,
            ordertime:user.ordertime,
            status:user.status,
            tel:user.tel

          }
          ordered.orderditem.push(user)
          dispatch(orderdItem(ordered.orderditem))

          firebase.firestore()
          .collection(`users/${user.uid}/carts`)
          .doc(Choice.id).update(Choice)
          .then(function () {
          })
          .catch(function (error) {
            console.error('エラー', error)
          })
        firebase.firestore().collection(`users/${user.uid}/carts`).add({
          addnumber: '',
          address: '',
          email: '',
          orderdate: '',
          ordertime: '',
          status: 0,
          tel: '',
          id: '',
          name: '',
          Items: []
        }).then(doc => {
          dispatch(getCartItem({
             id: doc.id, data: {
              addnumber: '',
              address: '',
              email: '',
              orderdate: '',
              ordertime: '',
              status: 0,
              tel: '',
              id: doc.id,
              name: '',
              Items: []
            }
          }))

        })

        history.push('/kanryou');
            
        }
    }

    return <React.Fragment>
         <h2>注文確認</h2>
         <table>
						<thead>
							<tr>
								<th>商品名</th>
								<th>トッピング</th>
								<th>サイズ</th>
								<th>個数</th>
								<th>金額(税抜き)</th>
								
							</tr>
						</thead>
                        <tbody>
　　　　　　　　　　　　　　　　{cartRan}
                        </tbody>
        </table>

        <form >
          <div>
            <div>
              <h3>お届け先情報</h3>
              <table style={{ margin: "auto" }}>

                <tbody>
                  <tr >
                    <td >
                      <div>お名前:</div>
                    </td>
                    <td>
                      <input type="text"
                      onChange={(e) => {
                        setUser({ ...user, name: e.target.value })
                      }}
                      ref={(element) => input = element}></input>


                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>メールアドレス：</div>
                    </td>
                    <td>
                      <input type="text"
                       onChange={(e) => {
                        setUser({ ...user, email: e.target.value })
                      }}
                      ref={(element) => input = element}></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>郵便番号：</div>
                    </td>
                    <td>
                      <input　type="text"
                       onChange={(e) => {
                        setUser({ ...user, addnumber: e.target.value })
                      }}
                      ref={(element) => input = element}></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>住所：</div>
                    </td>
                    <td>
                      <input type="text"
                       onChange={(e) => {
                        setUser({ ...user, address: e.target.value })
                      }}
                      ref={(element) => input = element}></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>電話番号：</div>
                    </td>
                    <td>
                      <input type="text"
                       onChange={(e) => {
                        setUser({ ...user, tel: e.target.value })
                      }}
                      ref={(element) => input = element}></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>配達日時</div>
                    </td>
                    <td>
                      <div>
                        <div>
                          <label>配達日を選択してください</label>
                        </div>
                        <div>
                          <input type="date"
                          onChange={(e) => {
                            setUser({ ...user, orderdate: e.target.value })
                          }}
                          ref={(element) => input = element} ></input>
                        </div>
                      </div>
                      <div>
                        <div>
                          <label><input type="radio" name="Time" value="10"
                          onChange={(e) => {
                            setUser({ ...user, ordertime: e.target.value })
                          }}
                          ref={(element) => input = element}
                         ></input>10時</label>
                          <label><input type="radio" name="Time" value="11"
                          onChange={(e) => {
                            setUser({ ...user, ordertime: e.target.value })
                          }}
                          ref={(element) => input = element}
                            ></input>11時</label>
                          <label><input type="radio" name="Time" value="12"
                          onChange={(e) => {
                            setUser({ ...user, ordertime: e.target.value })
                          }}
                          ref={(element) => input = element}
                            ></input>12時</label><br></br>
                          <label><input type="radio" name="Time" value="13"
                          onChange={(e) => {
                            setUser({ ...user, ordertime: e.target.value })
                          }}
                          ref={(element) => input = element}
                            ></input>13時</label>
                          <label><input type="radio" name="Time" value="14"
                          onChange={(e) => {
                            setUser({ ...user, ordertime: e.target.value })
                          }}
                          ref={(element) => input = element}
                            ></input>14時</label>
                          <label><input type="radio" name="Time" value="15"
                          onChange={(e) => {
                            setUser({ ...user, ordertime: e.target.value })
                          }}
                          ref={(element) => input = element}
                            ></input>15時</label><br></br>
                          <label><input type="radio" name="Time" value="16"
                          onChange={(e) => {
                            setUser({ ...user, ordertime: e.target.value })
                          }}
                          ref={(element) => input = element}
                            ></input>16時</label>
                          <label><input type="radio" name="Time" value="17"
                          onChange={(e) => {
                            setUser({ ...user, ordertime: e.target.value })
                          }}
                          ref={(element) => input = element}
                            ></input>17時</label>
                          <label><input type="radio" name="Time" value="18"
                          onChange={(e) => {
                            setUser({ ...user, ordertime: e.target.value })
                          }}
                          ref={(element) => input = element}
                            ></input>18時</label>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div>
              <h3>お支払い方法</h3>
              <table style={{ margin: "auto" }}>
                <tbody>
                  <tr>
                    <td>
                      <div>代金引換</div>
                    </td>
                    <td>
                      <div><label><input type="radio" name="pay" value="1"
                      onChange={(e) => {
                        setUser({ ...user, status: e.target.value })
                      }}
                      ref={(element) => input = element}
                        ></input>代金引換</label></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>クレジットカード決済</div>
                    </td>
                    <td>
                      <div><label><input type="radio" name="pay" value="2"
                      onChange={(e) => {
                        setUser({ ...user, status: e.target.value })
                      }}
                      ref={(element) => input = element}
                        ></input>クレジットカード</label><br></br></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>state変わってるか確認
            <div>名前：{user.name}</div>
            <div>メアド：{user.email}</div>
            <div>郵便：{user.addnumber}</div>
            <div>住所：{user.address}</div>
            <div>電話：{user.tell}</div>
            <div>日にち：{user.orderdate}</div>
            <div>時間：{user.ordertime}</div>
            <div>支払：{user.status}</div>
           


          </div>
          <div>{Validation.map((vali, index) => { return <p key={index}>{vali}</p> })}</div>
        </form>

        <div><button onClick={()=>orderCheck()}>注文する</button></div>
       </React.Fragment>
}
         




export default Kakunin