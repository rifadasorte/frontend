import React, { createContext, useState } from 'react'
import services from '../api/services'
const NumberContext = createContext()

export const NumberProvider = ({children}) => {
    const [numbers, setNumbers] = useState([])

    const addItem = (item) => {
        setNumbers([...numbers, item])
    }

    const removeItem = (item) => {
        setNumbers(numbers.filter(number => number.codigo !== item.codigo))
    }

    const clearItems = () => { setNumbers([])}
    
    const updateList = async (hook, id) => {
        const num = await services.getNumbers(id)
        hook(num)
    }

    const context = {
        num: numbers,
        add: addItem,
        remove: removeItem,
        update: updateList,
        clear: clearItems
    }

    return (
        <NumberContext.Provider value={context}>
            {children}
        </NumberContext.Provider>
    )
}

export default NumberContext
