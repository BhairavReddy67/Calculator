import React from 'react'
export const ReduxContext=React.createContext()
function ReduxProvider({children,store}) {
    const {dispatch,getState}= store;
    const value={dispatch,getState}
    const [state,setState]=React.useState(0)
    const forceupdate=()=>setState(state+1)
    store.subscribe(forceupdate)
    return (
        <ReduxContext.Provider value={value}>
            {children}
        </ReduxContext.Provider>
    )
}

export default ReduxProvider
