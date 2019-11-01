import '@tarojs/async-await';
import Taro, { Component, Config } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import { View } from '@tarojs/components';

import configStore from './store';

import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  state = {
    userId: '',
    url: 'pages/mime/index'
  };
  config: Config = {
    pages: [
      'pages/playSong/index',
      'pages/index/index',
      'pages/mime/index',
      'pages/login/index',
      'pages/listContainer/index',
      'pages/songDetail/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#d43c33',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      selectedColor: '#cc1818',
      list: [
        {
          selectedIconPath: 'assets/images/icon/selected_heart.png',
          iconPath: 'assets/images/icon/heart.png',
          pagePath: 'pages/index/index',
          text: '心动'
        },
        {
          selectedIconPath: 'assets/images/icon/selected_mine.png',
          iconPath: 'assets/images/icon/mine.png',
          pagePath: 'pages/mime/index',
          text: '我的'
        }
      ]
    },
    // 允许后台播放音乐
    requiredBackgroundModes: ['audio']
  };

  componentDidMount() {}

  componentDidShow() {
    // 全局隐藏tabBar, 使用自己封装的tabbar
    Taro.hideTabBar();
  }

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <View />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
