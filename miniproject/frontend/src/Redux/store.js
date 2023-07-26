import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import { reduder as dataReducer } from './galleryReducer/reducer';
import { reducer as authReducer } from './AuthenticationReducer/reducer';
import { reducer as adminCurdReducer } from './AdminCrudReducer/reducer';
const rootReducer = combineReducers({
   dataReducer,
   authReducer,
   adminCurdReducer
})
export const store = legacy_createStore(rootReducer , applyMiddleware(thunk));