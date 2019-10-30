import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import './index.scss';
type IProps = {
  userInfo: any;
  showDraw: () => void;
};
const UserInfo = ({ userInfo, showDraw }: IProps) => {
  return (
    <View className="header">
      {/* 用户信息 */}
      <View className="use-info">
        <Image
          className="avatar"
          src={userInfo && userInfo.avatarUrl && userInfo.avatarUrl}
        />
        <View className="use-name">
          <Text>{userInfo && userInfo.nickname && userInfo.nickname}</Text>
          <View className="level-box">
            <Text>LV.{userInfo && userInfo.vipType && userInfo.vipType}</Text>
          </View>
        </View>
      </View>
      {/*  抽屉按钮 */}
      <View onClick={() => showDraw()}>
        <Image
          className="draw_icon"
          src={require('@assets/images/icon/draw.png')}
        />
      </View>
    </View>
  );
};
export default UserInfo;
