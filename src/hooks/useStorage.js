import { useState } from "react"


export const useStorage = (key, values) => {
    const [state, setState] = useState(() => {
        const storageState = localStorage.getItem(key);

        if (storageState) {
            const persistedState = JSON.parse(storageState);
            return persistedState;
        }

        return values;
    });

    const setStorageData = (newValues) => {
        localStorage.setItem('session', JSON.stringify(newValues));
        setState(newValues);
    }

    return [
        state,
        setStorageData
    ];
};