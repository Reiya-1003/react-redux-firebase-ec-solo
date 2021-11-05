const initState = {}
const AuthReducer = (state = initState, action) => {
    return state
}

export default AuthReducer

//reducerはアプリがスタートした時に初めて実行されるが，
//最初はstateがアクティブでないので初期値をデフォルト値として与える必要がある．関数内はというと今はまだstateをreturnするだけにしておく