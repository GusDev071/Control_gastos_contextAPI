import { useReducer, createContext, type ActionDispatch, type ReactNode } from "react"
import { budgetReducer, initialState, type BudgetState, type BudgetActions } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: ActionDispatch<[action: BudgetActions]>
}

type BudgetProviderProps = {
    children: ReactNode
}


export const BudgetContext = createContext<BudgetContextProps>(null!) // se utiliza el arrego vacio {} as BudgetContextProps  para poder eliminar el error y que ts confie otra solucion seria el null!

export const BudgetProvider = ({children}:BudgetProviderProps) =>{

    const [state, dispatch] = useReducer(budgetReducer,initialState)


    return(
        <BudgetContext.Provider
        value={{
            state,
            dispatch
        }}>
            {children}
        </BudgetContext.Provider>
    )
}