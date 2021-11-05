import { GETCARTITEM, DELETECARTITEM, CARTITEMDELETE, SETCARTITEM, } from '../actions'

const initialState = {
    cartitem: [],
}

const getcartitem = (state = initialState, action) => {
    switch (action.type) {
        case GETCARTITEM:
            action.cartdata.id = action.id
            return { cartitem: action.cartdata }
        case DELETECARTITEM:
            return { cartitem: [] }
        case CARTITEMDELETE:
            return { cartitem: action.data }
        // case ORDERDITEM:
        //     return { orderditem: action.data }
        case SETCARTITEM:
            return { cartitem: action.data }
        default:
            return state
    }
}

export default getcartitem