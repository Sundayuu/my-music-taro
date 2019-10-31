import { ACTION_SET_LIST_DETAIL, HTTP_STATUS } from '@constants';
import { api } from '@utils';
// 歌单详情
export const fetchListDetail = (id: number | string) => async dispatch => {
  const { data } = await api.get(`/playlist/detail?id=${id}`);
  console.log('数据', data);
  if (data.code === HTTP_STATUS.SUCCESS) {
    return dispatch({
      type: ACTION_SET_LIST_DETAIL,
      payload: data.playlist
    });
  }
};
