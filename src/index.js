import {store}  from "./store"
import * as actions from './actionTypes'
import {bugAdded, bugResolved} from "./actions"
const unsubscribe = store.subscribe(()=>{
  console.log("Store Changed", store.getState())
})

store.dispatch(bugAdded("Bug 1 Added"))
store.dispatch(bugResolved(1))

unsubscribe()

store.dispatch({
  type:actions.BUG_REMOVED,
  payload:  {id:1}
})

console.log(store.getState())