export const initialState = {
    email: '',
    password: ''
};

export function reducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD': return {
            ...state,
            [action.field]: action.value
        }
        default: console.log(`Invalid action type: ${action.type}`);
    }
}