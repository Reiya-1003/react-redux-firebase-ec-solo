import { SETUSER, DELETEUSER } from '../actions'

const initialState = {}

const loginuser = (state = initialState, action) => {
    switch(action.type){
        case SETUSER:
            return action.user
        case DELETEUSER:
            return {}
        default:
            return state
    }
}

export default loginuser