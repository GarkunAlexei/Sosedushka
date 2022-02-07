import { combineReducers } from 'redux';
import { adReducer } from './adReducer';
import { rolesReducer } from './rolesReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    roles: rolesReducer,
    ad: adReducer,
});
