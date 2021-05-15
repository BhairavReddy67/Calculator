import {createStore} from "redux"
import Counter from "./Reducer.js"

export const store =createStore(Counter)

 console.log(store.getState())