import axios from "axios";

const baseURL = "https://6a6616c4189fe5869eb65210.mockapi.io/api/";

const api = axios.create(
    {
        baseURL: baseURL
    }
);

export default api;