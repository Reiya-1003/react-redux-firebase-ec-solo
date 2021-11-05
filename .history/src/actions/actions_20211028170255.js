export const SETITEM = 'setItem'

export const setItem = (data) => ({
    type: SETITEM,
    pizza: data.piza,
    topping: data.topp
})