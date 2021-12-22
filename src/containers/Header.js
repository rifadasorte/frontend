import React, { useState, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { ContainerHeader, Logo, Link, ContainerInner } from '../styles/header'
import Auth from './Auth'
const Header = () => {
    const { logout, changePageAuth, access_token, pageauth, logged } = useContext(AuthContext)

    return (
        <ContainerHeader>
            {pageauth && <Auth />}
            <ContainerInner>
                <Logo><p>Rifa da Sorte</p></Logo>
                {!logged ? 
                    <Link onClick={changePageAuth}>Entrar</Link> :
                    <Link onClick={logout}>Sair</Link>
                }
            </ContainerInner>
        </ContainerHeader>
    )
}

export default Header
