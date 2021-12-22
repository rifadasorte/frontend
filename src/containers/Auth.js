import React, { useState, useContext } from 'react'
import { Container, GroupInput, Input, Label, SecondaryButton } from '../styles/auth'
import { Button, Title } from '../styles/confirmscreen'
import validators from '../utils/validators'
import services from '../api/services'
import AuthContext from '../context/AuthContext'

const Auth = () => {
    const [loginpage, setLoginPage] = useState(true);
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const [register, setRegister] = useState({
        username: '',
        password: '',
        password2: '',
        email: '',
        phone: ''
    })
    const { login, changePageAuth } = useContext(AuthContext)

    const changeRegister = (e) => {
        const name = e.target.name
        const value = e.target.value
        setRegister({...register, [name]:value})
    }

    const changeLogin = (e) => {
        const name = e.target.name
        const value = e.target.value
        setLoginData({...loginData, [name]:value})
    }

    const submitLogin = async () => {
        console.log('passou')
        if(validators.thereAreNoNull(loginData)){
            const status = await login(loginData.username, loginData.password)
            if(status === 200){
                changePageAuth()
            }else{
                alert('Algo deu errado com seu login')
            }
        }else{
            alert('Preencha todos campos')
        }
    }

    const submitRegister = async () => {
        const passValid = validators.passwordValidate(register.password, register.password2)
        const phoneValid =  validators.phoneValidate(register.phone)
        const thereAreNoNull = validators.thereAreNoNull(register)
        if(thereAreNoNull){
            if(passValid){
                if(phoneValid){
                    const status = await services.register(register)
                    if(status === 200){
                        setLoginPage(true)
                    }else{
                        alert('Algo deu errado com seu cadastramento!')
                    }
                }else{
                    alert('utilize um celular válido DDD + 9 dígitos')
                }
            }else{
                alert('As senhas devem coincidir')
            }
        }else{
            alert('Você deve preenche todos os campos')
        }
    }

    return (
        <Container>
            {loginpage ?
                <>
                <Title>Login</Title>
                <GroupInput>
                    <Label htmlFor='username'>Usuário:</Label>
                    <Input 
                        name='username'
                        value={loginData.username}
                        onChange={changeLogin}
                        type='text' />
                </GroupInput>
                <GroupInput>
                    <Label htmlFor='password'>Senha:</Label>
                    <Input 
                        name='password'
                        value={loginData.password}
                        onChange={changeLogin}
                        type='password' />
                </GroupInput>
                <GroupInput>
                    <Button onClick={submitLogin}>Entrar</Button>
                    <Button onClick={changePageAuth}>Fechar</Button>
                </GroupInput>
                <SecondaryButton  onClick={() => setLoginPage(!loginpage)}>Registrar</SecondaryButton>
            </> :
            <>
                <Title>Registrar</Title>
                <GroupInput>
                    <Label htmlFor='username'>Usuário:</Label>
                    <Input 
                        name='username'
                        type='text'
                        value={register.username}
                        onChange={changeRegister} />
                </GroupInput>
                <GroupInput>
                    <Label htmlFor='password'>Senha:</Label>
                    <Input 
                        name='password'
                        type='password'
                        value={register.password}
                        onChange={changeRegister} />
                </GroupInput>
                <GroupInput>
                    <Label htmlFor='password2'>Senha:</Label>
                    <Input 
                        name='password2' 
                        placeholder='Confirme a senha'
                        type='password'
                        value={register.password2}
                        onChange={changeRegister} />
                </GroupInput>
                <GroupInput>
                    <Label htmlFor='email'>E-mail:</Label>
                    <Input 
                        name='email'
                        value={register.email}
                        type='email'
                        onChange={changeRegister} />
                </GroupInput>
                <GroupInput>
                    <Label htmlFor='phone'>Tel.:</Label>
                    <Input 
                        name='phone'
                        type='number'
                        value={register.phone}
                        onChange={changeRegister} />
                </GroupInput>
                <GroupInput>
                    <Button onClick={submitRegister}>Registrar</Button>
                    <Button onClick={changePageAuth}>Fechar</Button>
                </GroupInput>
                <SecondaryButton onClick={() => setLoginPage(!loginpage)}>Login</SecondaryButton>
            </>
            }
        </Container>
    )
}

export default Auth
