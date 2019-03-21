import request from "./request"; 

export const STATIONS_DATA = "STATIONS_DATA";
export const STATION_DATA = "STATION_DATA";
export const STATIONS_HISTORY_DATA = "STATIONS_HISTORY_DATA";
export const PROGRESS_BAR_DATA = 'PROGRESS_BAR_DATA';

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