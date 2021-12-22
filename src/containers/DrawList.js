import React, { useState, useEffect, useContext } from 'react'
import { ContainerDraw } from '../styles/drawlist'
import DrawItem from '../components/DrawItem'
import DrawHistory from '../components/DrawHistory'
import services from '../api/services'
import ConfirmScreen from './ConfirmScreen'
import NumberContext from '../context/NumbersContext'

const DrawList = () => {

    const [draws, setDraws] = useState([{}])
    const { num } = useContext(NumberContext)
    useEffect(()=>{
        const getDraws = async () => {
            const request = await services.getDraws()
            setDraws(request)
        }
        getDraws()
    },[])
    
    return (
        <ContainerDraw>
            {draws.map(draw => draw.status === 'ABERTO' ?
                <DrawItem key={draw.id} data={draw} /> :
                null
            )}
            
            {draws.map(draw => draw.status === 'FECHADO' ?
                <DrawHistory key={draw.id} data={draw}/> :
                null
            )}
            {num.length > 0 && <ConfirmScreen data={num} />}
        </ContainerDraw>
    )
}

export default DrawList
