import {
  ACTION_SET_RECOMMEND_LIST,
  ACTION_SET_BANNER_LIST,
  ACTION_SET_DJ_LIST
} from '@constants';

type IProp = {
  recommendList: Array<any>;
  bannerList: Array<any>;
  listContanerData: Array<any>;
  djList: Array<any>;
};
const INITIAL_STATE = {
  recommendList: [],
  bannerList: [],
  listContanerData: [],
  djList: []
};

export default function HomeReducer(state: IProp = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_SET_RECOMMEND_LIST:
      return {
        ...state,
        recommendList: action.payload,
        listContanerData: action.payload
      };
    case ACTION_SET_BANNER_LIST:
      return {
        ...state,
        bannerList: action.payload
      };
    case ACTION_SET_DJ_LIST:
      return {
        ...state,
        djList: action.payload
      };
    default:
      return state;
  }
}
