import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Image, Slider } from '@tarojs/components';
import './index.scss';
import classnames from 'classnames';
import { fetchPlayDetail } from '@actions/playSong';
import { connect } from '@tarojs/redux';
import { MProgress } from '@components';
type PageState = {};
type PropsState = {
  fetchPlayDetail: (id: string | number) => void;
};

@connect(
  playReducer => ({
    ...playReducer
  }),
  dispatch => ({
    fetchPlayDetail: id => dispatch(fetchPlayDetail(id))
  })
)
class Page extends Component<PropsState, PageState> {
  config: Config = {
    navigationBarTitleText: '等待中...'
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
    // this.props.fetchPlayDetail(this.$router.params.id);
  }

  componentDidHide() {}

  render() {
    return (
      <View className="song_container">
        <Image
          src="https://p2.music.126.net/-Qp7nsTBVEIOokPi4rMTSw==/109951164453302229.jpg"
          className="song__bg"
        />
        <View className="song__music">
          <View
            className={classnames({
              song__music__main: true
            })}
          >
            岑考
            <Image
              className="song__music__main--before"
              src={require('../../assets/images/aag.png')}
            />
            <View className="song__music__main__cover">
              <View
                className={classnames({
                  song__music__main__img: true,
                  circling: true
                })}
              >
                <Image
                  src="https://p1.music.126.net/b2nl6jsVbqj23IV8dVvJcg==/7766950139663735.jpg"
                  className="song__music__main__img__cover"
                />
              </View>
            </View>
          </View>
        </View>
        {/*  */}
        <View className="song__music__lgour">
          <View
            className={classnames({
              song__music__lgour__cover: true,

              circling: true
            })}
          />
          <View className="slider_components">
            <Slider
              value={0}
              blockSize={15}
              activeColor="#d43c33"
              onChange={() => {}}
              onChanging={() => {}}
            />
          </View>
        </View>
        <View className="song__bottom">
          <View className="song__operation">
            <Image
              src={require('../../assets/images/song/icn_loop_mode.png')}
              className="song__operation__mode"
              // onClick={this.changePlayMode.bind(this)}
            />
            <Image
              src={require('../../assets/images/ajh.png')}
              className="song__operation__prev"
              // onClick={this.getPrevSong.bind(this)}
            />
            {false ? (
              <Image
                src={require('../../assets/images/ajd.png')}
                className="song__operation__play"
                // onClick={this.pauseMusic.bind(this)}
              />
            ) : (
              <Image
                src={require('../../assets/images/ajf.png')}
                className="song__operation__play"
                // onClick={this.playMusic.bind(this)}
              />
            )}
            <Image
              src={require('../../assets/images/ajb.png')}
              className="song__operation__next"
              // onClick={this.getNextSong.bind(this)}
            />
            <Image
              src={require('../../assets/images/song/play_icn_loved.png')}
              className="song__operation__like"
              // onClick={this.likeMusic.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Page as ComponentClass;
