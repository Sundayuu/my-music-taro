import { ACTION_SET_RECOMMEND_LIST } from '@constants';

type homeType = {
  recommendList?: Array<any>;
};
const INITIAL_STATE = {
  recommendList: []
};

export default function counter(state: homeType = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_SET_RECOMMEND_LIST:
      return {
        ...state,
        recommendList: action.payload
      };

    default:
      return state;
  }
}
