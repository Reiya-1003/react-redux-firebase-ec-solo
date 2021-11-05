export const SETPIZA = 'setItem'


export const setItem = (data) => ({
    type: SETPIZA,
    piza: data.piza,
    top: data.top
})