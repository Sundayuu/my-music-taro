import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import './index.scss';
type Propstype = {
  imgUrl: string;
  text: string;
  onClick: () => void;
};

function SongItem({ imgUrl, text, onClick }: Propstype) {
  return (
    <View className="song-item" onClick={onClick}>
      <Image className="img" src={imgUrl} />
      <Text className="desc">{text}</Text>
    </View>
  );
}

export default SongItem;
