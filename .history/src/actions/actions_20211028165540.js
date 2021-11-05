export const SETITEM = 'setItem'

export const setItem = (data) => ({
    type: SETITEM,
    pizza: data.pizza,
    topping: data.topping
})