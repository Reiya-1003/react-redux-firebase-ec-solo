export const SETPIZA = 'setPiza'


export const setPiza = (data) => ({
    type: SETPIZA,
    piza: data.piza,
    top: data.top
})