import {combineReducers} from 'redux';
import tabs from './tabs';
import bill from './bill';
import total from './total';
import items from './items';
import pulldown from './pulldown'


const rootReducer = combineReducers({
  tabs,
  bill,
  total,
  items,
  pulldown
})

export default rootReducer
