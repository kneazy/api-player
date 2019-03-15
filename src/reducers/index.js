import { combineReducers } from "redux";
import categoriesData from './categoriesData';
import stationsData from './stationsData';

const rootReducers = combineReducers({
  categoriesState: categoriesData,
  stationsState: stationsData,
});
export default rootReducers;