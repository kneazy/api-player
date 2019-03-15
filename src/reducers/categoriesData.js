import { CATEGORIES_DATA } from "../actions/categoriesData";

const initialState = {
  categoriesData: [],
};

const categoriesData = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_DATA:
      return {
        ...state,
        categoriesData: action.payload
      };
    default:
      return state;
  }
};

export default categoriesData;