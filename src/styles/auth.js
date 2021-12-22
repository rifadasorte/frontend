import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    padding: 15px;
    width: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    position: fixed;
    left: calc(50% - 200px);
    top: 50px;
    @media screen and (max-width: 450px){
        width: 100%; 
        border-radius: 0;
        left: 0;
    }
`

export const Label = styled.label`
    font-wight: 600;
    margin-right: 3px; 
    min-width: 20%;
    text-align: right;

`

export const GroupInput = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const SecondaryButton = styled.div`
    font-weight: 600;
    color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;    
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 1.1rem;
`

export const Input = styled.input`
    padding: 5px;
    flex: 1;
`

export const Button = styled.div`
    width: 50%;
    height: 30px;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
`