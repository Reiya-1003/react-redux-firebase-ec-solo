import { SETITEM } from "../actions"

const initialState = []

const setitem = (state = initialState, action) => {
    switch(action.type){
        case SETITEM:
            return action.pizza
        default:
            return state
    }
}

export default setitem
