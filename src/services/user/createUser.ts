import axios from "axios";

const auth = import.meta.env.VITE_API_URL_STORE as string;

export async function createUser(email: string, username: string, password: string): Promise<any> {
    try {
        const response = await axios.post(`${auth}/users`, {
            username,
            email,
            password
        });
        return response;
    }   
    catch (error) {
        console.log(error);
    }
}