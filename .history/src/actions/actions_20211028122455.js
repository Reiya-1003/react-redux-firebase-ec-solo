export const SETITEM = 'setItem'


export const setItem = (data) => ({
    type: SETITEM,
    piza: data.piza,
    top: data.top
})