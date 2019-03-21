import { CONTROL_VOLUME } from "../actions/controlsData";


const initialState = {
  volume: 30
};

const controlsData = (state = initialState, action) => {
  switch (action.type) {
    case CONTROL_VOLUME:
      return {
        ...state,
        volume: action.payload
      };
    default:
      return state;
  }
};

export default controlsData;