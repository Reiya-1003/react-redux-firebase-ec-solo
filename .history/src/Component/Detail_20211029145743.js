import React, { createContext, useState, useContext,useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch,Link, useHistory,useParams} from "react-router-dom";
import { connect,useSelector } from "react-redux";
import {tourokuAction}from '../Store/Actions/tourokuActions'






 function Detail(){
    const pizzadate= useSelector((state) => state.pizzaReducer.pizzaDate);
    const toppdate = useSelector((state) => state.toppReducer.toppDate);
    const[pizzas,setPizzas]=useState(pizzadate) //ピザの商品の配列
    const[topps,setTopps]=useState(toppdate) //トッピングの情報配列
    const { item_id } = useParams()
    const getItem = pizzas.find((piza) => piza.id === item_id * 1) //idごとのピザを選ぶ
    
    //要はここには一種類のピザの配列しか出てこない
    const[items,setItems]=useState(getItem) //ある１つの選択したピザの配列
　　 const User = useSelector((state) => state.cartReducer.carts);
    const [user, setUser] = useState(User[0]) //userはapp.jsでCartdateをステートのしたやつ
    const Choice = useSelector((state) => state.choiceReducer.chosepiza);
    const [choice,setChoice] = useState(Choice)//choiceはapp.jsでchosepizaをステートしたやつ
    const [inpiza,setInpiza]=useState(choice) //choiceに入れるためのステート
    const [carts,setCarts]=useState(user.Items)
    const[kosuu,setKosuu]=useState(0) //ピザの個数を入れるだけの配列
    const[topkosuu,setTopkosuu]=useState([]) //トッピングを入れるだけの配列
    const[goukei,setGoukei]=useState(0)

    
console.log(User)  
console.log(user)
console.log(Choice)
console.log(choice)


let cartinPiza={
    id: 0,
    img:"",
    name:"",
    number: 0,
    size: '',
    topping: [],
    total: 0
}//入るやつ


  


    const changePrice = e =>{setInpiza({...inpiza, size:e.target.value,id:items.id,img:items.img,name:items.name,}) 
                             }//サイズのラジオボタン押すとsizeにMかLがセットされる

    
　　 const toppCell = e => {
    if (topkosuu.includes(e.target.value)){
        const newTopkosuu = topkosuu.filter(item => item!==e.target.value)
        setTopkosuu(newTopkosuu);
       
        

        setInpiza({...inpiza,topping:newTopkosuu,})
        
        
        
        
        
        
        
    }else{
        const newTopkosuu = [...topkosuu, e.target.value]
        setTopkosuu(newTopkosuu)
        
        

        setInpiza({...inpiza,topping:newTopkosuu})
        
        
        
        
        
    }
          
    
}          //サイズごとのトッピングが出てきてチェック入れるとvalue(名前？)が配列に入る    

　　 const karani =()=>{
    console.log("空になった")
    topkosuu.length=0
    
    setInpiza({...inpiza,topping:[]})
}   //サイズを変えるたびにトッピングが入るカートの配列を空にする


    const pizasizebutton = <li>Mサイズ<input type="radio" name="size" value="M"
                           onChange={changePrice} onClick={karani}></input>
                           Lサイズ<input type="radio" name="size"value="L"
                           onChange={changePrice} onClick={karani} ></input></li> //サイズボタン
　　 
    const nedan = <span>{inpiza.size === "M" && <span>{items.Mprice}円</span>}
                  {inpiza.size === "L" && <span>{items.Lprice}円</span>}</span> //サイズごとの値段
    
   
              

    const topplist = topps.map((topp,index) =>{
    return<ul  key={index}><div>◯{topp.name}
           {inpiza.size === "M" && <p>Msize Topping{topp.Mprice}円<input type="checkbox" value={topp.name}
           id={topp.name}
           onChange={toppCell} 
           
          
            
            
            ></input></p>}
            {inpiza.size === "L" && <p>Lsize Topping{topp.Lprice}円<input type="checkbox" value={topp.id}
           id={topp.name}
            onChange={toppCell}
            
            
           
            ></input></p>}</div></ul>
           })  //トッピングの数だけ表示するチェックボックス。ピザがLだったらL値段のトッピング。MだったらMを表示　
           　　//チェック入れるとtoppCellが発火する


    // useEffect(()=>{
        
    //     console.log(goukei)
    // },[goukei]);

   
    const TotalPrice =()=>{
       
        if(inpiza.size ==='M'){
           
            return Math.round((items.Mprice *kosuu +topkosuu.length *200)*1.1);
        　　　
            
            
        }else if(inpiza.size ==='L'){
            
            return Math.round((items.Lprice *kosuu +topkosuu.length *300)*1.1);
           

        
        }
        
        
        
    }  //合計金額計算して消費税もかけちゃう
    console.log(TotalPrice())
    console.log(goukei)

   

    const changeKosuu = e =>{const newKosuu=(e.target.value)
                             setKosuu(newKosuu)
                             
                             
                            //  const newTotal = TotalPrice()
                            
                            
                             setInpiza({...inpiza,number:newKosuu})
                            
                            } //サイズのラジオボタン押すとsizeにMかLがセットされる


   


    
    const cartIn =(e)=>{
        const newTotal = TotalPrice()
        setInpiza({...inpiza,total:newTotal})
        cartinPiza={
            id: items.id,
            img:items.img,
            name:items.name,
            number: kosuu,
            size: inpiza.size,
            topping: topkosuu,
            total: TotalPrice()
        }
        
        // 　 setUser({...user, Items: choice })
        //   chosepiza.push(choice)
        User[0].Items.push(cartinPiza)
        e.preventDefault()
    
        }
        
       
    


   
    return(
        <React.Fragment>
            
    <h1>商品詳細画面</h1>
    

    <p><img src={`${process.env.PUBLIC_URL}/pizza/${items.img}`}></img></p>
    <form><ul> <li>{items.name}</li>
    <li>{items.detail}</li>
    個数：<select defaultValue={'DEFAULT'} onChange={changeKosuu} >
    <option value="DEFAULT" disabled></option>
     <option  value="1" >1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
    </select>　　※５個以上の場合は直接お電話にてご連絡ください
    
    {pizasizebutton}
    <div>{nedan}</div>
    
    </ul>
    <h3>トッピング</h3> 
   
    
        <div>{topplist}</div>
        <div>
            選択中の商品
    <div>ピザ ///{items.name}</div>
     <div>サイズ ///{choice.size}</div>
    <div>ピザの値段 ///{nedan}</div>
    <div>選択したトッピング ///{topkosuu}</div>
        </div>
    <h4>合計金額：{TotalPrice()}</h4>
    <Link to={`/cart`}><button onClick={cartIn} >詳細</button></Link>
    </form>
    
        </React.Fragment>
    )
   
}


const mapDispatchToProps = (dispatch) => {
    return {
        tourokuAction: (naiyou) => dispatch(tourokuAction(naiyou))
    }
}

export default connect(null, mapDispatchToProps)(Detail)


