import { URL, get_numbers, get_draws, post_register, endpoint_get_token, endpoint_refresh_token, set_request } from "../constants/endpoints"

const services = {
    getDraws: async() => {
        const request = await fetch(URL+get_draws, {
            headers: {
                'Content-Type':'application/json'
            }
        }).then(response => {
            if(response.status === 200){
                return response.json()
            }else{
                return {}
            }
        })
        return request
    },
    getNumbers: async (pk) => {
        const request = await fetch(URL+get_numbers+`${pk}`,{
            headers: {
                'Content-Type':'application/json'
            }
        }).then(response => {
            if(response.status === 200){
                return response.json()
            }else{
                return {}
            }
        })
        return request
    },

    register: async (data) => {
        const request = await fetch(URL+post_register,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.status)
        return request
    },

    setToken: (access, refresh) => {
        localStorage.setItem('access_betshare', access)
        localStorage.setItem('refresh_betshare', refresh)
    },

    Login: async (username, password) => {
        const user = JSON.stringify({
            'username': username, 
            'password': password})

        const response = await fetch(URL+endpoint_get_token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: user
        }).then((response) => response)
    
        if(response.status === 200){
            const data = await response.json()
            services.setToken(data['access'], data['refresh'])
            return response.status
        }else{
            return response.status
        }
    },

    refreshToken: async () => {
        const token_refresh = localStorage.getItem('refresh_betshare') ?  
        JSON.stringify({
            'refresh': localStorage.getItem('refresh_betshare')
        }) :  null
        if(token_refresh){
            const response = await fetch(URL+endpoint_refresh_token, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: token_refresh
            }).then((response) => response)

            if(response.status === 200){
                const data = await response.json()
                services.setToken(data['access'], data['refresh'])
            }

            return response.status
        }
    },

    logout: async () => {
        localStorage.removeItem('access_betshare')
        localStorage.removeItem('refresh_betshare')
    },

    setRequest: async (access_token, data) => {
        const request = await fetch(URL+set_request, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Bearer ${access_token}`
            },
            body: JSON.stringify(data)
        }).then(response => {
            if(response.status === 200){
                return {}
            }else if(response.status === 401){
                services.logout()
                return {"error": "você precisa estar logado!"}
            }else{
                return response.json()
            }
        })
        return request
    }
}

export default services