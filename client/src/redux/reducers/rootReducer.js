import { combineReducers } from 'redux';
import { adReducer } from './adReducer';
import { interestReducer } from './interestReducer';
import { rolesReducer } from './rolesReducer';
import { userReducer } from './userReducer';
import { formReducer } from './formReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    roles: rolesReducer,
    ad: adReducer,
    interest: interestReducer,
    form: formReducer,
    
});
