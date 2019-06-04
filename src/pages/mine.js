import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'

@connect(({ feeds  })=>({
  ...feeds
}))
export default class Index extends Component {

  config = {
    navigationBarTitleText: '我的'
  }
  state = {
    arraylist: [1,2,3,1,12]
  };
  componentWillMount () {
    
  }
  dec(){
    const { staffList } = this.props
    console.log('this.props', staffList)
  }
  add() {
    const { dispatch, staffList } = this.props
    console.log('this.props', staffList)
    dispatch({
      type:'feeds/staffListFn',
      payload:[1,2,3]
    })
  }
  takeCode(e) {
    console.log('进来了', e)
    Taro.showLoading({
      title: '加载中'
    })
    let fileCode = e.detail.result
    let newNum = this.arraylist.indexOf(fileCode)

    if (String(newNum) === '-1') {
      this.arraylist.push(e.detail.result)
    }
    Taro.hideLoading()
  }
  takePhoto() {
    console.log('vvvvvvvvvvddddddd')
    const ctx = Taro.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  }
  error(e){
    console.log('aaaaaaaaaaa',e)
  }
  render () {
    return (
      <View className='todo'>
        <camera mode='scanCode' 
          device-position='back' 
          binderror={this.error}
          style='width: 100%; height:150rpx;' 
          bindscancode={this.takeCode} 
          scan-area='[0,0,200, 200]'
        ></camera>
        {/* <camera
          device-position='back'
          flash='off'
          binderror={this.error}
          style='width: 100%; height: 300px;'
        ></camera>
        <Button type='primary' onClick={this.takePhoto}>拍照</Button> */}
        {
          this.arraylist && this.arraylist.map((item, index) => {
            return (
              <view key={index}>
                <view>{{item}}</view>
                <view>删除</view>
              </view>
            )
          })
        }
        {/* <Button className='add_btn' onClick={this.takeCode}>+</Button>
        <Button className='dec_btn' onClick={this.takePhoto}>-</Button> */}
      </View>
    )
  }
}
