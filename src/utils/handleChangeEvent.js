export const changeHandler = (ev, dispatch) => {
    dispatch({ type: 'SET_FIELD', field: ev.target.name, value: ev.target.value });
};