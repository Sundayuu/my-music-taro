import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text, Image, ScrollView } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { CLoading } from '@components';
import { fetchListDetail } from '@actions/listActions';
import Item from './item';
import './index.scss';

type PageState = {};
type PropState = {
  fetchListDetail: (id: string | number) => void;
  listDetail: any;
  songList: Array<any>;
};
@connect(
  ({ listReducer }) => ({
    ...listReducer
  }),
  dispatch => ({
    fetchListDetail: id => dispatch(fetchListDetail(id))
  })
)
class ListDetail extends Component<PropState, PageState> {
  config: Config = {
    navigationBarTitleText: '歌单详情'
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {
    let id = this.$router.params.id;
    this.props.fetchListDetail(id);
  }
  handleItemNavigate = id => {
    Taro.navigateTo({
      url: `/pages/playSong/index?id=${id}`
    });
  };

  render() {
    const { listDetail, songList } = this.props;
    return (
      <View className="detail_wrap">
        {/* 头部 */}
        <View className="detail-header">
          {/*左边  */}
          <Image
            src={listDetail && listDetail.coverImgUrl}
            className="header-bg"
          />
          <Image
            src={listDetail && listDetail.coverImgUrl}
            className="avator"
          />
          <Text className="playList__header__cover__desc">歌单</Text>
          <View className="playList__header__cover__num">
            <Text>
              {listDetail && listDetail.playCount
                ? listDetail && listDetail.playCount < 10000
                  ? listDetail && listDetail.playCount
                  : `${Number(
                      listDetail && listDetail.playCount / 10000
                    ).toFixed(1)}万`
                : 0}
            </Text>
          </View>
          {/* 右边 */}
          <View className="header-right">
            <Text className="desc">{listDetail && listDetail.name}</Text>
            <Text className="desc">
              {listDetail && listDetail.creator.nickname}
            </Text>
            <Text className="desc">
              {listDetail && listDetail.creator.signature}
            </Text>
          </View>
        </View>
        {/* 标签 */}
        <View className="detail_tag">
          <View className="tag_box">
            <Text>标签: </Text>
            {listDetail &&
              listDetail.tags.map((item, index) => {
                return (
                  <Text key={index} className="tag_text">
                    {item}
                  </Text>
                );
              })}
          </View>
          <View>
            <Text>简介: </Text>
            {listDetail && listDetail.description}
          </View>
        </View>
        {/* 歌曲 */}
        <View className="song_list_wrap">
          <View className="song_title">
            <Text>歌曲列表</Text>
          </View>
          <ScrollView scrollY className="list_scroll_container">
            {songList && songList.length <= 0 ? (
              <CLoading />
            ) : (
              songList.slice(0, 20).map((item, index) => {
                return (
                  <Item
                    item={item}
                    index={index}
                    key={item.id}
                    onClick={() => this.handleItemNavigate(item.id)}
                  />
                );
              })
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ListDetail as ComponentClass;
