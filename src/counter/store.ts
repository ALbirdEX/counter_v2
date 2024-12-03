import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer)
// определить автоматически тип всего объекта состояния
export type CounterRootStateType = ReturnType<typeof store.getState>

//@ts-ignore
window.store = store