import React, { useState, useEffect, useContext } from 'react'
import { ContainerNumber } from '../styles/numbers'
import NumberContext from '../context/NumbersContext'

const NumberItem = ({data}) => {
    const [selected, setSelected] = useState(false)
    const { add, remove } = useContext(NumberContext)

    useEffect(() => {
        if(selected){
            add(data)
        }else{
            remove(data)
        }
    }, [selected])
    return (
        <ContainerNumber onClick={() => data.status === 'LIVRE' ? setSelected(!selected) : null} 
            selected={selected}
            status={data.status}>
            {data.codigo}
        </ContainerNumber>
    )
}

export default NumberItem
