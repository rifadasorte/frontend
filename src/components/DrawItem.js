import React, { useState } from 'react'
import { ContainerDrawItem, Detail, GroupDetail, Image } from '../styles/drawlist'
import NumberList from '../containers/NumberList'

const DrawItem = ({data}) => {
    const [toggle, setToggle] = useState(false)

    return (
        <>
        <ContainerDrawItem onClick={() => setToggle(!toggle)}>
            <Image src='https://th.bing.com/th/id/AMMS_00c3d77dcd8ae03c7908a5fb1d6a76b9?pid=ImgDet&rs=1' />
            <GroupDetail>
                <Detail>Prêmio: <br/> {data.premio.nome}</Detail>
                <Detail>Valor do prêmio: <br/> R${data.premio.valor},00</Detail>
                <Detail>Preço da rifa: <br/> R${data.preco_da_rifa},00</Detail>
                <Detail>Data do sorteio: <br/> {data.data_do_sorteio}</Detail>
            </GroupDetail>
        </ContainerDrawItem>
        {toggle && 
            <NumberList id={data.id} />
        }
        </>
    )
}

export default DrawItem
