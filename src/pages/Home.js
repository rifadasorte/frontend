import React from 'react'
import DrawList from '../containers/DrawList'
import Layout from '../containers/Layout'
import { AuthProvider } from '../context/AuthContext'
import { NumberProvider } from '../context/NumbersContext'

const Home = () => {
    return (
        <AuthProvider>
            <Layout>      
                <NumberProvider>
                    <DrawList />
                </NumberProvider>            
            </Layout>
        </AuthProvider>
    )
}

export default Home
