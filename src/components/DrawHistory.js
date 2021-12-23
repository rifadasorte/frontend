import React from 'react'
import { ContainerDrawHistory, ContainerImageHistory, DetailHistory, GroupDetailHistory, ImageHistory } from '../styles/drawlist'

const DrawHistory = ({data}) => {
    return (
        <ContainerDrawHistory>
            <ContainerImageHistory>
                <ImageHistory src={data.premio.imagem} />
            </ContainerImageHistory>
            <GroupDetailHistory>
                <DetailHistory>Prêmio: {data.premio.nome}</DetailHistory>
                <DetailHistory>Valor do prêmio: R$ {data.premio.valor},00</DetailHistory>
                <DetailHistory>Preço: R$ {data.preco_da_rifa},00</DetailHistory>
                <DetailHistory>Data do sorteio: {data.data_do_sorteio}</DetailHistory>
                <DetailHistory>Estado: {data.status}</DetailHistory>
            </GroupDetailHistory>
        </ContainerDrawHistory>
    )
}

export default DrawHistory
