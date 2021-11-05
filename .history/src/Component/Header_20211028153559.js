import React, {createContext, useState,useEffect} from 'react'
import Home from './Home';
import Detail from './Detail';
import Cart from './cart';
import Kakunin from './Kakunin';
import Kanryou from './Kanryou';
import Button from '@material-ui/core/Button';
import { cartData,chosepiza } from '../cart-data'
import {
  BrowserRouter as Router,
  Switch,
  Route, BrowserRouter,Link
} from 'react-router-dom'

import { auth, } from '../config/firebase';
import firebase from 'firebase/compat/app';


function Header(){

  const signInWithGoogle = () => {
    // Googleプロバイダオブジェクトのインスタンスを作成
    const provider = new firebase.auth.GoogleAuthProvider()
    // ポップアップウィンドウでログインを行う場合はsignInWithPopupを呼び出す
    firebase.auth().signInWithPopup(provider)
    .then(user => {
        alert("success : " + user.user.displayName + "さんでログインしました");
      })
      .catch(error => {
          alert(error.message);
      });
  }
  const [myArray, setArray] = useState([]);


  useEffect(() => {
    firebase
      .firestore()
      .collection("Items")
      .onSnapshot((snapshot) => {
        const Items = snapshot.docs.map((doc) => {
          return doc.data();
          
        });
        console.log(Items)
        setArray(Items);
      });
  }, []);
  
console.log(myArray)


    return(
    <React.Fragment>
        <header style={{background: "gray"}}>

        <Link to={'/'}><span> React.jsでECサイト</span></Link>
        <Link to={'/'}><span> 商品選択</span></Link>
        <Link to={'/kanryou'}><span> 大元配列の状態確認</span></Link>
        <button  onClick={()=>signInWithGoogle()}>googleログイン</button>
        </header>
        </React.Fragment>
    )
}

export default Header


