import React from 'react'
import { ReduxContext } from '../context/ReduxProvider'
import CounterButton from './CounterButton';

function CountNumber() {
    const {getState}=React.useContext(ReduxContext)
    const {count,status}=getState();
    console.log(count)
    return (
        <div>
            <h1>count</h1>
            <h2>{count}</h2>
            {status?<p>notPosible</p>:!status}
            <CounterButton/>
        </div>
    )
}

export default CountNumber
