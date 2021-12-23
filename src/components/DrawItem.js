import React, { useState } from 'react'
import { ClickHere, ContainerDrawItem, Detail, GroupDetail, Image } from '../styles/drawlist'
import NumberList from '../containers/NumberList'


const DrawItem = ({data}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
        <ContainerDrawItem onClick={() => setToggle(!toggle)}>
            <Image src={data.premio.imagem} />
            <GroupDetail>
                <Detail>Prêmio: <br/> {data.premio.nome}</Detail>
                <Detail>Valor do prêmio: <br/> R${data.premio.valor},00</Detail>
                <Detail>Preço da rifa: <br/> R${data.preco_da_rifa},00</Detail>
                <Detail>Data do sorteio: <br/> {data.data_do_sorteio}</Detail>
            </GroupDetail>
            {data.status === 'ABERTO' 
            && !toggle 
            && <ClickHere>Clique aqui e escolha seus números!</ClickHere>}
        </ContainerDrawItem>
        {toggle && 
            <NumberList id={data.id} />
        }
        </>
    )
}

export default DrawItem
