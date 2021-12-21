import React from 'react'
import { ContainerDraw } from '../styles/drawlist'
import DrawItem from '../components/DrawItem'
import DrawHistory from '../components/DrawHistory'

const DrawList = () => {
    const draws = [
        {
            imagem: '../assets/images/f150.jpg',
            nome: 'Ford F150 2021',
            preco: 'R$ 500.000,00',
            status: 'aberto',
            data_do_sorteio: '12/05/2022'
        },{
            imagem: '../assets/images/silverado.jpg',
            nome: 'Chevrolet Silverado 2021',
            preco: 'R$ 500.000,00',
            status: 'fechado',
            data_do_sorteio: '12/05/2022'
        },{
            imagem: '../assets/images/tundra.jpg',
            nome: 'Toyota Tundra 2021',
            preco: 'R$ 500.000,00',
            status: 'fechado',
            data_do_sorteio: '12/05/2022'
        }
    ]
    return (
        <ContainerDraw>
            {draws.map(draw => draw.status === 'aberto' ?
                <DrawItem data={draw} /> :
                null
            )}
            {draws.map(draw => draw.status === 'fechado' ?
                <DrawHistory data={draw}/> :
                null
            )}
        </ContainerDraw>
    )
}

export default DrawList
