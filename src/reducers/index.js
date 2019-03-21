import { combineReducers } from "redux";
import categoriesData from './categoriesData';
import stationsData from './stationsData';
import controlsData from './controlsData';

const rootReducers = combineReducers({
  categoriesState: categoriesData,
  stationsState: stationsData,
  controlsDataState: controlsData
});
export default rootReducers;