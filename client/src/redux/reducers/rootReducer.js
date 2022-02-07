import { combineReducers } from 'redux';
import { interestReducer } from './interestReducer';
import { rolesReducer } from './rolesReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    roles: rolesReducer,
    interest: interestReducer,
    
});
