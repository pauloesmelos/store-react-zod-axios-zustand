import axios from "axios";

const auth = import.meta.env.VITE_API_URL_STORE as string;

export async function login(username: string, password: string): Promise<any> {
    const response = await axios.post(`${auth}/auth/login`, {
        username,
        password
    });
    return response.data;
}