import {
  ACTION_SET_USER_INFO,
  HTTP_STATUS,
  ACTION_SET_LOUGOUT
} from '@constants';
import { api } from '@utils';
import { util } from '@utils';
// 存储用户信息
export const saveLoginInfo = (params: any) => async dispatch => {
  dispatch({
    type: ACTION_SET_USER_INFO,
    payload: params
  });
};

export const fetchUserInfo = () => async dispatch => {
  // 获取用户信息
};
// 退出登录 /logout
export const logout = () => async dispatch => {
  const { data } = await api.get('/logout');
  console.log(data);
  if (data.code === HTTP_STATUS.SUCCESS) {
    util.logout();
    // 退出登录成功
    dispatch({
      type: ACTION_SET_LOUGOUT,
      payload: {
        tips: '退出登录!',
        visible: true
      }
    });
  }
};
