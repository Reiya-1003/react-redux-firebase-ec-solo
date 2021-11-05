
import {GETITEM} from "../actions"

const initialState={cartItems:['pizza','udon','ramen']}


const getItem = (state = initialState, action) => {
    switch(action.type){
        case GETITEM:
            const ii =state.cartItems.slice()
            // console.log(action.index);
            // console.log(ii);
            ii.splice(action.index,1)
            return {cartItems:ii}
        default:
            return state
    }
}

export default getItem