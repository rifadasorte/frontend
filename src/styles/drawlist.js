import styled from "styled-components/macro";

export const ContainerDraw = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding-top: 60px;
    flex: 1;
    &:last-child{
        margin-bottom: 15px;
    }
`
export const ContainerDrawItem = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`
export const  ContainerImage = styled.div`
    width: 100%;
    max-height: 400px;
    overflow: hidden;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-height: 400px;
    object-fit: cover;
`

export const GroupDetail = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    background: #fff;
    border: 1px solid #ccc;
`

export const Detail = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    text-align: center;
    @media screen and (max-width: 400px){
        font-size: 0.8rem;
    }

`

export const ContainerDrawHistory = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    margin-top: 10px;
    border: 1px solid #ccc;
`
export const ContainerImageHistory = styled.div`
    height: 100%;
    width: 50%;
`
export const ImageHistory = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const GroupDetailHistory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 10px;
    background: #fff;
    flex: 1;
`

export const DetailHistory = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    @media screen and (max-width: 400px){
        font-size: 0.8rem;
    }

`