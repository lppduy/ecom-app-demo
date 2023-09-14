import { combineReducers } from 'redux';
import ReducerCart from './ReducerCart';
import ReducerSession from './ReducerSession';
import ReducerPopup from './ReducerPopup';

const ReducerRoot = combineReducers({
  Cart: ReducerCart,
  Session: ReducerSession,
  Popup: ReducerPopup,
});

export default ReducerRoot;
