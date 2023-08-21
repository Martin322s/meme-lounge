import requester from "./requester";

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => requester.get(`${baseUrl}/memes?sortBy=_createdOn%20desc`);