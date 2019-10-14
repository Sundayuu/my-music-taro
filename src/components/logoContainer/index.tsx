import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { ComponentClass } from 'react';
import './index.scss';
class LogoContainer extends Component<any, any> {
  render() {
    return (
      <View className="logo">
        <Image src={require('./../../assets/images/logo.png')} />
      </View>
    );
  }
}

export default LogoContainer as ComponentClass;
