import React from 'react'
import { ContainerDrawItem, ContainerImage, Detail, GroupDetail, Image } from '../styles/drawlist'

const DrawItem = ({data}) => {
    
    return (
        <ContainerDrawItem>
            <Image src='https://th.bing.com/th/id/AMMS_00c3d77dcd8ae03c7908a5fb1d6a76b9?pid=ImgDet&rs=1' />
            <GroupDetail>
                <Detail>Prêmio: <br/> {data.nome}</Detail>
                <Detail>Preço: <br/> {data.preco}</Detail>
                <Detail>Data do sorteio: <br/> {data.data_do_sorteio}</Detail>
            </GroupDetail>
        </ContainerDrawItem>
    )
}

export default DrawItem
