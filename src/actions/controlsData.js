export const CONTROL_VOLUME = 'CONTROL_VOLUME';

const volumeData = data => ({
  type: CONTROL_VOLUME,
  payload: data
});

export const volume = data => {
  return dispatch => {
    dispatch(volumeData(data));
  }
};