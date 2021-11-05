import userEvent from "@testing-library/user-event";
import { createStore, combineReducers } from "redux";
import { chosepiza } from "../cart-data";
import { auth, } from '../config/firebase';
import firebase from 'firebase/compat/app';

const db = firebase.firestore();
// collection 'recipes' を参照


const myDocRef = db.ref(`Items/Pizas/`);
let mydata;
myDocRef.get().then((doc) => {
  if (doc.exists) {
    // document からデータを取得して値を変数 mydata に格納する例。
    mydata = doc.data();
  } else {
    // ドキュメントがなかった場合
  }
}).catch((error) => {
  // なんらかの理由でエラーになった場合を想定。ここに処理を書いておく
});





const sampleColRef = db.collection('Items');

// 配列を定義しておく
let myArray = [];
// 取得したdataの格納用
let dataValue;
sampleColRef.onSnapshot((snapshot) => {
  
  snapshot.forEach((doc) => {
    dataValue = doc.data();
    myArray.push(dataValue);

  });
  
  
  
});
console.log(myArray)

const pizzaReducer = (
    state = {
      pizzaDate:[myArray]
      
        // {id:1, name:'じゃがバターベーコン', detail:'ホクホクのポテトと旨味が凝縮されたベーコンを特製マヨソースで味わって頂く商品です。バター風味豊かなキューブチーズが食材の味を一層引き立てます。',Mprice:1490, Lprice:2570, img:'1.jpg'},
        // {id:2, name:'アスパラ・ミート', detail:'グリーンアスパラと相性の良いベーコンにいろどりのフレッシュトマトをトッピングし特製マヨソースでまとめた商品です', Mprice:1490, Lprice:2570, img:'2.jpg'},
        // {id:3, name:'熟成ベーコンとマッシュルーム', detail:'マッシュルームと熟成ベーコンにブラックペッパーをトッピングしたシンプルなピザ！', Mprice:1490, Lprice:2570, img:'3.jpg'},
        // {id:4, name:'カレーじゃがバター', detail:'マイルドな味付けのカレーに大きくカットしzたポテトをのせた、バターとチーズの風味が食欲をそそるお子様でも楽しめる商品です', Mprice:1900, Lprice:2980, img:'4.jpg'},
        // {id:5, name:'明太バターチーズ', detail:'大きくカットしたポテトにコーンとベーコンをトッピングして、明太クリームソース、バター、チーズを合わせた、家族で楽しめるピザです', Mprice:1900, Lprice:2980, img:'5.jpg'},
        // {id:6, name:'濃厚Gorgeous4', detail:'「厚切イベリコ」、「贅沢フォルマッジ」「ラクラクピザ・シュプリーム」「アボカドシュリンプ」4種類の濃厚な味わいが一つで楽しめるピザです', Mprice:2700, Lprice:4050, img:'6.jpg'},
        // {id:7, name:'ピザベスト4', detail:'ラクラクピザの人気ピザ"ベスト4"（「アイダホ風ほっくりポテマヨ」、「フレッシュモッツァレラのマルゲリータ」、「特うまプルコギ」', Mprice:2570, Lprice:3780, img:'7.jpg'},
        // {id:8, name:'Charity4', detail:'「デラックス」、「ミート・シュプリーム」、「ツナマイルド」、「ガーリック・トマト」の組み合わせ。「チャリティー4」1枚のご注文につき、世界の飢餓救済に',Mprice:2160, Lprice:3380, img:'8.jpg'},
        // {id:9, name:'特うまプルコギ', detail:'ミートナンバー１！甘辛ダレの焼肉がクセになる！食べると思わず元気が出るラクラクピザの自信作', Mprice:2700, Lprice:4050, img:'9.jpg'},
        // {id:10, name:'フレッシュモッツァレラ', detail:'ピザの王道！トマトとフレッシュモッツァレラが絶妙です', Mprice:2160, Lprice:3380, img:'10.jpg'},
        // {id:11, name:'Specialミート4', detail:'お肉好きの方必見！ラクラクピザ人気のミートシリーズが1枚のピザになって新登場！「厚切イベリコ」「ワイルド・ガーリック」「特うまプルコギ」', Mprice:2700, Lprice:4050, img:'11.jpg'},
        // {id:12, name:'バラエティー４', detail:'「めちゃマヨ・ミート」「ガーリック・トマト」「えびマヨコーン」、「フレッシュモッツァレラのマルゲリータ」が一つになった4種のピザ', Mprice:2160, Lprice:3380, img:'12.jpg'},
        // {id:13, name:'めちゃマヨミート', detail:'あらびきスライスソーセージとイタリアンソーセージの2種類のソーセージを、トマトソースと特製マヨソースの2種類のソースで召し上がって頂く商品です', Mprice:2160, Lprice:3380, img:'13.jpg'},
        // {id:14, name:'とろけるビーフシチュー', detail:'デミグラスソースでじっくり煮込んだ旨味たっぷりのビーフシチューのピザ', Mprice:2980, Lprice:4460, img:'14.jpg'},
        // {id:15, name:'シーフードミックス', detail:'シーフードナンバー１！魚介の旨みたっぷり！人気の海の幸と、野菜のリッチなおいしさ', Mprice:2700, Lprice:4050, img:'15.jpg'},
        // {id:16, name:'Family４', detail:'ラクラクピザ自慢「特うまプルコギ」定番「デラックス」お子様に人気「ツナマイルド」女性に好評「チーズ＆チーズ」の４種のおいしさを贅沢に組み合わせました', Mprice:2440, Lprice:3650, img:'16.jpg'},
        // {id:17, name:'アイダホ風ほっくりポテマヨ', detail:'みんな大好き！ポテトと特製マヨソースの組み合わせ！定番のおいしさを味わえます', Mprice:2440, Lprice:3650, img:'17.jpg'},
        // {id:18, name:'贅沢フォルマッジ', detail:'濃厚なカマンベールソース＆カマンベールと香りとコクのパルメザンチーズをトッピング', Mprice:2700, Lprice:4050, img:'18.jpg'}
      
           
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