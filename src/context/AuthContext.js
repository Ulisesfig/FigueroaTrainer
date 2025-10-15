import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        try {
            const raw = localStorage.getItem('auth:user');
            if (raw)
                setUser(JSON.parse(raw));
        }
        catch { }
    }, []);
    const login = (u) => {
        setUser(u);
        try {
            localStorage.setItem('auth:user', JSON.stringify(u));
        }
        catch { }
    };
    const logout = () => {
        setUser(null);
        try {
            localStorage.removeItem('auth:user');
        }
        catch { }
    };
    const value = useMemo(() => ({ user, isAuthenticated: !!user, login, logout }), [user]);
    return _jsx(AuthContext.Provider, { value: value, children: children });
};
export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx)
        throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};
