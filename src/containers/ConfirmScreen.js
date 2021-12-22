import React from 'react'
import { Button, ContainerButtons, ContainerConfirmScreen, ContainerNumber, ContainerSelectedNumbers, Inner, Title } from '../styles/confirmscreen'

const ConfirmScreen = ({data}) => {
    return (
        <ContainerConfirmScreen>
            <Title>Números selecionados</Title>
            <Inner length={data.length}>
                <ContainerSelectedNumbers>
                    {data.map(number =>
                        <ContainerNumber key={number.codigo}>{number.codigo}</ContainerNumber>
                    )}
                </ContainerSelectedNumbers>
                <ContainerButtons>
                    <Button>Confirmar</Button>
                </ContainerButtons>
            </Inner>
        </ContainerConfirmScreen>
    )
}

export default ConfirmScreen
