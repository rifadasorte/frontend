import React from 'react'
import { ContainerDrawHistory, ContainerImageHistory, DetailHistory, GroupDetailHistory, ImageHistory } from '../styles/drawlist'

const DrawHistory = ({data}) => {
    return (
        <ContainerDrawHistory>
            <ContainerImageHistory>
                <ImageHistory src='https://th.bing.com/th/id/AMMS_00c3d77dcd8ae03c7908a5fb1d6a76b9?pid=ImgDet&rs=1' />
            </ContainerImageHistory>
            <GroupDetailHistory>
                <DetailHistory>Prêmio: {data.nome}</DetailHistory>
                <DetailHistory>Preço: {data.preco}</DetailHistory>
                <DetailHistory>Data do sorteio: {data.data_do_sorteio}</DetailHistory>
                <DetailHistory>Estado: {data.status}</DetailHistory>
            </GroupDetailHistory>
        </ContainerDrawHistory>
    )
}

export default DrawHistory
