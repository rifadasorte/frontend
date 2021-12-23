import React, { useState, useEffect } from 'react'
import { ContainerDraw } from '../styles/drawlist'
import DrawItem from '../components/DrawItem'
import DrawHistory from '../components/DrawHistory'
import services from '../api/services'
import ConfirmScreen from './ConfirmScreen'


const DrawList = () => {

    const [draws, setDraws] = useState([{}])
    
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
        </ContainerDraw>
    )
}

export default DrawList
