import { ACTION_SET_LIST_DETAIL } from '@constants';
type IProps = {
  listDetail: any;
  songList: Array<any>;
};
const INITIAL_STATE = {
  listDetail: {},
  songList: []
};

export default function ListReducer(state: IProps = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_SET_LIST_DETAIL:
      return {
        ...state,
        listDetail: action.payload,
        songList: action.payload.tracks
      };

    default:
      return state;
  }
}
