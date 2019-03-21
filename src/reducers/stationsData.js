import { STATIONS_DATA,
         STATION_DATA, 
         PROGRESS_BAR_DATA,
         STATIONS_HISTORY_DATA,
         SPOTIFY_URL } from "../actions/stationsData";


const initialState = {
  stationsData: [],
  stationData: [],
  progressData: 0,
  stationHistoryData:[],
  spotifyUrlData: ''
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
    case PROGRESS_BAR_DATA:
      return {
        ...state,
        progressData: action.payload
      };
    case STATIONS_HISTORY_DATA:
      return {
        ...state,
        stationHistoryData: action.payload
      }
    case SPOTIFY_URL:
      return {
        ...state,
        spotifyUrlData: action.payload
      }
    default:
      return state;
  }
};

export default stationsData;