import { STATIONS_DATA, STATION_DATA } from "../actions/stationsData";


const initialState = {
  stationsData: [],
  stationData: []
};

const stationsData = (state = initialState, action) => {
  switch (action.type) {
    case STATIONS_DATA:
      return {
        ...state,
        stationsData: action.payload
      };
    case STATION_DATA:
      return {
        ...state,
        stationData: action.payload
      }; 
    default:
      return state;
  }
};

export default stationsData;