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