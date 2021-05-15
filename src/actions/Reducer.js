import { DEC_COUNTER, DIV_COUNTER, INC_COUNTER, MUL_COUNTER } from "./Action"

const initial = {
    count:0,
    status:false,
}

const Counter = (state = initial , action  )=>{
    switch (action.type){
        case INC_COUNTER:
            return {
                ...state,
                count:state.count+action.payload
            }
        case DEC_COUNTER:
            return {
                ...state,
                count:state.count-action.payload
            }
        case MUL_COUNTER:
            return {
                ...state,
                count:state.count*action.payload
            }
        case DIV_COUNTER:
            if(state.count>=action.payload){
                return {
                    ...state,
                    count:state.count/action.payload,
                    status:false
                }
            }
            return state,{
                ...state,
                status:!state.status
            }
        default :
            return state

    }
}


export default Counter