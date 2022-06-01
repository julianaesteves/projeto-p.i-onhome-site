import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        const storagedUser = sessionStorage.getItem('@App:user');

        if (storagedUser && storagedUser !== 'undefined') {
            setUserInfo(JSON.parse(storagedUser));
        }
    }, []);


    async function Login(email, senha) {
        const results = await fetch('http://localhost:8080/login', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                email,
                senha
            },
        })

        const userData = await results.json()
        setUserInfo(userData[0])

        if (userData.message) {
            console.log("Credenciais inválidas")
            // Colocar modal de email e/ou senha inválida
        } else {
            sessionStorage.setItem('@App:user', JSON.stringify(userInfo));
        }
    }

    function Logout() {
        setUserInfo(null);
      }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: Boolean(userInfo),
                userInfo,
                Login,
                Logout
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}


