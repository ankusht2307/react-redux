import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import candyReducer from './candy/candyReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import { userReducer } from './user/userReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  candy: candyReducer,
  user: userReducer
});

export default rootReducer;
