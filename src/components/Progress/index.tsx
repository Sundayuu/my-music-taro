import Taro from '@tarojs/taro';
import { View, Slider } from '@tarojs/components';
import './index.scss';
type IProps = {
  percent: number;
  onChange: (e: any) => void;
  onChanging: (e: any) => void;
};
const Progress = ({ percent, onChange, onChanging }: IProps) => {
  return (
    <View className="slider_components">
      <Slider
        value={percent}
        blockSize={15}
        activeColor="#d43c33"
        onChange={e => onChange(e)}
        onChanging={e => onChanging(e)}
      />
    </View>
  );
};
export default Progress;
