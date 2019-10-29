import { ACTION_SET_USER_INFO, ACTION_SET_LOUGOUT } from '@constants';
type IProps = {
  userInfo: any;
  logoutTips: string;
  logoutVisible: boolean;
};
const INITIAL_STATE = {
  userInfo: {},
  logoutTips: '',
  logoutVisible: false
};

export default function MineReducer(state: IProps = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    case ACTION_SET_LOUGOUT:
      return {
        ...state,
        logoutTips: action.payload.tips,
        logoutVisible: action.payload.visible
      };
    default:
      return state;
  }
}
