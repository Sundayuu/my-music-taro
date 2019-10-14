import { ACTION_SET_RECOMMEND_LIST, ACTION_SET_BANNER_LIST } from '@constants';

const INITIAL_STATE = {
  recommendList: [],
  bannerList: []
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_SET_RECOMMEND_LIST:
      return {
        ...state,
        recommendList: action.payload
      };
    case ACTION_SET_BANNER_LIST:
      return {
        ...state,
        bannerList: action.payload
      };
    default:
      return state;
  }
}
