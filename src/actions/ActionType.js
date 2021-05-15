import { DEC_COUNTER, DIV_COUNTER, INC_COUNTER, MUL_COUNTER } from "./Action"

export const incrementCounter = (payload) =>{
    return {
        type: INC_COUNTER,
        payload
    }
}

export const decrementCounter =(payload) => {
    return {
        type : DEC_COUNTER,
        payload
    }
}

export const multiCounter =(payload) => {
    return {
        type : MUL_COUNTER,
        payload
    }
}

export const diviCounter =(payload) => {
    return {
        type : DIV_COUNTER,
        payload
    }
}