import styled from "styled-components/macro";

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    font-family: sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    text-shadow: -1px 0 #32925F, 0 1px #32925F, 1px 0 #32925F, 0 -1px #32925F;
`
export const ContainerHeader = styled.div`
    display: absolute;
    position: fixed;
    width: 100vw;
    height: 50px;
    background: #06381b;
`

export const ContainerInner = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    max-width: 900px;
    height: 50px;
    background: #06381b;
    alignt-items: center;
    justify-content: space-between;
`

export const Link = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1rem;
    font-weight: 600;
`