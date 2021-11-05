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
import { setUser, deleteUser,setItem,setTopping,getCartItem,deleteCartItem, orderdItem} from '../actions/actions'
import { auth, } from '../config/firebase';
import firebase from 'firebase/compat/app';
import { login, logout } from '../config/firebase'


const userSelector = state => state.loginUser

function Header(){

  const User = useSelector(userSelector)
  const dispatch = useDispatch()

  // 商品情報を持ってくる
  const getItem = () => {
    firebase.firestore().collection('Items').doc('Pizas').get().then(doc => {
      dispatch(setItem(doc.data()))
    })
  }

  //トッピングを持ってくる
  const getTopping = () => {
    firebase.firestore().collection('Items').doc('Topps').get().then(doc => {
      dispatch(setTopping(doc.data()))
    })
  }

  //statusが0のカートを作成する
  const setCart = (user) => {
    firebase.firestore().collection(`users/${user.uid}/carts`).add({
      addnumber:'',
      address:'',
      email:'',
      orderdate:'',
      ordertime:'',
      status:0,
      tel:'',
      id:'',
      name:'',
      Items:[]
    }).then(doc => {
      dispatch(getCartItem({id:doc.id,data:{
      addnumber:'',
      address:'',
      email:'',
      orderdate:'',
      ordertime:'',
      status:0,
      tel:'',
      id:doc.id,
      name:'',
      Items:[]
      }}))
    })
  }

  //カートの情報を持ってくる
  const getCartList = (user) => {
    firebase.firestore().collection(`users/${user.uid}/carts`).get().then(snapshot => {
      if(snapshot.empty){
        setCart(user)
      }
      snapshot.forEach((doc) => {
        if(doc.data().status === 0){
          dispatch(getCartItem({id:doc.id ,data:doc.data()}))
        }
      })
    })
  }

  //注文履歴を取得
  const getOrderdList = (user) => {
    let ordered = []

    firebase.firestore().collection(`users/${user.uid}/carts`).get().then(snapshot => {
      snapshot.forEach((doc) => {
        if(doc.data().status === "1" || doc.data().status === "2"){
          ordered.push(doc.data())
          dispatch(orderdItem(ordered))
        }
      })
    })
  }

  //ユーザー情報を入れたり消したり
  const setuser1 = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        dispatch(setUser(user))
        getCartList(user)
        getOrderdList(user)
      } else {
        dispatch(deleteUser())
        dispatch(deleteCartItem())
      }
      getItem()
      getTopping()
    })
  }

  useEffect(() => {
    setuser1()
  },[])

    const Button1 = () => {
      if(user.uid){
        return <Link to={'/'}><Button color="secondary" onClick={logout}>ログアウト</Button></Link>
        } else {
        return <Button color="primary" onClick={login}>ログイン</Button>
      }
    }
  







    return(
    <React.Fragment>
        <header style={{background: "gray"}}>

        <Link to={'/'}><span> React.jsでECサイト</span></Link>
        <Link to={'/'}><span> 商品選択</span></Link>
        <Link to={'/kanryou'}><span> 大元配列の状態確認</span></Link>
       <Button1/>
        </header>
        </React.Fragment>
    )
}

export default Header


