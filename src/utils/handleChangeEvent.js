export const changeHandler = (ev, dispatch) => {
    if (ev.target.name !== 'gender') {
        dispatch({ type: 'SET_FIELD', field: ev.target.name, value: ev.target.value });
    } else {
        dispatch({ type: 'SET_RADIO_BUTTON', field: ev.target.name, value: ev.target.value });
    }
};