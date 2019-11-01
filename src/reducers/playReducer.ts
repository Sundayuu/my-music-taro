import { ACTION_SET_PLAY_DETAIL } from '@constants';
type IProps = {
  playDetail: any;
};
const INITIAL_STATE = {
  playDetail: {}
};

export default function ListReducer(state: IProps = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_SET_PLAY_DETAIL:
      return {
        ...state,
        playDetail: action.payload
      };

    default:
      return state;
  }
}
