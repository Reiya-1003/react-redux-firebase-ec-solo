export const tourokuAction = (naiyou) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'TOUROKU', naiyou})
    }
};