import React, {createContext, useState, useEffect} from 'react'
import services from '../api/services'
const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    const [access, setAccess] = useState(() => 
    localStorage.getItem('access_betshare') ? 
    localStorage.getItem('access_betshare') : 
    null)
    const [refresh, setRefresh] = useState(() => 
    localStorage.getItem('refresh_betshare') ? 
    localStorage.getItem('refresh_betshare') : 
    null)
    const [pageauth, setPageAuth] = useState(false)
    const [logged, setLogged] = useState(false)

    const Login = async (username, password) => {
        const status = await services.Login(username, password)
        if(status === 200){
            setAccess(() => localStorage.getItem('access_betshare'))
            setRefresh(() => localStorage.getItem('refresh_betshare'))
            setLogged(true)
        }
        return status
    }
    const Logout = () => {
        setAccess()
        setRefresh()
        setLogged(false)
        services.logout()
    }

    const updateToken = async () => {
        const status = await services.refreshToken()
        if(status === 200){
            setAccess(() => localStorage.getItem('access_betshare'))
            setRefresh(() => localStorage.getItem('refresh_betshare'))
        }
    }

    useEffect(() => {
        const time = 1000 * 60 * 4
        const interval = setInterval(() => updateToken(), time)   
        return () => clearInterval(interval)
    }, [])

    const changePageAuth = () => setPageAuth(!pageauth) 

    const context = {
        access_token: access,
        refresh_token: refresh,
        login: Login,
        logout: Logout,
        logged: logged,
        pageauth: pageauth,
        changePageAuth: changePageAuth
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}

