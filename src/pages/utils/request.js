import Taro from "@tarojs/taro";
import { baseUrl } from "./url";

/**
 * 请求方法
 * @param {Object} opt 参数
 * @param {String} opt.url 接口地址
 * @param {String} opt.method 接口类型
 * @param {Object} opt.data 接口请求数据
 * @param {Boolean} opt.souce 是否返回源数据
 */
export default function request(opt) {
  const token = Taro.getStorageSync("tk");

  const opts = { ...opt };
  // 拼接路径
  opts.url = baseUrl + "/" + opts.url;
  const Data = Object.assign(
    {
      url: "",
      method: "GET",
      data: {},
      header: {
        Authorization: token || ""
      }
    },
    { ...opts }
  );

  
  return Taro.request(Data).then((res) => {
    console.log('1111',res)
    // let { statusCode, data } = res;
    /**
     * 浏览器http请求code是否正确
     */
    // if (statusCode >= 200 && statusCode < 300) {
    //   return fixApiCode(data.code, data);
    // } else {
    //   throw new Error(`网络请求错误，状态码${statusCode}`);
    // }
  });
}
