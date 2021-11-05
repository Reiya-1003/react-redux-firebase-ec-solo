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


function Header(){



    return(
    <React.Fragment>
        <header style={{background: "gray"}}>
        <Link to={'/'}><span> React.jsでECサイト</span></Link>
        <Link to={'/'}><span> 商品選択</span></Link>
        <Link to={'/kanryou'}><span> 大元配列の状態確認</span></Link>
        </header>
        </React.Fragment>
    )
}

export default Header


