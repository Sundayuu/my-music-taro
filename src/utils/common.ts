import Taro from '@tarojs/taro';
export const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

export const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join('-') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  );
};

// 转换歌词字符串为数组
export const parse_lrc = (lrc_content: string) => {
  let now_lrc: Array<{
    lrc_text: string;
    lrc_sec?: number;
  }> = []; // 声明一个临时数组
  let lrc_row: Array<string> = lrc_content.split('\n'); // 将原始的歌词通过换行符转为数组
  let scroll = true; // 默认scroll初始值为true
  for (let i in lrc_row) {
    if (lrc_row[i].indexOf(']') === -1 && lrc_row[i]) {
      now_lrc.push({ lrc_text: lrc_row[i] });
    } else if (lrc_row[i] !== '') {
      let tmp: string[] = lrc_row[i].split(']');
      for (let j in tmp) {
        scroll = false;
        let tmp2: string = tmp[j].substr(1, 8);
        let tmp3: any = tmp2.split(':');
        let lrc_sec: any = Number(tmp3[0] * 60 + Number(tmp3[1]));
        if (lrc_sec && lrc_sec > 0) {
          let lrc = tmp[tmp.length - 1].replace(/(^\s*)|(\s*$)/g, '');
          lrc && now_lrc.push({ lrc_sec: lrc_sec, lrc_text: lrc });
        }
      }
    }
  }
  if (!scroll) {
    now_lrc.sort(function(
      a: { lrc_sec: number; lrc_text: string },
      b: { lrc_sec: number; lrc_text: string }
    ): number {
      return a.lrc_sec - b.lrc_sec;
    });
  }
  return {
    now_lrc: now_lrc,
    scroll: scroll
  };
};
// 退出登录
export const logout = () => {
  Taro.removeStorageSync('userId');
  Taro.reLaunch({
    url: '/pages/login/index'
  });
};
