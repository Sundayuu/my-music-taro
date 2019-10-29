import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import './index.scss';
type Propstype = {
  imgUrl: string;
  text: string;
  onClick: () => void;
  style?: any;
};

function SongItem({ imgUrl, text, onClick, style }: Propstype) {
  return (
    <View className="song-item" style={style} onClick={onClick}>
      <Image className="img" src={imgUrl} />
      <Text className="desc">{text}</Text>
    </View>
  );
}

export default SongItem;
