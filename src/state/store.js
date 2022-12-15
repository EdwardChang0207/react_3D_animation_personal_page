import { createStore } from 'redux'
import reducers from './reducers/indux'

export const store = createStore(
    reducers,
    {}
)