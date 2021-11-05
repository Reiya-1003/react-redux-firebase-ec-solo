import { ORDERDITEM } from '../actions'

const initialState = {
    orderditem: []
}

const getOrderdList = (state = initialState, action) => {
    switch (action.type) {
        case ORDERDITEM:
            return { orderditem: action.data }
        default:
            return state
    }
}

export default getOrderdList