const requester = {
    get: async (url, headers = {}) => {
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    ...headers
                }
            });

            if (res.ok) {
                if (res.url.includes('/logout')) {
                    return {};
                }
                return res.json();
            } else {
                throw new Error(`Reqeust failed: Status code: ${res.status}`);
            }
        } catch (err) {
            return err;
        }
    },

    post: async (url, headers = {}, data) => {
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                return res.json();
            } else {
                throw new Error(`Reqeust failed: Status code: ${res.status}`);
            }
        } catch (err) {
            return err;
        }
    }
};

export default requester;