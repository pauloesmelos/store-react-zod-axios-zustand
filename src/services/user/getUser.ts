import axios from "axios";

const auth = import.meta.env.VITE_API_URL_STORE as string;

export async function getUser(id: number) {
    try {
        const response = await axios.get(`${auth}/users/${id}`);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}