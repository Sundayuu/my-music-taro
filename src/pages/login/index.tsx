import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { ComponentClass } from 'react';
import { LogoContainer } from '@components';
import { HTTP_STATUS } from '@constants';
import { AtIcon, AtButton, AtToast, AtInput } from 'taro-ui';
import { api } from '@utils';
import './index.scss';
type PageState = {
  phone: string;
  password: string;
  // isLoading: boolean;
  showToast?: boolean;
  toastType?: string;
  msg: string;
};
// @connect()
class Login extends Component<any, PageState> {
  config: Config = {
    navigationBarTitleText: '登录'
  };
  state = {
    phone: '',
    password: '',
    // isLoading: false,
    showToast: false,
    // toast 类型
    toastType: '',
    msg: '网络错误'
  };
  handleAccount = value => {
    this.setState({
      phone: value
    });
    return value;
  };
  handlePassword = v => {
    this.setState(() => ({
      password: v
    }));
    return v;
  };
  handleSubmit = async () => {
    const { phone, password } = this.state;
    if (!phone && !password)
      return this.setState({
        showToast: true,
        msg: '手机号不能为空'
      });
    const { data } = await api.get('/login/cellphone', {
      phone,
      password
    });

    if (data.code && data.code !== HTTP_STATUS.SUCCESS)
      return this.setState({
        showToast: true,
        toastType: 'error',
        msg: data.msg ? data.msg : '网络错误'
      });
    this.setState({
      showToast: true,
      toastType: 'loading',
      msg: '登录中'
    });
    if (data.code && data.code === HTTP_STATUS.SUCCESS) {
      this.setState({
        showToast: true,
        toastType: 'success',
        msg: '登录成功'
      });
    }
    Taro.navigateTo({
      url: '/pages/index/index'
    });
  };
  closeToast = () => {
    this.setState({
      showToast: false
    });
  };
  render() {
    const { phone, password, toastType, showToast, msg } = this.state;
    return (
      <View className="login_container">
        <LogoContainer />
        <View className="login-content">
          <View className="login-form-item">
            <AtIcon value="iphone" size="24" color="#ccc" />
            <AtInput
              name="phone"
              border={false}
              type="number"
              placeholder="请输入手机号码"
              className="item-input"
              maxLength={11}
              clear
              value={phone.trim()}
              onChange={this.handleAccount}
            />
          </View>
          <View className="login-form-item">
            <AtIcon value="lock" size="24" color="#ccc" />
            <AtInput
              name="password"
              border={false}
              type="password"
              placeholder="请输入密码"
              className="item-input"
              value={password.trim()}
              onChange={this.handlePassword}
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
          <AtToast
            isOpened={showToast}
            status={toastType as 'error' | 'loading' | 'success'}
            text={msg}
            onClose={this.closeToast}
          />
        </View>
      </View>
    );
  }
}

export default Login as ComponentClass;
