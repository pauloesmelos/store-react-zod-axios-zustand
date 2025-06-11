import type { Auth } from "@/@types/Auth";
import { create } from "zustand";

interface IAuth {
    user: Auth,
    setUser: (data: Auth) => void,
    clearUser: () => void
}

const initialState = {
    user: {
        username: "",
        password: "",
        token: ""
    }
}

export const useUser = create<IAuth>((set) => ({
    ...initialState,
    setUser: (data: Auth) => {
        set({ user: {...data} })
    },
    clearUser: () => {
        set({ ...initialState })
    }
}));