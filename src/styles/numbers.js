import styled from "styled-components/macro";

export const ContainerNumber = styled.div`
    display: flex;
    padding: 2px;
    width: 50px;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    color: white;
    background: ${props => props.status === 'LIVRE' ? (props.selected ? 'darkblue' : 'green') : 
                            props.status === 'RESERVADO' ? 'gray' :
                            props.status === 'VENDIDO' ? 'red' : null};
    border-radius: 3px;
    margin: 2px;
    cursor: ${props => props.status === 'LIVRE' ? 'pointer' : 'initial'};
    &:hover{
        opacity: ${props => props.status === 'LIVRE' ? '0.7' : null};
    }
`

export const ContainerNumberList = styled.div`
    display: flex;
    margin-top: 5px;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin-bottom: 200px;
`