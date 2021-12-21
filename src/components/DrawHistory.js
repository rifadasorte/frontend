import React from 'react'
import { ContainerDrawHistory, ContainerImageHistory, Detail, GroupDetailHistory, ImageHistory } from '../styles/drawlist'

const DrawHistory = ({data}) => {
    return (
        <ContainerDrawHistory>
            <ContainerImageHistory>
                <ImageHistory src='https://th.bing.com/th/id/AMMS_00c3d77dcd8ae03c7908a5fb1d6a76b9?pid=ImgDet&rs=1' />
            </ContainerImageHistory>
            <GroupDetailHistory>
                <Detail>Prêmio: {data.nome}</Detail>
                <Detail>Preço: {data.preco}</Detail>
                <Detail>Data do sorteio: {data.data_do_sorteio}</Detail>
                <Detail>Estado: {data.status}</Detail>
            </GroupDetailHistory>
        </ContainerDrawHistory>
    )
}

export default DrawHistory
