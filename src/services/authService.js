import requester from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const registerUser = (data) => requester.post(`${baseUrl}/register`, {}, data);
export const loginUser = (data) => requester.post(`${baseUrl}/login`, {}, data);
export const logoutUser = (token) =>
    requester.get(`${baseUrl}/logout`, { 'X-Authorization': token });