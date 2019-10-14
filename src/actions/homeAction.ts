import { ACTION_SET_RECOMMEND_LIST, HTTP_STATUS } from '@constants';
import { api } from '@utils';
export const fetchRecommendList = () => async dispatch => {
  // 获取推荐歌单
  const { data } = await api.get('/personalized');
  if (data.code !== HTTP_STATUS.SUCCESS) return;
  console.log('data', data);

  return dispatch({
    type: ACTION_SET_RECOMMEND_LIST,
    payload: data.result
  });
};
