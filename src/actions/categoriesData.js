import request from "./request"; 

export const CATEGORIES_DATA = "CATEGORIES_DATA";

const responseData = res => ({
  type: CATEGORIES_DATA,
  payload: res.data
});

export const categoriesData = () => {
  return dispatch => {
    request()
    .get('categories')
    .then((res) => {
      dispatch(responseData(res));
    })
    .catch((error) => {
      console.log(error);
    })
  };
};