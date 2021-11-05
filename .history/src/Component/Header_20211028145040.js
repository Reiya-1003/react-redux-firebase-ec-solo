import React, {createContext, useState} from 'react'
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

const db = firebase.firestore();
// collection 'recipes' を参照
const sampleColRef = db.collection('Items');
// 配列を定義しておく
let myArray = [];
// 取得したdataの格納用
let dataValue;
sampleColRef.onSnapshot((snapshot) => {
  myArray = []; // 最初に空にしておく。ここでしか使わない場合など、場合によっては記述不要。
  snapshot.forEach((doc) => {
    dataValue = doc.data();
    myArray.push({
      key: doc.id,
      value: dataValue
    });
  });
  console.log(myArray)
});



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


