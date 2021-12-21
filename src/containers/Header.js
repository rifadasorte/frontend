import React from 'react'
import { Container } from '../styles/global'
import { ContainerHeader, Logo, Link, ContainerInner } from '../styles/header'
const Header = () => {
    return (
        <ContainerHeader>
            <ContainerInner>
                <Logo><p>Rifa da Sorte</p></Logo>
                <Link>Sair</Link>
            </ContainerInner>
        </ContainerHeader>
    )
}

export default Header
