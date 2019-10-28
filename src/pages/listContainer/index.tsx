import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import './index.scss';
import { SongItem, HeadLine } from '@components';
import { connect } from '@tarojs/redux';
import { fetchBanner } from '@actions/homeAction';
type PageState = {
  list: Array<any>;
  bannerList: Array<any>;
  fetchBanner: () => void;
};
@connect(
  ({ homeReducer }) => ({
    ...homeReducer
  }),
  dispatch => ({
    fetchBanner: () => dispatch(fetchBanner())
  })
)
class ListContainer extends Component<PageState, any> {
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
    Taro.setNavigationBarTitle({
      title: this.$router.params.headText
    });
  }
  componentWillUnmount() {}

  componentDidShow() {
    this.props.fetchBanner();
    this.setState({
      list: JSON.parse(this.$router.params.list)
    });
  }

  componentDidHide() {}

  render() {
    console.log('bannerList', this.props.bannerList);

    return (
      <View>
        <HeadLine title="推荐歌单" />
        <View className="container">
          <Swiper
            className="banner"
            indicatorColor="#999"
            indicatorActiveColor="#333"
            vertical={false}
            circular
            indicatorDots
            autoplay
          >
            {this.props.bannerList &&
              this.props.bannerList.map(item => {
                return (
                  <SwiperItem key={item.targetId}>
                    <Image src={item.pic} className="banner-img" />
                  </SwiperItem>
                );
              })}
          </Swiper>
          {/* 推荐歌单 */}
          <View className="recommend-list">
            {this.state.list &&
              this.state.list.map(item => {
                return (
                  <SongItem
                    key={item.id}
                    imgUrl={item.picUrl}
                    text={item.name}
                    onClick={() =>
                      Taro.navigateTo({
                        url: `/pages/songDetail/index?id=${item.id}`
                      })
                    }
                  />
                );
              })}
          </View>
          {/* 推荐电台 */}
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
