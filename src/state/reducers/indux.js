import {combineReducers} from 'redux'
import reducer from './ServiceReducer'
import ServiceReducer from './ServiceReducer'
import HomeReducer from './HomeReducer'

const reducers = combineReducers({
    service: ServiceReducer,
    Home: HomeReducer
})

export default reducers