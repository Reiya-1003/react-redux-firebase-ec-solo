import userEvent from "@testing-library/user-event";
import { createStore, combineReducers } from "redux";
import { chosepiza } from "../cart-data";
import { auth, } from '../config/firebase';
import firebase from 'firebase/compat/app';

const db = firebase.firestore();
// collection 'recipes' を参照

let pizadb;
const dbpiza = db.collection('Items').doc("Pizas")
console.log(dbpiza)

dbpiza.get().then((doc)=>{
  if (doc.exists) {
    console.log( doc.data() );
     pizadb = doc.data()
     console.log(pizadb.piza)
  }
  else {
    console.log("404");
  }
})
.catch( (error) => {
    console.log(`データを取得できませんでした (${error})`);
});





const sampleColRef = db.collection('Items');

// 配列を定義しておく
let myArray = [];
// 取得したdataの格納用
let dataValue;
sampleColRef.onSnapshot((snapshot) => {
  
  snapshot.forEach((doc) => {
    dataValue = doc.data();
    myArray.push(
      {dataValue}
       
    );

  });
  console.log(myArray)
  
  console.log(dataValue)
});

const pizzaReducer = (
    state = {
        pizzaDate:[
       
       
      ]
           
    }
  ) => {
    return state;
  };   //ピザの商品データ


  const toppReducer = (
    state = {
        toppDate:[
       
            {id:1, name:'サラミ',Mprice:200, Lprice:300},
            {id:2, name:'追いチーズ', Mprice:200, Lprice:300},
            {id:3, name:'コーン', Mprice:200, Lprice:300,},
            {id:4, name:'オリーブ', Mprice:200, Lprice:300,},
            {id:5, name:'海鮮ミックス', Mprice:200, Lprice:300, },
            {id:6, name:'チキン', Mprice:200, Lprice:300, },
          
               ]
    }
  ) => {
    return state;
  };   //トッッピングの商品データ

  const choiceReducer = (
    state = {
        chosepiza:{id:0 ,img:"",name:"",number:0,size:"",topping:[],total:0}
    }
  ) => {
    return state;
  };   //選ぶ複数のピザの商品データ


  const cartReducer = (
    state = {
      carts:[{Items:[chosepiza],
        addnumber:"",
         address:"",
          email:"",
          id:null,
          name:"",
          orderdate:"",
          ordertime:"",
          status:"",
          tell:"" }]
        
      }
          
  ) => {
    return state

    
  };   //カートのデータ

  // const databaseReducer = (
  //   state =[cartReducer]
       
    
  // ) => {
  //   return state
  // };   //選ぶ複数のピザの商品データ

  const rootReducer = combineReducers({
   　pizzaReducer,toppReducer,choiceReducer,cartReducer,
  });

  const store = createStore(rootReducer);
  console.log(store.getState());


  //Hooksでできてるところはactionsにしなかった。てか必要ないと判断した
  export default store;
  

  //ECサイト機能関連を書いているところ