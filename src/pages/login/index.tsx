import Taro, { Component, Config } from '@tarojs/taro';
import { View, Input } from '@tarojs/components';
import { ComponentClass } from 'react';
import { LogoContainer } from '@components';
import { AtIcon, AtButton, AtToast } from 'taro-ui';
import api from './../../services/api';
import './index.scss';
type PageState = {
  phone: string;
  password: string;
  isLoading: boolean;
};
// @connect()
class Login extends Component<any, PageState> {
  config: Config = {
    navigationBarTitleText: '登录'
  };
  state = {
    phone: '',
    password: '',
    isLoading: false
  };
  handleAccount = e => {
    this.setState(() => ({
      phone: e.detail.value
    }));
  };
  handlePassword = e => {
    this.setState(() => ({
      password: e.detail.value
    }));
  };
  handleSubmit = async () => {
    const { phone, password } = this.state;
    if (phone && password) return;
    const res = await api.get('/login/cellphone', {
      phone,
      password
    });
    console.log(this.state.phone, this.state.password);
  };
  render() {
    const { phone, password, isLoading } = this.state;
    return (
      <View className="login_container">
        <LogoContainer />
        <View className="login-content">
          <View className="login-form-item">
            <AtIcon value="iphone" size="24" color="#ccc" />
            <Input
              type="number"
              placeholder="请输入手机号"
              className="item-input"
              value={phone.trim()}
              onInput={e => this.handleAccount(e)}
            />
          </View>
          <View className="login-form-item">
            <AtIcon value="lock" size="24" color="#ccc" />
            <Input
              type="text"
              placeholder="请输入密码"
              password
              className="item-input"
              value={password.trim()}
              onInput={e => this.handlePassword(e)}
            />
          </View>
          <AtButton
            type="primary"
            className="login-content-btn"
            onClick={this.handleSubmit}
            circle
          >
            {' '}
            登录
          </AtButton>
        </View>
      </View>
    );
  }
}

export default Login as ComponentClass;
