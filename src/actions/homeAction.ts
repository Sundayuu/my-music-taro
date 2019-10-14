import {
  ACTION_SET_RECOMMEND_LIST,
  HTTP_STATUS,
  ACTION_SET_BANNER_LIST
} from '@constants';
import { api } from '@utils';
export const fetchRecommendList = () => async dispatch => {
  // 获取推荐歌单
  const { data } = await api.get('/personalized');
  if (data.code !== HTTP_STATUS.SUCCESS) return;
  return dispatch({
    type: ACTION_SET_RECOMMEND_LIST,
    payload: data.result
  });
};
// 获取banner
export const fetchBanner = () => async dispatch => {
  const { data } = await api.get('/banner?type=1');
  console.log('banner', data);
  if (data.code !== HTTP_STATUS.SUCCESS) return;
  return dispatch({
    type: ACTION_SET_BANNER_LIST,
    payload: data.banners
  });
};
