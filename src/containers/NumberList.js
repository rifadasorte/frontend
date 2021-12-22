import React , {useState, useEffect} from 'react'
import NumberItem from '../components/NumberItem'
import { ContainerNumberList } from '../styles/numbers'
import services from '../api/services'

const NumberList = ({id}) => {
    const [numbers, setNumbers] = useState([{}])
    useEffect(() => {
        const getNumbers = async () => {
            const num = await services.getNumbers(id)
            setNumbers(num)
        }
        getNumbers()
    },[])

    return (
        <ContainerNumberList>
            {numbers.map(number => 
                <NumberItem key={number.codigo} data={number} />    
            )}
        </ContainerNumberList>
    )
}

export default NumberList
