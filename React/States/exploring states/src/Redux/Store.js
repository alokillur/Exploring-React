import {createStore} from 'redux'
import eggReducer from './Egg/eggReducer'

const store = createStore(eggReducer);

export default store