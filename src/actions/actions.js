export const SETUSER = 'setUser'
export const DELETEUSER = 'deleteUser'
export const SETITEM = 'setItem'
export const GETITEM = 'getItem'
export const SETTOPPING = 'setTopping'
export const GETCARTITEM = 'getCartItem'
export const DELETECARTITEM = 'deleteCartItem'
export const CARTITEMDELETE = 'cartItemDelete'
export const ORDERDITEM = 'orderdItem'
export const SETCARTITEM = 'setCartItem'
export const DELETETOPPING = 'deleteTopping'

export const setUser = (user) => ({
    type: SETUSER,
    user
})

export const deleteUser = () => ({
    type: DELETEUSER,
})

export const setItem = (data) => ({
    type: SETITEM,
    piza: data.piza,
    topp: data.topp
})
// export const kuria =()=>({
//     type:KURIA,
// //    text:text
//     // pizza: data,

export const getItem = (id) => ({
    type: GETITEM,
    index: id,
})

export const cartItemDelete = (data) => ({
    type: CARTITEMDELETE,
    data
})
export const setTopping = (data) => ({
    type: SETTOPPING,
    topp: data.topp
})

export const getCartItem = ({ id, data }) => ({
    type: GETCARTITEM,
    id,
    cartdata: data
})

export const deleteCartItem = () => ({
    type: DELETECARTITEM,
})


export const orderdItem = (data) => ({
    type: ORDERDITEM,
    data
})

export const setCartItem = (data) => ({
    type: SETCARTITEM,
    data
})

export const deleteTopping = (data) => ({
    type:DELETETOPPING,
    data
})