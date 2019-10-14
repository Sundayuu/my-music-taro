import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';
type PropsType = {
  title: string;
  more?: string;
  onClick?: () => void;
};
function HeadLine({ title = '', more, onClick }: PropsType) {
  return (
    <View className="head-line">
      <Text className="title">{title}</Text>
      {more && (
        <Text className="more" onClick={onClick}>
          {more}
        </Text>
      )}
    </View>
  );
}

export default HeadLine;
