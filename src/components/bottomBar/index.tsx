import Taro from '@tarojs/taro';
import { AtTabBar } from 'taro-ui';
import { cache } from '@constants';
import './index.scss';
import { View } from '@tarojs/components';
type PropsType = {
  currentTab: number;
};
const tabArr = [
  {
    title: '心动',
    image: '/assets/images/icon/heart.png',
    pageUrl: '/pages/index/index',
    selectedImage: '/assets/images/icon/selected_heart.png',
    isAuth: false
  },
  {
    title: '我的',
    image: '/assets/images/icon/mine.png',
    pageUrl: '/pages/mime/index',
    selectedImage: '/assets/images/icon/selected_mine.png',
    isAuth: true
  }
];
function Bottom({ currentTab }: PropsType) {
  const handleClick = e => {
    if (e === currentTab) return;
    const userInfo = JSON.parse(Taro.getStorageSync(cache.loginInfo) || '{}');
    if (tabArr[e].isAuth) {
      // 判断userId是否存在
      if (userInfo.userId) {
        Taro.switchTab({
          url: tabArr[e].pageUrl
        });
      } else {
        Taro.navigateTo({
          url: '/pages/login/index'
        });
      }
    } else {
      Taro.switchTab({
        url: tabArr[e].pageUrl
      });
    }
  };
  return (
    <View>
      <AtTabBar
        fixed
        selectedColor={'#cc1818'}
        tabList={tabArr}
        onClick={handleClick}
        current={currentTab}
      />
    </View>
  );
}

export default Bottom;
