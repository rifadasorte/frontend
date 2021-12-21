import React from 'react'
import Header from './Header'
import '../styles/global.css'
import { Container } from '../styles/global'

const Layout = ({children}) => {
    return (
        <Container>
            <Header /> 
            {children}
        </Container>
    )
}

export default Layout
