import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import './index.scss';

type PageState = {};

class Page extends Component<{}, PageState> {
  config: Config = {
    navigationBarTitleText: '我的天地'
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
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
          <View>
            <Image
              className="draw_icon"
              src={require('@assets/images/icon/draw.png')}
            />
          </View>
        </View>
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
