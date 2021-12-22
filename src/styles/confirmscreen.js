import styled from "styled-components/macro";

export const ContainerConfirmScreen = styled.div`
    display: flex;
    width: 400px;
    max-width: 100%;
    max-height: 180px;
    position: fixed;
    border: 1px solid #ccc;
    bottom: 5px;
    border-radius: 10px;
    background: white;
    left: calc(50% - 200px); 
    flex-direction: column;
    @media screen and (max-width: 400px){
        width: 100%;
        border-radius: 0;
        left: 0;
    }
`

export const Title = styled.h1`
    font-size: 1rem;
    font-weidht: 600;
    text-align: center;
    align-self: center;
`

export const Inner = styled.div`
    display: flex;
    flex: 1;
    overflow-y: ${props => props.length > 20 ? 'scroll' : 'hidden'};
`
export const ContainerSelectedNumbers = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    align-content: flex-start;
    flex: 1;
`

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Button = styled.div`
    height: 30px;
    width: 80px;
    margin: 2px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    background: green;
    border: 2px solid #000;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`

export const ContainerNumber = styled.div`
    display: flex;
    padding: 2px;
    width: 50px;
    height: 30px;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    color: white;
    background: darkblue;
    border-radius: 3px;
    margin: 2px;
`