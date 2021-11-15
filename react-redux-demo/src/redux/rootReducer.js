import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import candyReducer from './candy/candyReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  candy: candyReducer
});

export default rootReducer;
