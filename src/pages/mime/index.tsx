import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Image, Text, Navigator } from '@tarojs/components';
import { AtDrawer, AtToast } from 'taro-ui';
import { MineMenuItem, BottomBar } from '@components';
import { connect } from '@tarojs/redux';
import { logout } from '@actions/mineActions';
import './index.scss';

type PageState = {
  drawVisible: boolean;
};
type PropsState = {
  userInfo: any;
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
      drawVisible: false
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  showDraw = () => {
    this.setState({
      drawVisible: !this.state.drawVisible
    });
  };
  render() {
    const { logoutVisible, logoutTips } = this.props;
    return (
      <View className="container">
        {/* 用户头像 */}
        <View className="header">
          {/* 用户信息 */}
          <View className="use-info">
            <Image
              className="avatar"
              src={
                'http://p1.music.126.net/z1X7ldeHr9fswmTuMLdwLA==/109951164421173109.jpg'
              }
            />
            <View className="use-name">
              <Text>肉包子没有肉呀</Text>
              <View className="level-box">
                <Text>LV.0</Text>
              </View>
            </View>
          </View>
          {/*  抽屉按钮 */}
          <View onClick={() => this.showDraw()}>
            <Image
              className="draw_icon"
              src={require('@assets/images/icon/draw.png')}
            />
          </View>
        </View>
        <View />
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
                src={
                  'http://p1.music.126.net/z1X7ldeHr9fswmTuMLdwLA==/109951164421173109.jpg'
                }
              />
              <View className="use-name">
                <Text>肉包子没有肉呀</Text>
                <View className="level-box">
                  <Text>LV.0</Text>
                </View>
              </View>
            </View>
            <MineMenuItem icon={'sound'} text={'最近收听'} onClick={() => {}} />
            <MineMenuItem
              icon={'check-circle'}
              text={'退出登录'}
              onClick={() => {
                this.props.logout();
              }}
            />
          </View>
        </AtDrawer>
        <AtToast
          isOpened={logoutVisible}
          status="success"
          text={logoutTips}
          //  onClose={this.closeToast}
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
