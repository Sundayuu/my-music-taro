import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import './index.scss';
type Propstype = {
  imgUrl: string;
  text: string;
};
function SongItem({ imgUrl, text }: Propstype) {
  return (
    <View className="song-item">
      <Image className="img" src={imgUrl} />
      <Text className="desc">{text}</Text>
    </View>
  );
}

export default SongItem;
