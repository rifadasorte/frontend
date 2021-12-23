import React , {useState, useEffect, useContext} from 'react'
import NumberItem from '../components/NumberItem'
import { ContainerNumberList } from '../styles/numbers'
import NumberContext from '../context/NumbersContext'
import ConfirmScreen from './ConfirmScreen'
const NumberList = ({id}) => {
    const [numbers, setNumbers] = useState([{}])
    const { num, update } = useContext(NumberContext)

    useEffect(() => {
        update(setNumbers, id)
    },[])

    return (
        <ContainerNumberList>
            {numbers.map(number => 
                <NumberItem key={number.codigo} data={number} />    
            )}
            {num.length > 0 && <ConfirmScreen data={num} update={update(setNumbers, id)}/>}
        </ContainerNumberList>
    )
}

export default NumberList
