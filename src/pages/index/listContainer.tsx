import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SongItem } from '@components';
import './index.scss';
type IProps = {
  dataList: Array<any>;
  targetUrl: string;
};
const ListContainer = ({ dataList, targetUrl }: IProps) => {
  return (
    <View className="recommend-list">
      {dataList &&
        dataList.slice(0, 9).map(item => {
          return (
            <SongItem
              key={item.id}
              imgUrl={item.picUrl}
              text={item.name}
              onClick={() =>
                Taro.navigateTo({
                  url: `${targetUrl}?id=${item.id}`
                })
              }
            />
          );
        })}
    </View>
  );
};

export default ListContainer;
