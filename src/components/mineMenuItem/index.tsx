import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtIcon } from 'taro-ui';

import './index.scss';
type Propstype = {
  icon: string;
  text: string;
  onClick?: () => void;
};

function MineMenuItem({ icon, text, onClick }: Propstype) {
  return (
    <View className="mine-item" onClick={onClick}>
      <AtIcon value={icon} size="25" color="#555" />
      <Text className="desc">{text}</Text>
    </View>
  );
}

export default MineMenuItem;
