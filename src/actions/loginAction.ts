import { ACTION_SET_COOKIES } from './../constants/counter';

export const login = params => async dispatch => {
  dispatch({
    type: ACTION_SET_COOKIES,
    payload: params
  });
};
