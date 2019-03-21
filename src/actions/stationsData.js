import request from "./request"; 
import spotifyRequest from './spotifyRequest'

export const STATIONS_DATA = "STATIONS_DATA";
export const STATION_DATA = "STATION_DATA";
export const STATIONS_HISTORY_DATA = "STATIONS_HISTORY_DATA";
export const PROGRESS_BAR_DATA = 'PROGRESS_BAR_DATA';
export const SPOTIFY_URL = 'SPOTIFY_URL';

const responseStationsData = res => ({
  type: STATIONS_DATA,
  payload: res.data
});

const setData = stationData => ({
  type: STATION_DATA,
  payload: stationData
});

const stationHistoryData = data => ({
  type: STATIONS_HISTORY_DATA,
  payload: data.data
});

const progressData = data => ({
  type: PROGRESS_BAR_DATA,
  payload: data
});

const spotifyTrackData = data => ({
  type: SPOTIFY_URL,
  payload: data
})


export const progressBarData = data => {
  return dispatch => {
    dispatch(progressData(data));
  }
};

export const stationData = stationData => {
  return dispatch => {
    dispatch(setData(stationData));
  }
};

export const stationsData = id => {
  return dispatch => {
    request()
      .get(`category/${id}/stations`)
      .then((res) => {
        dispatch(responseStationsData(res));
      })
      .catch((error) => {
        console.log(error);
      })
    };
};

export const stationHistory = id => {
  return dispatch => {
    request()
      .get(`station/${id}/song_history`)
      .then((res) => {
        dispatch(stationHistoryData(res));
      })
      .catch((error) => {
        console.log(error);
      })
    };
};


export const spotifyTrack = id => {
  console.log(id)
  return dispatch => {
    spotifyRequest()
      .get(`tracks/${id}`)
      .then((res) => {
        dispatch(spotifyTrackData(res.data.preview_url));
      })
      .catch((error) => {
        console.log(error);
      })
    };
};