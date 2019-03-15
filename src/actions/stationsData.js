import request from "./request"; 
// import Cookies from "js-cookie";

export const STATIONS_DATA = "STATIONS_DATA";
export const STATION_DATA = "STATION_DATA";
export const SONG_DATA = "SONG_DATA";


const responseData = res => ({
  type: STATIONS_DATA,
  payload: res.data
});

const setData = stationData => ({
  type: STATION_DATA,
  payload: stationData
});

const songData = songData => ({
  type: SONG_DATA,
  payload: songData.data
});

export const stationData = stationData => {
  return dispatch => {
    dispatch(setData(stationData));
  }
};

export const stationsData = id => {
  return dispatch => {
    request()
      .get('category/'+id+'/stations')
      .then((res) => {
        dispatch(responseData(res));
      })
      .catch((error) => {
        console.log(error);
      })
    };
};

export const songHistory = id => {
  return dispatch => {
    request()
      .get('station/60802/song_history')
      .then((res) => {
        console.log(res.data)
        dispatch(songData(res));
      })
      .catch((error) => {
        console.log(error);
      })
    };
};