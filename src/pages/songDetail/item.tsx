import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
type IProps = {
  item: any;
  index: number;
};
import './index.scss';
const Item = ({ item, index }: IProps) => {
  return (
    <View className="song_item_wrap">
      <Text className="song_item_index">{index + 1}</Text>
      <View className="song_item_desc">
        <Text className="song">{item.name}</Text>
        <Text className="song">{item.ar[0].name + item.al.name}</Text>
      </View>
      <Text className="song_item_right">></Text>
    </View>
  );
};
export default Item;
