export const initialState = {
    username: '',
    email: '',
    password: '',
    repeatPass: '',
    gender: 'male',
};

export function reducer(state, action) {
    switch(action.type) {
        case 'SET_FIELD': return {
            ...state,
            [action.field]: action.value
        }

        case 'SET_RADIO_BUTTON': return {
            ...state,
            [action.field]: action.value
        }
        default: console.log(`Invalid action type: ${action.type}`);
    }
}