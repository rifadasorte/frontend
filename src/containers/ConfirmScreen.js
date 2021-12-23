import React, { useContext } from 'react'
import { Button, 
    ContainerButtons, 
    ContainerConfirmScreen, 
    ContainerNumber, 
    ContainerSelectedNumbers, 
    Inner, 
    Title } from '../styles/confirmscreen'
import AuthContext from '../context/AuthContext'
import NumbersContext from '../context/NumbersContext'
import services from '../api/services'

const ConfirmScreen = ({data, update}) => {
    const { logged, access_token, changePageAuth, logout } = useContext(AuthContext)
    const { clear } = useContext(NumbersContext)

    const handleSubmit = async () => {
        if(logged){
            const response = await services.setRequest(access_token, data)
            const erro = Object.values(response)
            if(erro.length > 0){
                alert(erro)
                logout()
            }else{
                alert('Seus número foram reservados. Você receberá o link de pagamento.')
                clear()
                update()
            }
        }else{
            alert('Você precisa estar logado!')
            changePageAuth()
        }
    }
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
                    <Button onClick={handleSubmit}>Confirmar</Button>
                </ContainerButtons>
            </Inner>
        </ContainerConfirmScreen>
    )
}

export default ConfirmScreen
