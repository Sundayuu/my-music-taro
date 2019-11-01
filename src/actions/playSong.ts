import { ACTION_SET_PLAY_DETAIL, HTTP_STATUS } from '@constants';
import { api } from '@utils';
// 歌单详情
export const fetchPlayDetail = (id: number | string) => async dispatch => {
  const { data } = await api.get(`/song/detail?ids=${id}`);
  console.log('数据', data);
  if (data.code === HTTP_STATUS.SUCCESS) {
    return dispatch({
      type: ACTION_SET_PLAY_DETAIL,
      payload: {}
    });
  }
};
