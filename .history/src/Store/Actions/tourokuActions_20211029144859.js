export const Touroku = (naiyou) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'TOUROKU', naiyou})
    }
};