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
