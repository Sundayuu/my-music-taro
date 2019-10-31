import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.scss';
type IProps = {
  listDetail: any;
};
const DetailHeader = ({ listDetail }: IProps) => {
  return (
    <View>
      <View className="detail-header">
        {/*左边  */}
        <Image
          src={listDetail && listDetail.coverImgUrl}
          className="header-bg"
        />
        <Image src={listDetail && listDetail.coverImgUrl} className="avator" />
        <Text className="playList__header__cover__desc">歌单</Text>
        <View className="playList__header__cover__num">
          <Text>
            {listDetail && listDetail.playCount
              ? listDetail && listDetail.playCount < 10000
                ? listDetail && listDetail.playCount
                : `${Number(listDetail && listDetail.playCount / 10000).toFixed(
                    1
                  )}万`
              : 0}
          </Text>
        </View>
        {/* 右边 */}
        <View className="header-right">
          <Text className="desc">{listDetail && listDetail.name}</Text>
          <Text className="desc">
            {listDetail && listDetail.creator.nickname}
          </Text>
          <Text className="desc">
            {listDetail && listDetail.creator.signature}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default DetailHeader;
