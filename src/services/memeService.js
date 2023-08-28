import requester from "./requester";

const localUrl = 'http://localhost:3030/data';

export const getAll = () => requester.get(`${localUrl}/memes?sortBy=_createdOn%20desc`);
export const getOne = (memeId) => requester.get(`${localUrl}/memes/${memeId}`);