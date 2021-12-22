import React, { createContext, useState } from 'react'

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

    const context = {
        num: numbers,
        add: addItem,
        remove: removeItem,
        clear: clearItems,
    }

    return (
        <NumberContext.Provider value={context}>
            {children}
        </NumberContext.Provider>
    )
}

export default NumberContext
