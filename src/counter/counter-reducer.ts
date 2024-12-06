type IncreaseActionType = ReturnType<typeof increaseAC>
type ResetActionType = ReturnType<typeof resetAC>
type SetStartValueAction = ReturnType<typeof setStartValueAC>
type SetMaxValueAction = ReturnType<typeof setMaxValueAC>
type ActionType = IncreaseActionType
    | ResetActionType
    | SetStartValueAction
    | SetMaxValueAction

export type StateType = {
    startData: number,
    maxData: number,
    primaryData: number
}

const initialState: StateType = {
    startData: 0,
    maxData: 0,
    primaryData: 0
}

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREASE-VALUE': {
            return {...state, primaryData: state.primaryData + 1}
        }
        case 'RESET-VALUE': {
            return {...state, primaryData: 0}
        }
        case 'SET-START-VALUE': {
            return {...state, startData: action.payload.data, primaryData: action.payload.data}
        }
        case 'SET-MAX-VALUE': {
            debugger
            return {...state, maxData: action.payload.data}
        }
        default:
            return state
    }
}

export const increaseAC = (payload: { data: number }) => ({
    type: 'INCREASE-VALUE',
    payload
}) as const
export const resetAC = (payload: {}) => ({
    type: 'RESET-VALUE',
    payload
}) as const
export const setStartValueAC = (payload: { data: number }) => ({
    type: 'SET-START-VALUE',
    payload
}) as const
export const setMaxValueAC = (payload: { data: number }) => ({
    type: 'SET-MAX-VALUE',
    payload
}) as const