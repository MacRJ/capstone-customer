import {combineReducers} from 'redux';
 import bill from './bill';
 import total from './total';
 import items from './items';
 import pulldown from './pulldown'


 const rootReducer = combineReducers({
   bill,
   total,
   items,
   pulldown
 })

 export default rootReducer
