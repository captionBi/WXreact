import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import dva from './pages/utils/dva'
import { Provider } from '@tarojs/redux'
import '@tarojs/async-await'
import models from "./pages/model";
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
})

const store = dvaApp.getStore()

class App extends Component {

  config = {
    pages: [
      'pages/work',
      'pages/order',
      'pages/mine'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
     // 分包页面
     subpackages: [
      {
        root: "pages/mine",
        pages: [
          "mine"
        ]
      }
    ],
    tabBar: {
      color: '#8F8F8F',
      selectedColor: '#9151F3',
      backgroundColor: '#FFFFFF',
      list: [
        {
          text: '工作',
          pagePath: 'pages/work',
          iconPath: './img/tab_work@2x.png',
          selectedIconPath: './img/tab_work_pre@2x.png'
        },
        {
          text: '会员',
          pagePath: 'pages/order',
          iconPath: './img/tab_vip@2x.png',
          selectedIconPath: './img/tab_vip_pre@2x.png'
        },
        {
          text: '我的',
          pagePath: 'pages/mine',
          iconPath: './img/tab_my@2x.png',
          selectedIconPath: './img/tab_my_pre@2x.png'
        }
      ]
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
      <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
