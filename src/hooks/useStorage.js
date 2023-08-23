import { useState } from "react"


export const useStorage = (key, values) => {
    const [state, setState] = useState(() => {
        const storageState = localStorage.getItem(key);

        if (storageState) {
            const persistedState = JSON.parse(storageState);
            setState(persistedState);
        }

        return values;
    });

    const setStorageData = (newValues) => {
        localStorage.setItem('session', newValues);
    }

    return [
        state,
        setStorageData
    ];
};