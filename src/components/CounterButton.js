import React from 'react'
import { decrementCounter, diviCounter, incrementCounter, multiCounter } from '../actions/ActionType'
import { ReduxContext } from '../context/ReduxProvider'

function CounterButton() {
    const {dispatch}= React.useContext(ReduxContext)
    const [num,setNum]=React.useState()
    const handleChangeAdd=()=>{
        const add_number=incrementCounter(Number(num))
        dispatch(add_number)
    }
    const handleChangesub=()=>{
        const sub_number=decrementCounter(Number(num))
        dispatch(sub_number)
    }
    const handleChangemul=()=>{
        const mul_number=multiCounter(Number(num))
        dispatch(mul_number)
    }
    const handleChangediv=()=>{
        const div_number=diviCounter(Number(num))
        dispatch(div_number)
    }
    const handleChange=(e)=>{
        const {value}=e.target
        setNum(value)
    }
    return (
        <div>
            <input type="number" value={num} placeholder="enter number" onChange={handleChange}/>
            <button onClick={handleChangeAdd}>ADD</button>
            <button onClick={handleChangesub}>sub</button>
            <button onClick={handleChangemul}>mul</button>
            <button onClick={handleChangediv}>div</button>
        </div>
    )
}

export default CounterButton
