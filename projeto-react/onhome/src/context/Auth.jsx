import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState();
    const [isFirstAccess, setIsFirstAccess] = useState();

    useEffect(() => {
        const storagedUser = sessionStorage.getItem('@App:user');
        const storagedAccess = sessionStorage.getItem('@App:firstAccess');

        if (storagedUser && storagedAccess) {
            setUserInfo(JSON.parse(storagedUser));
            setIsFirstAccess(JSON.parse(storagedAccess));
        }

    }, []);

    async function Login(email, senha) {
        sessionStorage.clear()
        const results = await fetch('https://onhome-api-v1.herokuapp.com/login', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                email,
                senha
            },
        })

        const userData = await results.json()
        setUserInfo(userData.informacoesUsuario)

        if (userData.message) {
            console.log("Credenciais inválidas")
            // Colocar modal de email e/ou senha inválida
        } else {
            sessionStorage.setItem('@App:user', JSON.stringify(userData.informacoesUsuario))
            sessionStorage.setItem('@App:firstAccess', userData.primeiroAcesso)
        }
    }

    function Logout() {
        setUserInfo(null);
        sessionStorage.clear();
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: Boolean(userInfo),
                isFirstAccess,
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


