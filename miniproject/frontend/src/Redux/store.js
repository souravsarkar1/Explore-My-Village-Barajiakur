import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import { reduder as dataReducer } from './galleryReducer/reducer';
const rootReducer = combineReducers({
   dataReducer
})
export const store = legacy_createStore(rootReducer , applyMiddleware(thunk));