import { useEffect, useState } from "react";
import { setTokenSourceMapRange } from "typescript";
import { useApi } from "../hooks/useApi";
import { User } from "../types/User";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authorization');
            if (storageData) {
                const data = await api.validateToken(storageData);
                if (data.user) {
                    setUser(data.user);
                }
            }
        }
        validateToken();
    }, [api]);

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data.user) {
            setUser(data.user);
            setToken(data.token);

            return true;            
        } 
        return false;
    }

    const signout = async () => {
        setUser(null);
        setToken('');
        await api.logout();
    }

    const setToken = (token: string) => {
        localStorage.setItem('authorization', token);
    };

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            { children }
        </AuthContext.Provider>
    );
}