import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/profile'    
import initState from 'STORE/initState'

export default createReducer(initState.profiles, ACTION_HANDLERS)
