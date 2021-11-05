import { SETITEM } from "../actions/actions"

const initialState = []

const setitem = (state = initialState, action) => {
    switch(action.type){
        case SETITEM:
            return action.piza
        default:
            return state
    }
}

export default setitem


//Fbのピザの配列をheader.jsで読み込んで
//アクションズのsetitemの処理をする
//結果はiniialStateのから配列に
//FBのピザデータが入ってくる