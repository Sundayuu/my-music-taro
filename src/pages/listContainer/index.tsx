import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';
import { SongItem, HeadLine } from '@components';
type PageState = {
  list: Array<any>;
};

class ListContainer extends Component<{}, PageState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentWillMount() {
    console.log(this.$router.params);
    Taro.setNavigationBarTitle({
      title: this.$router.params.headText
    });
  }
  componentWillUnmount() {}

  componentDidShow() {
    this.setState({
      list: JSON.parse(this.$router.params.list)
    });
  }

  componentDidHide() {}

  render() {
    return (
      <View>
        <HeadLine title="推荐歌单" />
        <View className="recommend-list">
          {this.state.list &&
            this.state.list.map(item => {
              return (
                <SongItem key={item.id} imgUrl={item.picUrl} text={item.name} />
              );
            })}
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

export default ListContainer as ComponentClass;
