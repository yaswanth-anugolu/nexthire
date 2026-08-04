import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const access = localStorage.getItem("access");

        const refresh = localStorage.getItem("refresh");

        const storedUser = localStorage.getItem("user");

        if (
            access &&
            refresh &&
            storedUser
        ) {

            setUser(
                JSON.parse(storedUser)
            );

        }

        setLoading(false);

    }, []);

    const login = (
        access,
        refresh,
        userData,
    ) => {

        localStorage.setItem(
            "access",
            access,
        );

        localStorage.setItem(
            "refresh",
            refresh,
        );

        localStorage.setItem(
            "user",
            JSON.stringify(
                userData
            ),
        );

        setUser(userData);

    };

    const logout = () => {

        localStorage.removeItem(
            "access",
        );

        localStorage.removeItem(
            "refresh",
        );

        localStorage.removeItem(
            "user",
        );

        setUser(null);

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                loading,
                isAuthenticated:
                    !!user,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () =>
    useContext(AuthContext);