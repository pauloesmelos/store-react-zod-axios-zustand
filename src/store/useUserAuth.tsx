import type { User } from "@/@types/User";
import { create } from "zustand";

interface IUserAuth {
    userAuth: User;
    setUserAuth: (data: User) => void
}

const initialState = {
    userAuth: {
        address: {
            geolocation: {
                lat: "",
                long: ""
            },
            city: "",
            street: "",
            number: null,
            zipcode: "",
        },
        id: null,
        email: "",
        username: "",
        password: "",
        name: {
            firstname: "",
            lastname: ""
        },
        phone: "",
        __v: null
    }
}

export const useUserAuth = create<IUserAuth>((set) => ({
    ...initialState,
    setUserAuth: (data: User) => {
        set({ userAuth: {...data} })
    }
}));