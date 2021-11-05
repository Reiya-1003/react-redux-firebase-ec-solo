import { SETTOPPING , DELETETOPPING} from "../actions/actions"

const initialState = []

const settopping = (state = initialState, action) => {
    switch(action.type){
        case SETTOPPING:
            return action.topping
        case  DELETETOPPING:
            return action.data
        default:
            return state
    }
}

export default settopping