import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { AtDrawer, AtToast } from 'taro-ui';
import { MineMenuItem, BottomBar } from '@components';
import { connect } from '@tarojs/redux';
import { logout } from '@actions/mineActions';
import './index.scss';
import UserInfo from './userInfo';
import { cache } from '@constants';
type PageState = {
  drawVisible: boolean;
  userInfo: any;
  logoutVisible: boolean;
  menuArr: Array<any>;
};
type PropsState = {
  logout: () => void;
  logoutTips: string;
  logoutVisible: boolean;
};

@connect(
  ({ mineReducer }) => ({
    ...mineReducer
  }),
  dispatch => ({
    logout: () => dispatch(logout())
  })
)
class Page extends Component<PropsState, PageState> {
  config: Config = {
    navigationBarTitleText: '我的天地'
  };

  constructor(props) {
    super(props);
    this.state = {
      drawVisible: false,
      userInfo: {},
      logoutVisible: false,
      menuArr: []
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {
    const userInfo = JSON.parse(
      Taro.getStorageSync(cache.loginInfo) || '{}'
    ) as any;
    const { follows, followeds, playlistCount } = userInfo;
    this.setState({
      userInfo,
      menuArr: [
        {
          id: 1,
          num: followeds,
          text: '动态'
        },
        {
          id: 2,
          num: follows,
          text: '关注'
        },
        {
          id: 3,
          num: playlistCount,
          text: '粉丝'
        }
      ]
    });
  }

  componentDidHide() {}

  showDraw = () => {
    this.setState({
      drawVisible: !this.state.drawVisible
    });
  };
  showToast = () => {
    this.setState({
      logoutVisible: this.props.logoutVisible
    });
  };

  render() {
    const { logoutTips } = this.props;
    const { userInfo, logoutVisible, menuArr } = this.state;
    return (
      <View className="">
        {/* 用户头像 */}
        <UserInfo showDraw={this.showDraw} userInfo={userInfo} />
        {/* menu */}
        <View className="user_menu">
          {menuArr &&
            menuArr.map(item => {
              return (
                <View
                  className="user_menu_item"
                  onClick={() => {}}
                  key={item.id}
                >
                  <Text className="num">{item.num ? item.num : 0}</Text>
                  <Text>{item.text}</Text>
                </View>
              );
            })}
        </View>
        <AtDrawer
          show={this.state.drawVisible}
          mask
          right
          onClose={() => this.showDraw()}
        >
          <View className="draw-box">
            <View className="use-info-draw">
              <Image
                className="avatar"
                src={userInfo && userInfo.avatarUrl && userInfo.avatarUrl}
              />
              <View className="use-name">
                <Text>
                  {userInfo && userInfo.nickname && userInfo.nickname}
                </Text>
                <View className="level-box">
                  <Text>
                    LV.{userInfo && userInfo.vipType && userInfo.vipType}
                  </Text>
                </View>
              </View>
            </View>
            <MineMenuItem
              icon={'sound'}
              text={'最近收听'}
              onClick={() => {
                this.showDraw();
              }}
            />
            <MineMenuItem
              icon={'check-circle'}
              text={'退出登录'}
              onClick={() => {
                this.props.logout();
                this.showDraw();
              }}
            />
          </View>
        </AtDrawer>
        <AtToast
          isOpened={logoutVisible}
          status="success"
          text={logoutTips}
          duration={1000}
        />
        <BottomBar currentTab={1} />
      </View>
    );
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Page as ComponentClass;
