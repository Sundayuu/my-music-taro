import Taro from '@tarojs/taro';
import { AtTabBar } from 'taro-ui';
import './index.scss';
import { View } from '@tarojs/components';
type PropsType = {
  currentTab: number;
};
const tabArr = [
  { title: '心动', iconType: 'heart-2', pageUrl: '/pages/index/index' },
  { title: '我的', iconType: 'user', pageUrl: '/pages/mime/index' }
];
function Bottom({ currentTab }: PropsType) {
  const handleClick = e => {
    if (e === currentTab) return;
    console.log(e);
    Taro.switchTab({
      url: tabArr[e].pageUrl
    });
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
