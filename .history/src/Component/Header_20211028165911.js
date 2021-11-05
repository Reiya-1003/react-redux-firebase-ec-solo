import React, {createContext, useState,useEffect,} from 'react'
import { useDispatch,useSelector } from 'react-redux'
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
import { setItem,} from '../actions/actions'
import { auth, } from '../config/firebase';
import firebase from 'firebase/compat/app';


function Header(){

  const dispatch = useDispatch()
  const getItem = () => {
    firebase.firestore().collection('Items').doc('pizzas').get().then(doc => {
      dispatch(setItem(doc.data()))
    })
  }






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

 const ref =firebase.firestore().collection("Items");

 const getItems=()=>{
   ref.onSnapshot((querySnapshot)=>{
     const items = [];
     querySnapshot.forEach((doc)=>{
       items.push(doc.data());

     });
     setArray(items)
   })
 };

 useEffect(()=>{
   getItems();
 },[])



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


