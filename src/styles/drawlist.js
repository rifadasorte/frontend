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
`
export const ContainerDrawItem = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`
export const  ContainerImage = styled.div`
    width: 100%;
    height: 400px;
    overflow-y: scroll;
`
export const Image = styled.img`
    width: 100%;
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
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    flex: 1
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
    overflow-y: scroll;
`
export const ImageHistory = styled.img`
    width: 100%;
    height: 100%;
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